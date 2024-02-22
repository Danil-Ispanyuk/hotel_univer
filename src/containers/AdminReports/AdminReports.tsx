import React, { useState } from "react";
import * as Styled from "./style";
import { AppTable } from "../../components/AppTable/AppTable";
import { tableColumns } from "./helper";
import dayjs from "dayjs";
import { useGetClientReport } from "../../query/useGetReport";
import { IReportParam } from "../../types/report";

const dateFormat = "DD.MM.YYYY";

export const AdminReports = () => {
  const [date, setDate] = useState<IReportParam | null>(null)
  const {data: reports} = useGetClientReport(date || {})
  const handleRange = (dates: any) => {
    if(dates){
      const startDate = dayjs(dates[0]).format("YYYY-MM-DD");
      const endDate = dayjs(dates[1]).format("YYYY-MM-DD");
      setDate({
        startDate,
        endDate
      })
      console.log('startDate :>> ', startDate);
      console.log('endDate :>> ', endDate);
    }
  };

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.Header>
          <Styled.Logo />
        </Styled.Header>
        <Styled.TitleContainer>
          <Styled.Title>Звітність з бронювання за обраний період</Styled.Title>
          <Styled.DateRange>
            <Styled.FormField>
              <Styled.FormLabel>
                Оберіть дату заселення та виїзду:
              </Styled.FormLabel>
              <Styled.AppRangePicker
                onChange={(values) => handleRange(values)}
                format={dateFormat}
                disabledDate={(current) => {
                  return current && current.valueOf() > Date.now();
                }}
              />
            </Styled.FormField>
          </Styled.DateRange>
        </Styled.TitleContainer>
        <Styled.Content>
          <AppTable tableColumns={tableColumns} dataSource={reports?.clientStatistics as any} />
          <Styled.SummaryContainer>
            <Styled.SummaryContent>
              Всього бронювань: <Styled.SummaryCount>{reports?.totalBookings}</Styled.SummaryCount>
            </Styled.SummaryContent>
            <Styled.SummaryContent>
              Середня вартість бронювань: <Styled.SummaryCount>{reports?.averageBookingPrice}</Styled.SummaryCount>
            </Styled.SummaryContent>
            <Styled.SummaryContent>
              Повний відсоток внеску: <Styled.SummaryCount>{reports?.totalPercentage}</Styled.SummaryCount>
            </Styled.SummaryContent>
            <Styled.SummaryContent>
              Повна сумма знижок: <Styled.SummaryCount>{reports?.totalDiscountAmount}</Styled.SummaryCount>
            </Styled.SummaryContent>
            <Styled.SummaryContent>
              Повна вартість: <Styled.SummaryCount>{reports?.totalIncome}</Styled.SummaryCount>
            </Styled.SummaryContent>
          </Styled.SummaryContainer>
        </Styled.Content>
      </Styled.Container>
    </Styled.Wrapper>
  );
};
