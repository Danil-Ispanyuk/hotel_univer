import React, { useEffect, useMemo, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Styled from "./style";
import { Controller, useForm } from "react-hook-form";
import { Checkbox, Row } from "antd";
import dayjs from "dayjs";
import { bookingSchema } from "../../schema/booking.schema";
import { IFormBooking } from "../../types/booking";
import debounce from "debounce";
import { useGetExistClient } from "../../query/useGetExistClient";
import { useGetFilterRooms } from "../../query/useGetFilterRooms";
import { IFilterRoomParams, IGetAllRooms } from "../../types/room";
import { useGetAllServices } from "../../query/useGetService";
import { IService } from "../../types/services";
import { useCreateBooking } from "../../query/useCreateBooking";

const dateFormat = "DD.MM.YYYY";

interface ISelect {
  value: string;
  label: string;
}

const countOfPersonInitialValues = [
  {
    value: "1",
    label: "1",
  },
  {
    value: "2",
    label: "2",
  },
  {
    value: "3",
    label: "3",
  },
  {
    value: "4",
    label: "4",
  },
  {
    value: "5",
    label: "5",
  },
];

export const FormSection = () => {
  const [isUserExist, setIsUserExist] = useState(false);
  const [fullName, setFullName] = useState("");
  const [availableRooms, setAvailableRooms] = useState<ISelect[] | []>([]);
  const [userDate, setUserDate] = useState<any>(undefined);
  const [choosenRoom, setChoosenRoom] = useState<IGetAllRooms | null>(null);
  const [email, setEmail] = useState("");
  const [formError, setFormError] = useState<string | null>(null);

  const { data: userExistData } = useGetExistClient(
    {
      fullName,
      email,
    },
    {
      enabled: !!fullName && !!email,
    }
  );

  const { data: servicesData } = useGetAllServices();
  const { addBooking } = useCreateBooking();

  const { data: filteredRooms } = useGetFilterRooms(
    useMemo(
      () =>
        ({
          startDate: userDate ? userDate[0] : "",
          endDate: userDate ? userDate[1] : "",
        } as IFilterRoomParams),
      [userDate]
    ),
    {
      enabled: !!userDate,
    }
  );

  const {
    handleSubmit,
    control,
    watch,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<IFormBooking>({
    resolver: yupResolver<any>(bookingSchema),
    mode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      userTypes: [],
      date: [],
      rooms: undefined,
      numberOfGuests: undefined,
      additionalServices: [],
      comment: "",
    },
  });

  const convertDataToSelect = <T,>(
    data: T[],
    valueKey: string,
    labelKey: string
  ) => {
    if (data) {
      return data.map((item: T) => ({
        value: item[valueKey as keyof T],
        label: item[labelKey as keyof T],
      }));
    }
    return [];
  };

  const additionalServiceCount = useMemo(() => {
    if (watch("additionalServices") && watch("additionalServices")?.length) {
      return watch("additionalServices")?.reduce((acc, value) => {
        acc += value;
        return acc;
      });
    }
    return 0;
  }, [watch("additionalServices")]);

  const totalCount = useMemo(() => {
    if (
      watch("numberOfGuests") &&
      watch("date") &&
      watch("date")?.length &&
      watch("rooms") &&
      filteredRooms
    ) {
      const foundRoom = filteredRooms.find(
        (room) =>
          room.roomTypeId === Number(watch("rooms")) &&
          room.occupacity === Number(watch("numberOfGuests"))
      );
      if (!foundRoom) {
        setFormError("Нажаль, немає вільних кімнат на обрані дати");
        return 0;
      }
      setFormError(null);
      const startDate = (watch("date") || [])[0];
      const endDate = (watch("date") || [])[1];
      const countOfDays =
        startDate && endDate ? endDate.diff(startDate, "d") : 0;
      const pricePerDay = foundRoom?.pricePerDay ? foundRoom.pricePerDay : 0;
      return pricePerDay * countOfDays;
    }
    return 0;
  }, [
    watch("numberOfGuests"),
    watch("date"),
    watch("rooms"),
    filteredRooms,
    additionalServiceCount,
  ]);

  const discountCount = useMemo(() => {
    if (watch("userTypes") && watch("userTypes")?.length && choosenRoom) {
      if (watch("userTypes").includes("new")) {
        return 0;
      }
      if (
        watch("userTypes").includes("exist") ||
        (watch("userTypes").includes("vpo") && watch("userTypes").length >= 1)
      ) {
        const coef = watch("userTypes").length > 1 ? 0.06 : 0.03;
        return (choosenRoom?.pricePerDay + additionalServiceCount) * coef;
      }
    }
    return 0;
  }, [watch("userTypes"), choosenRoom, additionalServiceCount]);

  useEffect(() => {
    setIsUserExist(!!userExistData);
    if (!!userExistData) {
      setValue("userTypes", []);
    }
  }, [userExistData]);

  useEffect(() => {
    if (watch("numberOfGuests") && watch("rooms") && filteredRooms) {
      const foundRoom = filteredRooms.find(
        (room) =>
          room.roomTypeId === Number(watch("rooms")) &&
          room.occupacity === Number(watch("numberOfGuests"))
      );
      setChoosenRoom(foundRoom || null);
    }
  }, [watch("rooms"), watch("numberOfGuests"), filteredRooms]);

  useEffect(() => {
    if (filteredRooms) {
      const formatValues = filteredRooms.map((filteredRoom: IGetAllRooms) => ({
        value: String(filteredRoom.roomType.id),
        label: filteredRoom.roomType.name,
      }));
      const uniqueValue = Array.from(
        new Set(formatValues.map((roomType: ISelect) => roomType.label))
      );
      const selectValues = uniqueValue.map((uniqueValue) =>
        formatValues.find(
          (formatValue: ISelect) => formatValue.label === uniqueValue
        )
      );
      setAvailableRooms(selectValues as ISelect[]);
    }
  }, [filteredRooms]);

  useEffect(() => {
    if (!watch("date")) {
      setValue("rooms", undefined);
      setChoosenRoom(null);
    }
  }, [watch("date")]);

  useEffect(() => {
    console.log("formError :>> ", formError);
  }, [formError]);

  const onSubmit = (data: IFormBooking) => {
    try {
      if (data && data.date && choosenRoom) {
        const startDate = dayjs(data?.date[0] || null).format("YYYY-MM-DD");
        const endDate = dayjs(data?.date[1] || null).format("YYYY-MM-DD");
        const isClientVpo = data.userTypes.includes("vpo");
        const initialObject = {
          roomId: choosenRoom.id,
          isClientVpo,
          startDate,
          endDate,
          fullPrice: `${totalCount + additionalServiceCount}`,
          priceWithDiscount: `${
            totalCount + additionalServiceCount - discountCount
          }`,
          client: {
            fullName: data.fullName,
            email: data.email,
          },
        };
        addBooking(initialObject);
      }
      return;
    } catch (error) {
      return error;
    }
  };

  return (
    <Styled.Wrapper id="form">
      <Styled.Container>
        <Styled.FormContainer onSubmit={handleSubmit(onSubmit)}>
          <Styled.Title>Анкета бронювання</Styled.Title>
          <Styled.Line />
          <Styled.Subtitle>
            Будь-ласка, заповніть дані для бронювання номеру в готелі Premier в
            місті Харків
          </Styled.Subtitle>
          {formError && (
            <Styled.ErrorContainer>{formError}</Styled.ErrorContainer>
          )}
          <Styled.FormSection>
            <Styled.FormField>
              <Styled.FormLabel>ПІБ:</Styled.FormLabel>
              <Controller
                control={control}
                name="fullName"
                defaultValue=""
                render={() => (
                  <Styled.AppInput
                    onChange={debounce(async (event) => {
                      setValue("fullName", event.target.value);
                      const result = await trigger("fullName");
                      if (result) {
                        setFullName(watch("fullName"));
                      }
                    }, 500)}
                    placeholder="Введіть ваше ПІБ"
                  />
                )}
              />
              {errors?.fullName && (
                <Styled.ErrorMessage>
                  {errors.fullName.message}
                </Styled.ErrorMessage>
              )}
            </Styled.FormField>
            <Styled.FormField>
              <Styled.FormLabel>Email:</Styled.FormLabel>
              <Controller
                control={control}
                name="email"
                defaultValue=""
                render={() => (
                  <Styled.AppInput
                    placeholder="Введіть ваше Email"
                    onChange={debounce(async (event) => {
                      setValue("email", event.target.value);
                      const result = await trigger("email");
                      if (result) {
                        setEmail(watch("email"));
                      }
                    }, 500)}
                  />
                )}
              />
              {errors?.email && (
                <Styled.ErrorMessage>
                  {errors.email.message}
                </Styled.ErrorMessage>
              )}
            </Styled.FormField>
          </Styled.FormSection>
          <Styled.CheckboxContainer>
            <Styled.FormLabel>Оберіть відповідне:</Styled.FormLabel>
            <Controller
              name="userTypes"
              control={control}
              render={({ field }) => (
                <Checkbox.Group {...field}>
                  <Row>
                    <Styled.AppCheckboxCol>
                      <Styled.AppCheckbox disabled={isUserExist} value="new">
                        Новий користувач
                      </Styled.AppCheckbox>
                      <Styled.AppCheckbox disabled={!isUserExist} value="exist">
                        Вже бронював (-3%)
                      </Styled.AppCheckbox>
                      <Styled.AppCheckbox disabled={!isUserExist} value="vpo">
                        ВПО (-3%)
                      </Styled.AppCheckbox>
                    </Styled.AppCheckboxCol>
                  </Row>
                </Checkbox.Group>
              )}
            />
            {errors?.userTypes && (
              <Styled.ErrorMessage>
                {errors.userTypes.message}
              </Styled.ErrorMessage>
            )}
          </Styled.CheckboxContainer>
          <Styled.FormSection>
            <Styled.FormField>
              <Styled.FormLabel>
                Оберіть дату заселення та виїзду:
              </Styled.FormLabel>
              <Controller
                name="date"
                defaultValue={undefined}
                control={control}
                render={() => (
                  <Styled.AppRangePicker
                    value={watch("date")}
                    onChange={(values) => {
                      setValue("date", values);
                      setUserDate(
                        values?.map((value) =>
                          dayjs(value).format("YYYY-MM-DD")
                        )
                      );
                    }}
                    format={dateFormat}
                    disabledDate={(current) =>
                      current.isBefore(dayjs().subtract(1, "day"))
                    }
                  />
                )}
              />
              {errors?.date && (
                <Styled.ErrorMessage>{errors.date.message}</Styled.ErrorMessage>
              )}
            </Styled.FormField>
            <Styled.FormField>
              <Styled.FormLabel>Доступні типи кімнат:</Styled.FormLabel>
              <Controller
                name="rooms"
                defaultValue={undefined}
                control={control}
                render={({ field }) => (
                  <Styled.AppSelect
                    placeholder={"Оберіть зі списку"}
                    options={availableRooms}
                    {...field}
                  />
                )}
              />
              {errors?.rooms && (
                <Styled.ErrorMessage>
                  {errors.rooms.message}
                </Styled.ErrorMessage>
              )}
            </Styled.FormField>
          </Styled.FormSection>
          <Styled.FormSection>
            <Styled.FormField>
              <Styled.FormLabel>Можлива кількість осіб:</Styled.FormLabel>
              <Controller
                name="numberOfGuests"
                defaultValue={undefined}
                control={control}
                render={({ field }) => (
                  <Styled.AppSelect
                    placeholder={"Оберіть зі списку"}
                    options={countOfPersonInitialValues}
                    {...field}
                  />
                )}
              />
              {errors?.numberOfGuests && (
                <Styled.ErrorMessage>
                  {errors.numberOfGuests.message}
                </Styled.ErrorMessage>
              )}
            </Styled.FormField>
            <Styled.FormField>
              <Styled.FormLabel>Додаткові послуги:</Styled.FormLabel>
              <Controller
                name="additionalServices"
                defaultValue={undefined}
                control={control}
                render={({ field }) => (
                  <Styled.AppSelect
                    mode="multiple"
                    placeholder={"Оберіть зі списку"}
                    options={convertDataToSelect(
                      servicesData as IService[],
                      "pricePerDay",
                      "name"
                    )}
                    {...field}
                  />
                )}
              />
              {errors?.additionalServices && (
                <Styled.ErrorMessage>
                  {errors.additionalServices.message}
                </Styled.ErrorMessage>
              )}
            </Styled.FormField>
          </Styled.FormSection>
          <Styled.FormSection>
            <Styled.FormField>
              <Styled.FormLabel>Коментар:</Styled.FormLabel>
              <Controller
                name="comment"
                defaultValue={""}
                control={control}
                render={({ field }) => (
                  <Styled.AppTextArea
                    placeholder={"Напишіть коментар"}
                    {...field}
                  />
                )}
              />
            </Styled.FormField>
          </Styled.FormSection>
          <Styled.FormDetailsContainer>
            <Styled.FormDetails>
              <Styled.SummaryTextContainer>
                <Styled.SummaryText>Ціна за добу:</Styled.SummaryText>
                <Styled.SummaryText>
                  {choosenRoom?.pricePerDay || 0} грн
                </Styled.SummaryText>
              </Styled.SummaryTextContainer>
              <Styled.SummaryTextContainer>
                <Styled.SummaryText>Знижка:</Styled.SummaryText>
                <Styled.SummaryText>-{discountCount} грн</Styled.SummaryText>
              </Styled.SummaryTextContainer>
              <Styled.SummaryTextContainer>
                <Styled.SummaryText>Додаткові послуги:</Styled.SummaryText>
                <Styled.SummaryText>
                  {additionalServiceCount} грн
                </Styled.SummaryText>
              </Styled.SummaryTextContainer>
              <Styled.Line />
              <Styled.SummaryTextContainer>
                <Styled.SummaryText>Ціна бронювання:</Styled.SummaryText>
                <Styled.SummaryText>
                  {totalCount + additionalServiceCount - discountCount} грн
                </Styled.SummaryText>
              </Styled.SummaryTextContainer>
            </Styled.FormDetails>
            <Styled.FormBtnSubmit>
              <Styled.SubmitButton disabled={!!formError} htmlType="submit">
                Забронювати
              </Styled.SubmitButton>
            </Styled.FormBtnSubmit>
          </Styled.FormDetailsContainer>
        </Styled.FormContainer>
      </Styled.Container>
    </Styled.Wrapper>
  );
};
