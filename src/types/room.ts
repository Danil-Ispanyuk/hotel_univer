export interface IGetAllRooms {
  id: string;
  roomTypeId: number;
  roomNumber: number;
  occupacity: number;
  pricePerDay: number;
  bookings: any[];
  roomType: RoomType;
}

export interface RoomType {
  id: string;
  name: string;
}

export interface IFilterRoomParams {
    countOfPerson: string;
    roomtype: string;
    startDate: string;
    endDate: string;
}
