export interface IReportParam {
  startDate: string;
  endDate: string;
}
export interface IReport {
  clientStatistics: ClientStatistic[];
  totalBookings: number;
  averageBookingPrice: number;
  totalPercentage: number;
  totalDiscountAmount: number;
  totalIncome: number;
}

export interface ClientStatistic {
  clientName: string;
  clientEmail: string;
  numberOfBookings: number;
  averageBookingPrice: number;
  percentage: number;
  discountAmount: number;
  totalIncome: number;
}
