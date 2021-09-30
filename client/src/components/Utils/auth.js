import axios from "axios";

export const isLoggedin = () => {
  try {
    return axios.get(`/get_current_user`);
  } catch (error) {}
};
