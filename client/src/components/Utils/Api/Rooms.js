import axios from "axios";

export const getAllRooms = (Data) => {
  try {
    return axios.get("/get-all-rooms");
  } catch (error) {}
};
export const bookARoom = (id, data) => {
  try {
    return axios.post(`/book-a-room/${id}`, data);
  } catch (error) {}
};
