import * as yup from "yup";

export const bookingSchema = yup.object().shape({
  fullName: yup.string().required("Full name is required"),
  email: yup.string().email("Email is not valid").required("Email is required"),
  userTypes: yup.array().min(1, "Choose type of user is required"),
  date: yup.array().min(1, "Date is required"),
  rooms: yup.string().required("Rooms is required"),
  numberOfGuests: yup.string().required("Count of guests is required"),
});
