import React, { useState, useEffect, useContext } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { ImPlus } from "react-icons/im";
import { UserData } from "../../../../../App";
import { getBookedRoomsDataofRecord } from "../../../../Utils/Api/Records";
import Rooms from "./Rooms";
import Moment from "react-moment";

const BookRoom = (props) => {
  const { _id } = props;
  const [displayDashBoard, setdisplayDashBoard] = useState(true);
  const [bookedRooms, setbookedRooms] = useState([]);
  const userContext = useContext(UserData);

  const getBookedRooms = () => {
    getBookedRoomsDataofRecord(_id)
      .then((res) => {
        if (res.data) {
          console.log(res.data.RoomsBooked);
          setbookedRooms(res.data.RoomsBooked);
        }
        userContext.setisLoading(false);
      })
      .catch((err) => {
        console.log(err);
        userContext.setisLoading(false);
      });
  };

  useEffect(() => {
    Aos.init({ duration: 1500 });
    userContext.setisLoading(true);
    getBookedRooms();
  }, []);

  return (
    <div className="book-room">
      {/* <div className="container">
        <div className="row">
          <div className="col-10"></div>
        </div>
      </div> */}
      {displayDashBoard ? (
        <div className="book-room-dashboard">
          <div className="container-fluid mb-3">
            <span className="book-room-dashboard-header">Booked Rooms</span>
            <span
              className="book-room-dashboard-header"
              style={{ cursor: "pointer" }}
              onClick={() => setdisplayDashBoard(false)}
            >
              Book Room
              <ImPlus size={12} style={{ marginLeft: "5px" }} />
            </span>
          </div>

          <div className="container-fluid">
            <div className="row">
              {bookedRooms.length > 0
                ? bookedRooms.map((room, index) => {
                    return (
                      <div className="col-md-4">
                        <div className="card book-room-card">
                          <div class="card-body">
                            <p class="card-text">
                              <div className="container">
                                <div className="row mt-2">
                                  Room No : {room.roomNo}
                                </div>
                                <div className="row mt-2">
                                  No of Days : {room.noOfDays}
                                </div>
                                <div className="row mt-2">
                                  Cost (In Rs.) : {room.totalPrice}
                                </div>
                                <div className="row mt-2">
                                  Booked At :{" "}
                                  <Moment
                                    format="DD MMM, YYYY-hh:mm A"
                                    date={room.bookedAt}
                                  />
                                </div>

                                <div className="row">
                                  <Link className="btn room-details-btn">
                                    View Room Details
                                  </Link>
                                </div>
                              </div>
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })
                : ""}
            </div>
          </div>
        </div>
      ) : (
        <div className="book-new-room">
          <Rooms _id={_id} />
        </div>
      )}
    </div>
  );
};

export default BookRoom;
