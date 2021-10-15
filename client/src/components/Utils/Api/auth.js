import axios from "axios";

export const loginApi = (userData) => {
  try {
    // return axios({
    //   method: "POST",
    //   data: userData,
    //   withCredentials: true,
    //   url: "/login",
    // });

    return axios.post(`/login`, userData);
  } catch (error) {}
};

export const isLoggedin = () => {
  try {
    return axios.get(`/get_current_user`);
  } catch (error) {}
};
