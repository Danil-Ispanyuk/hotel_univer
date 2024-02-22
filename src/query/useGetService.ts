import { useQuery } from "react-query";
import { getAllServices } from "../api";

export const useGetAllServices = () => {
  return useQuery(["get-all-services"], () => getAllServices());
};
