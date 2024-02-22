import { UseQueryOptions, useQuery } from "react-query";
import { IFilterRoomParams, IGetAllRooms } from "../types/room";
import { getFilteredRooms } from "../api";
import { AxiosError } from "axios";

export const useGetFilterRooms = (params: IFilterRoomParams, options?: UseQueryOptions<IGetAllRooms[], AxiosError>) => {
  return useQuery<IGetAllRooms[], AxiosError>(["get-filter-rooms", params], 
  () => getFilteredRooms(params),
  options
  );
};
