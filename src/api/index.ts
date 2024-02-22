import { IBooking } from "../types/booking";
import { IExistClientParam } from "../types/client";
import { IReport, IReportParam } from "../types/report";
import { IFilterRoomParams, IGetAllRooms } from "../types/room";
import { IService } from "../types/services";
import { instance } from "./instance";

export const getAllRooms = (): Promise<IGetAllRooms> => instance.get("/api/room/all");

export const getAllServices = (): Promise<IService[]> => instance.get("/api/service/all");

export const getFilteredRooms = (params: IFilterRoomParams): Promise<IGetAllRooms[]> => instance.get("/api/room/filter", {
    params
});

export const getExistClient = (params: IExistClientParam): Promise<boolean> => instance.get("api/Client/isExists", {
    params
})

export const getAllReport = (params: IReportParam | Object): Promise<IReport> => instance.get("api/report", {
    params
})

export const createBooking = (data: IBooking): Promise<void> => instance.post("/api/booking/book", data)
