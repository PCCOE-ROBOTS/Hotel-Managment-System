import React, { useEffect, useContext } from "react";
import { useRouteMatch } from "react-router";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link, Redirect, Switch, Route } from "react-router-dom";
import BookRoom from "./Sections/BookRoom/BookRoom";
import OrderFood from "./Sections/OrderFood/OrderFood";
import { UserData } from "../../../App";

const Dashboard = () => {
  const { path, url } = useRouteMatch();
  const userData = useContext(UserData);
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  // if (!userData.authenticated) {
  //   return <Redirect to="/login" />;
  // }
  return (
    <>
      <div className="dashboard">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <div
                className="container-fluid"
                style={{
                  backgroundColor: "white",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "85vh",
                  borderRadius: "5px",
                }}
              >
                <Link className="row dashboard-tab mt-3" to={`${url}`}>
                  <strong style={{ textAlign: "center" }}>Dashboard</strong>
                </Link>
                <Link className="row dashboard-tab" to={`${url}/book-room`}>
                  <strong style={{ textAlign: "center" }}>Book Room</strong>
                </Link>
                <Link className="row dashboard-tab" to={`${url}/order-food`}>
                  <strong style={{ textAlign: "center" }}>Order Food</strong>
                </Link>
              </div>
            </div>
            <div className="col-md-10">
              <Switch>
                <Route exact path={`${path}`}>
                  <div
                    className="container-fluid"
                    style={{
                      backgroundColor: "white",
                      padding: "2rem",
                      height: "85vh",
                      borderRadius: "5px",
                    }}
                  >
                    Dashboard
                  </div>
                </Route>
                <Route path={`${path}/book-room`}>
                  <BookRoom />
                </Route>
                <Route path={`${path}/order-food`}>
                  <OrderFood />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
