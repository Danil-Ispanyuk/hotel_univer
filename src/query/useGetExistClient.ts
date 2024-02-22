import { UseQueryOptions, useQuery } from "react-query";
import { getExistClient } from "../api";
import { IExistClientParam } from "../types/client";
import { AxiosError } from "axios";

export const useGetExistClient = (
  params: IExistClientParam,
  options?: UseQueryOptions<boolean, AxiosError, IExistClientParam>
) => {
  return useQuery<boolean, AxiosError, IExistClientParam>(
    ["get-exist-client", params],
    () => getExistClient(params),
    options
  );
};
