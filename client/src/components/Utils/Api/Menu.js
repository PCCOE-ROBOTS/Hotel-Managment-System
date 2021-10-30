import axios from "axios";

export const getMenu = (Data) => {
  try {
    return axios.get("/get-menu");
  } catch (error) {}
};
