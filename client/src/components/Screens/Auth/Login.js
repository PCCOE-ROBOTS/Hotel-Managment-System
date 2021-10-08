import React, { useState, useContext } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { UserData } from "../../../App";

const Login = () => {
  const [userData, setuserData] = useState({ username: "", password: "" });
  const [isLoggedin, setisLoggedin] = useState(false);
  const contextuserData = useContext(UserData);
  const login = () => {
    axios({
      method: "POST",
      data: userData,
      withCredentials: true,
      url: "http://localhost:8080/login",
    }).then((res) => {
      if (res.data.status === "success") {
        contextuserData.setuser(res.data.user);
        contextuserData.setauthenticated(true);
        // contextuserData.checkAuth();
        setisLoggedin(true);
      } else {
        alert("Invalid User");
        setuserData({ username: "", password: "" });
      }
    });
  };
  if (isLoggedin) {
    console.log("redirecting from login");
    return <Redirect to="/receptionist/customers" />;
  }
  return (
    <div className="login">
      <div className="container login-form-container">
        <div className=" col-sm-12 col-lg-5 login-form">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              login();
            }}
          >
            <div className="mb-3">
              <input
                className="form-control "
                type="text"
                name="username"
                placeholder="Username"
                value={userData.username}
                onChange={(e) => {
                  setuserData({
                    ...userData,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                type="password"
                name="password"
                placeholder="Password"
                value={userData.password}
                onChange={(e) => {
                  setuserData({
                    ...userData,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
            </div>

            <button className="btn btn-primary login-btn" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
