import React, { useState, useContext } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { UserData } from "../../App";

const Login = () => {
  const [userData, setuserData] = useState({ username: "", password: "" });
  const [isLoggedin, setisLoggedin] = useState(false);
  const contextuserData = useContext(UserData);
  const login = () => {
    axios
      .post("http://localhost:8080/login", userData, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Cache: "no-cache",
        },
        credentials: "same-origin",
      })
      .then((res) => {
        if (res.data) {
          contextuserData.setuser(res.data);
          contextuserData.setauthenticated(true);
          setisLoggedin(true);
          //localStorage.setItem("current_user", JSON.stringify(res.data));
        }
      });
    try {
      axios
        .get(`http://localhost:8080/get_current_user`)
        .then((res) => {
          contextuserData.setuser(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {}
  };
  if (isLoggedin) {
    return <Redirect to="/receptionist/dashboard" />;
  }
  return (
    <div className="login login-form">
      <div className="contact-clean row">
        <div className="col-md-12" style={{ padding: "0" }}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              login();
            }}
          >
            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                name="username"
                placeholder="Username"
                onChange={(e) => {
                  setuserData({ ...userData, [e.target.name]: e.target.value });
                }}
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => {
                  setuserData({ ...userData, [e.target.name]: e.target.value });
                }}
              />
            </div>

            <button className="btn btn-primary" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
