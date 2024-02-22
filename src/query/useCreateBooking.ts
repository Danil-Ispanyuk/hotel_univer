import { AxiosError } from "axios";
import { UseMutationOptions, useMutation } from "react-query";
import { IBooking } from "../types/booking";
import { createBooking } from "../api";

export const useCreateBooking = (
  options?: UseMutationOptions<void, AxiosError<unknown, any>, IBooking>
) => {
  const { mutate, ...rest } = useMutation(["add-booking"], createBooking, {
    ...options,
  });

  return { addBooking: mutate, ...rest };
};
