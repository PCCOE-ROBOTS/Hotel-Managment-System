import axios from "axios";

export const loginApi = (userData) => {
  try {
    return axios({
      method: "POST",
      data: userData,
      withCredentials: true,
      url: "http://localhost:8080/login",
    });
  } catch (error) {}
};

export const isLoggedin = () => {
  try {
    return axios.get(`/get_current_user`);
  } catch (error) {}
};
