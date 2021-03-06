import React, { useEffect, useState, useContext } from "react";
import { ImPlus } from "react-icons/im";
import Aos from "aos";
import "aos/dist/aos.css";
import { addnewRecord } from "../../../Utils/Api/Records";
import { UserData } from "../../../../App";
import { Redirect, Link } from "react-router-dom";
import { ImArrowLeft2 } from "react-icons/im";

const AddNewRecord = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const userContext = useContext(UserData);

  const [data, setData] = useState({
    name: "",
    email: "",
    checkIn: null,
    checkOut: null,
    adults: 0,
    childs: 0,
  });

  const [isAdded, setisAdded] = useState(false);

  const addRecord = () => {
    let newData = { ...data };
    newData.createdAt = new Date();
    addnewRecord(newData)
      .then((res) => {
        if (res.data.status === "success") {
          userContext.handleAlert("success", "Record added successfully");
          setisAdded(true);
          //   return <Redirect to="/receptionist/customers" />;
        } else {
          userContext.handleAlert("error", "Something went wrong");
        }
      })
      .catch((err) => {
        userContext.handleAlert("error", "Something went wrong");
      });
  };

  return (
    <div>
      {isAdded ? <Redirect to="/receptionist/customers" /> : ""}
      <div
        className="container"
        style={{ marginTop: "10vh", textAlign: "center" }}
      >
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
                width: "40px",
                height: "40px",
                color: "#e0e4ff",
                borderRadius: "100%",
                backgroundColor: "#000",
              }}
            >
              <ImArrowLeft2 size={16} />
            </Link>
          </div>
        </div>
        <h1 className="add-new-record-title">Add New Record</h1>
      </div>
      <div className="col-sm-12 add-new-record">
        <div className="add-new-form">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addRecord();
            }}
          >
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <input
                    className="form-control "
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={data.name}
                    required
                    onChange={(e) => {
                      setData({ ...data, [e.target.name]: e.target.value });
                    }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    value={data.email}
                    onChange={(e) => {
                      setData({ ...data, [e.target.name]: e.target.value });
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <span className="check-input-label">CHECK-IN</span>
                  <input
                    className="form-control "
                    type="datetime-local"
                    name="checkIn"
                    required
                    onChange={(e) => {
                      setData({
                        ...data,
                        [e.target.name]: new Date(e.target.value),
                      });
                    }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <span className="check-input-label">CHECK-OUT</span>
                  <input
                    className="form-control"
                    type="datetime-local"
                    name="checkOut"
                    required
                    onChange={(e) => {
                      setData({
                        ...data,
                        [e.target.name]: new Date(e.target.value),
                      });
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="mb-3">
                  <span className="check-input-label">Number of Adults</span>
                  <div className="col-4">
                    {" "}
                    <input
                      className="form-control"
                      type="number"
                      name="adults"
                      min="0"
                      required
                      onChange={(e) => {
                        setData({
                          ...data,
                          [e.target.name]: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="mb-3">
                  <span className="check-input-label">Number of Childs</span>
                  <div className="col-4">
                    {" "}
                    <input
                      className="form-control"
                      type="number"
                      name="childs"
                      min="0"
                      required
                      onChange={(e) => {
                        setData({
                          ...data,
                          [e.target.name]: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <button className="btn btn-primary login-btn" type="submit">
              Add <ImPlus style={{ marginLeft: "0.5rem" }} size={"12"} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewRecord;
