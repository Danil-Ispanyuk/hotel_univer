import { UseQueryOptions, useQuery } from "react-query";
import { getAllReport } from "../api";
import { IReport, IReportParam } from "../types/report";
import { AxiosError } from "axios";

export const useGetClientReport = (params: IReportParam | Object, options?: UseQueryOptions<IReport, AxiosError>) => {
  return useQuery<IReport, AxiosError>(["get-all-report", params], () =>
    getAllReport(params),
    options
  );
};
