import React, { useState, useEffect, useContext } from "react";
import { UserData } from "../../../../../App";
import { getRecordUsingId } from "../../../../Utils/Api/Records";
import { BiEdit } from "react-icons/bi";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const DashBoardDetails = (props) => {
  const { _id } = props;
  const userContext = useContext(UserData);
  const [data, setdata] = useState(null);

  const getRecordData = (id) => {
    getRecordUsingId(id)
      .then((res) => {
        if (res.data.record) {
          setdata(res.data.record);
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
    getRecordData(_id);
  }, [_id]);
  return (
    <div className="container-fluid dashboard-details dashboard-right">
      {data ? (
        <div className="container">
          <div
            className="row"
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Link
              to="/"
              style={{
                fontWeight: "600",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "40px",
                height: "40px",
                color: "#e0e4ff",
                borderRadius: "100%",
                backgroundColor: "#000",
                margin: "1rem",
              }}
            >
              {" "}
              <BiEdit size={20} />
            </Link>
          </div>
          <div className="row dashboard-row">
            <div className="col-4">Name : {data.name}</div>
            <div className="col-4">Email Id : {data.email}</div>
          </div>
          <div className="row dashboard-row">
            <div className="col-4">
              Check In :{" "}
              <Moment format="DD MMM, YYYY-hh:mm A" date={data.checkIn} />
            </div>
            <div className="col-4">
              Check Out :{" "}
              <Moment format="DD MMM, YYYY-hh:mm A" date={data.checkOut} />
            </div>
          </div>
          <div className="row dashboard-row">
            <div className="col-4">
              Created at :{" "}
              <Moment format="DD MMM, YYYY-hh:mm A" date={data.createdAt} />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default DashBoardDetails;
