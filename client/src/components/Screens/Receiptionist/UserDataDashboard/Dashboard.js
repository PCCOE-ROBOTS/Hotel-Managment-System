import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useRouteMatch, useParams } from "react-router";
import { ImArrowLeft2 } from "react-icons/im";
import { Link, Switch, Route } from "react-router-dom";
import BookRoom from "./BookRoom/BookRoom";
import OrderFood from "./OrderFood/OrderFood";
import DashBoardDetails from "./DashBoardDetails/DashBoardDetails";

const Dashboard = () => {
  const { path, url } = useRouteMatch();
  const { recordId } = useParams();

  return (
    <>
      <div className="dashboard">
        <div className="container-fluid">
          <div className="row my-2">
            <div className="col-12">
              <Link
                to={`/receptionist/customers`}
                style={{
                  fontWeight: "600",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "30px",
                  height: "30px",
                  color: "#e0e4ff",
                  borderRadius: "100%",
                  backgroundColor: "#000",
                }}
              >
                <ImArrowLeft2 size={14} />
              </Link>
            </div>
          </div>
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
                  <strong style={{ textAlign: "center" }}>Dashboard </strong>
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
                  <DashBoardDetails _id={recordId} />
                </Route>
                <Route path={`${path}/book-room`}>
                  <BookRoom _id={recordId} />
                </Route>
                <Route path={`${path}/order-food`}>
                  <OrderFood _id={recordId} />
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
