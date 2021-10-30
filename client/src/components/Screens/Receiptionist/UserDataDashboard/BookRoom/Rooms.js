import React, { useEffect, useContext, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Redirect } from "react-router";
import { UserData } from "../../../../../App";
import { bookARoom, getAllRooms } from "../../../../Utils/Api/Rooms";

const Rooms = (props) => {
  const { _id } = props;
  const [rooms, setrooms] = useState([]);
  const [roomSelected, setroomSelected] = useState(false);
  //   const [bookingRedirect, setbookingRedirect] = useState(false);
  const [selectedRoomData, setselectedRoomData] = useState({
    noOfDays: 0,
    roomId: "",
    roomNo: "",
  });
  const userContext = useContext(UserData);

  const loadRooms = () => {
    getAllRooms()
      .then((res) => {
        if (res.data.status === "success") {
          setrooms(res.data.rooms);
        }
        userContext.setisLoading(false);
      })
      .catch((err) => {
        console.log(err);
        userContext.setisLoading(false);
      });
  };

  useEffect(() => {
    userContext.setisLoading(true);
    loadRooms();
  }, []);

  const handleRoomClick = (data) => {
    let roomData = { ...data };
    setselectedRoomData(roomData);
    setroomSelected(true);
  };

  const handleBooking = () => {
    let roomData = { ...selectedRoomData };
    roomData.bookedAt = new Date();

    bookARoom(_id, roomData)
      .then((res) => {
        if (res.data.status === "success") {
          userContext.setisLoading(false);
          window.location.reload();
          userContext.handleAlert("success", "Room Booked Successfully");
        }
      })
      .catch((err) => {
        console.log(err);
        userContext.setisLoading(false);
        window.location.reload();
        userContext.handleAlert("error", "Error in Booking Room");
      });
  };

  return (
    <div className="container-fluid">
      {!roomSelected ? (
        <>
          {" "}
          <span className="legends">
            Not Available <span className="legend-red-square"></span>
            Available <span className="legend-green-square"></span>
          </span>
          <div className="row">
            {rooms.length > 0
              ? rooms.map((room) => {
                  return (
                    <>
                      <div className="col-sm-3 col-md-1 room-no">
                        <div
                          className="row-block"
                          style={{
                            backgroundColor: room.bookedStatus
                              ? "#e81f39"
                              : "#70e000",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            if (room.bookedStatus) {
                              userContext.handleAlert(
                                "error",
                                "Room is not available"
                              );
                            } else {
                              handleRoomClick(room);
                            }
                          }}
                        >
                          {room.roomNo}
                        </div>
                      </div>
                    </>
                  );
                })
              : ""}
          </div>
        </>
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <strong>Selected Room No : {selectedRoomData.roomNo}</strong>
            </div>
            <div className="col-sm-3">
              <strong>
                Cost Per Day (In Rs.) : {selectedRoomData.roomPricePerDay}
              </strong>
            </div>
            <div className="col-sm-3">
              <strong>AC : {selectedRoomData.AC ? "Yes" : "No"}</strong>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-6">
              <span>Enter Number of Days :</span>
              <input
                className="form-control"
                type="number"
                name="noOfDays"
                min="0"
                required
                onChange={(e) => {
                  setselectedRoomData({
                    ...selectedRoomData,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
            </div>
          </div>

          <button
            className="btn book-btn"
            onClick={() => {
              userContext.setisLoading(true);
              handleBooking();
            }}
          >
            Book
          </button>
        </div>
      )}
    </div>
  );
};

export default Rooms;
