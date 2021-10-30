import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

const OrderFood = (props) => {
  const { _id } = props;
  const [displayDashBoard, setdisplayDashBoard] = useState(true);
  return (
    <div className="order-food">
      {displayDashBoard ? (
        <div className="book-room-dashboard">
          <div className="container-fluid mb-3">
            <span className="book-room-dashboard-header">Ordered Food</span>
            <span
              className="book-room-dashboard-header"
              style={{ cursor: "pointer" }}
              onClick={() => setdisplayDashBoard(false)}
            >
              Menu
              {/* <ImPlus size={12} style={{ marginLeft: "5px" }} /> */}
            </span>
          </div>

          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4">
                <div className="card book-room-card">
                  <div class="card-body">
                    <p class="card-text">
                      <div className="container">
                        <div className="row mt-2">Name: Paneer Masala</div>
                        <div className="row mt-2">Quantity : 1</div>
                        <div className="row mt-2">Cost (In Rs.): 200 Rs</div>
                        <div className="row mt-2">
                          Booked At :{" "}
                          {/* <Moment
                                  format="DD MMM, YYYY-hh:mm A"
                                  date={room.bookedAt}
                                /> */}
                        </div>

                        <div className="row">
                          <Link className="btn room-details-btn">
                            View Dish Details
                          </Link>
                        </div>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <Menu _id={_id} />
        </>
      )}
    </div>
  );
};

export default OrderFood;
