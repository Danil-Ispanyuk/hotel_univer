import { Dayjs } from "dayjs";

export interface IBooking {
  roomId: string;
  isClientVpo: boolean;
  startDate: string;
  endDate: string;
  fullPrice: string;
  priceWithDiscount: string;
  client: Client;
}

export interface IFormBooking {
  fullName: string;
  email: string;
  userTypes: any[];
  date: [start: Dayjs | null | undefined, end: Dayjs | null | undefined] | undefined;
  rooms: string | undefined;
  numberOfGuests: string;
  additionalServices?: any[];
  comment?: string;
}


export interface Client {
  fullName: string;
  email: string;
}
