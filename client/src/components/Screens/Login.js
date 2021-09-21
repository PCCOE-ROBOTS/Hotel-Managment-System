import React from "react";

const Login = () => {
  return (
    <div className="login">
      <div className="login-form">
        <form>
          <div className="mb-3">
            <label for="username" className="form-label">
              Email address
            </label>
            <input type="text" className="form-control" id="username" />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
