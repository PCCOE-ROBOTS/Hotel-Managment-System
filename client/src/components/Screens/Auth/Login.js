import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { UserData } from "../../../App";
import { loginApi } from "../../Utils/Api/auth";

const Login = () => {
  const [userData, setuserData] = useState({ username: "", password: "" });
  const [isLoggedin, setisLoggedin] = useState(false);
  const contextuserData = useContext(UserData);
  const login = () => {
    loginApi(userData).then((res) => {
      if (res.data.status !== "success") {
        setuserData({ username: "", password: "" });
        contextuserData.handleAlert("error", "Invalid Username or password");
      } else {
        contextuserData.setuser(res.data.user);
        contextuserData.setauthenticated(true);
        setisLoggedin(true);
        contextuserData.handleAlert("success", "Logged in successfully");
      }
    });
  };
  if (isLoggedin) {
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
