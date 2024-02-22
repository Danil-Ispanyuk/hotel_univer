import { useQuery } from "react-query";
import { getAllRooms } from "../api";

export const useGetAllRooms = () => {
  return useQuery(["get-all-rooms"], () => getAllRooms());
};
