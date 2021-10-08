import axios from "axios";

export const addnewRecord = (Data) => {
  try {
    return axios.post("/add-new-record", Data);
  } catch (error) {}
};
export const getRecords = () => {
  try {
    return axios.get("/get-all-records");
  } catch (error) {}
};
export const getRecordUsingId = (_id) => {
  try {
    return axios.get(`/get-record/${_id}`);
  } catch (error) {}
};
export const deleteOneRecord = (data) => {
  try {
    return axios.post(`/delete-record`, data);
  } catch (error) {}
};
