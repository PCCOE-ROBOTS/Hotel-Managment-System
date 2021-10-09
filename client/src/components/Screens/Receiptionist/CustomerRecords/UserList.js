import React, { useState, useEffect, useContext } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { BiEdit, BiCommentDetail } from "react-icons/bi";
import { ImPlus } from "react-icons/im";
import { MdDelete } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
// import {  AiOutlineLine } from "react-icons/ai";
import { MdClear } from "react-icons/md";
// import { BsCaretDown, BsCaretUp } from "react-icons/bs";
// import Queue from "../../Utils/Queue";
// import { sortFunction } from "../../Utils/sort";
import { cleanTitle } from "../../../Utils/regex";
import { deleteOneRecord, getRecords } from "../../../Utils/Api/Records";
import { UserData } from "../../../../App";
import Moment from "react-moment";

const UserList = () => {
  const [data, setData] = useState(null);
  const [searchValue, setsearchValue] = useState("");

  const userContext = useContext(UserData);

  const deleteRecord = (deleteData) => {
    deleteOneRecord(deleteData)
      .then((res) => {
        if (res.data.status === "success") {
          LoadRecords();
          userContext.handleAlert("success", "Record Deleted Successfully");
        }
      })
      .catch((err) => {
        console.log(err);
        userContext.setisLoading(false);
        userContext.handleAlert("error", "Error while deleting Record");
      });
    setsearchValue("");
  };

  const LoadRecords = () => {
    getRecords()
      .then((res) => {
        if (res.data.records) {
          setData(res.data.records);
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
    Aos.init({ duration: 1500 });

    LoadRecords();
  }, []);

  // const [nameSortDirectionQueue, setnameSortDirectionQueue] = useState(
  //   new Queue()
  // );
  // const [nameSortDirection, namesetSortDirection] = useState(
  //   nameSortDirectionQueue.data[0]
  // );
  // const [checkinSortDirectionQueue, setcheckinSortDirectionQueue] = useState(
  //   new Queue()
  // );
  // const [checkinSortDirection, setcheckinSortDirection] = useState(
  //   checkinSortDirectionQueue.data[0]
  // );
  // const [checkOutSortDirectionQueue, setcheckOutSortDirectionQueue] = useState(
  //   new Queue()
  // );
  // const [checkOutSortDirection, setcheckOutSortDirection] = useState(
  //   checkOutSortDirectionQueue.data[0]
  // );

  // const [nameSort, setnameSort] = useState(nameSortDirectionQueue.data[0]);
  // const [checkInSort, setCheckInSort] = useState(
  //   checkinSortDirectionQueue.data[0]
  // );
  // const [checkOutSort, setcheckOutSort] = useState(
  //   checkOutSortDirectionQueue.data[0]
  // );

  // const sortData = (sortBy) => {
  //   if (sortBy === "name") {
  //     nameSortDirectionQueue.shift();
  //     setnameSortDirectionQueue(nameSortDirectionQueue);
  //     setnameSort(nameSortDirectionQueue.data[0]);
  //     if (nameSortDirectionQueue.data[0] !== "no-sort") {
  //       let sortedData = sortFunction(
  //         testData,
  //         "name",
  //         nameSortDirectionQueue.data[0]
  //       );
  //       setData(sortedData);
  //     } else {
  //       setData(testData);
  //     }
  //   } else if (sortBy === "checkIn") {
  //     checkinSortDirectionQueue.shift();
  //     setcheckinSortDirectionQueue(checkinSortDirectionQueue);
  //     setCheckInSort(checkinSortDirectionQueue.data[0]);
  //     if (checkinSortDirectionQueue.data[0] !== "no-sort") {
  //       let sortedData = sortFunction(
  //         testData,
  //         "checkIn",
  //         checkinSortDirectionQueue.data[0]
  //       );
  //       setData(sortedData);
  //       console.log(data);
  //     } else {
  //       setData(testData);
  //     }
  //   } else if (sortBy === "checkOut") {
  //     checkOutSortDirectionQueue.shift();
  //     setcheckOutSortDirectionQueue(checkOutSortDirectionQueue);
  //     setcheckOutSort(checkOutSortDirectionQueue.data[0]);
  //     if (checkOutSortDirectionQueue.data[0] !== "no-sort") {
  //       let sortedData = sortFunction(
  //         testData,
  //         "checkOut",
  //         checkOutSortDirectionQueue.data[0]
  //       );
  //       setData(sortedData);
  //     } else {
  //       setData(testData);
  //     }
  //   } else {
  //     setData(testData);
  //   }
  // };

  const displaySearchedRecords = (searchText) => {
    searchText = searchText.trim();
    if (searchText !== null && searchText !== "" && searchText !== undefined) {
      const searchRecords = data.filter((record) => {
        const regex = new RegExp(`${cleanTitle(searchText)}`, "gi");
        return record.name.match(regex);
      });
      setData(searchRecords);
    } else {
      LoadRecords();
    }
  };
  return (
    <div className="users">
      <div className="container user-list-container">
        <div className="search-box mb-3">
          <span className="col-sm-2">
            <input
              // className="form-control"

              placeholder="Search name..."
              value={searchValue}
              onChange={(e) => {
                displaySearchedRecords(e.target.value);
                setsearchValue(e.target.value);
              }}
            />
          </span>
          <span className="col-sm-2">
            <MdClear
              size={25}
              style={{ marginTop: "6", cursor: "pointer" }}
              onClick={() => {
                setsearchValue("");
                LoadRecords();
              }}
            />
          </span>
        </div>
        <div className="row add-customer">
          <Link className="btn btn-primary" to="/add-new-record">
            Add New Record
            <ImPlus style={{ marginLeft: "0.5rem" }} size={"12"} />
          </Link>
        </div>
        <div className="row small-screen-none">
          <div className="col-md-1">Sr. No</div>
          <div className="col-md-2">
            Name
            {/* <span
              style={{ cursor: "pointer" }}
              onClick={() => {
                sortData("name");
              }}
            >
              {nameSort === "no-sort" ? (
                <AiOutlineLine style={{ marginLeft: "0.5rem" }} />
              ) : nameSort === "asc" ? (
                <BsCaretUp style={{ marginLeft: "0.5rem" }} />
              ) : (
                <BsCaretDown style={{ marginLeft: "0.5rem" }} />
              )}
            </span> */}
          </div>
          <div className="col-md-2">
            Check In
            {/* <span
              style={{ cursor: "pointer" }}
              onClick={() => {
                sortData("checkIn");
              }}
            >
              {checkInSort === "no-sort" ? (
                <AiOutlineLine style={{ marginLeft: "0.5rem" }} />
              ) : checkInSort === "asc" ? (
                <BsCaretUp style={{ marginLeft: "0.5rem" }} />
              ) : (
                <BsCaretDown style={{ marginLeft: "0.5rem" }} />
              )}
            </span> */}
          </div>
          <div className="col-md-2">
            Check Out
            {/* <span
              style={{ cursor: "pointer" }}
              onClick={() => {
                sortData("checkOut");
              }}
            >
              {checkOutSort === "no-sort" ? (
                <AiOutlineLine style={{ marginLeft: "0.5rem" }} />
              ) : checkOutSort === "asc" ? (
                <BsCaretUp style={{ marginLeft: "0.5rem" }} />
              ) : (
                <BsCaretDown style={{ marginLeft: "0.5rem" }} />
              )}
            </span> */}
          </div>{" "}
          <div className="col-md-2">View/Edit</div>
          {/* <div className="col-md-1">Edit</div> */}
          <div className="col-md-1">Delete</div>
          <div className="col-md-2">Created At</div>
        </div>

        {data
          ? data.map((d, index) => {
              return (
                <div className="row small-screen-none" key={index}>
                  <div className="col-md-1">{index + 1}</div>
                  <div className="col-md-2">{d.name}</div>
                  <div className="col-md-2">
                    {" "}
                    <Moment format="DD MMM, YYYY-hh:mm A" date={d.checkIn} />
                  </div>
                  <div className="col-md-2">
                    <Moment format="DD MMM, YYYY-hh:mm A" date={d.checkOut} />
                  </div>

                  <div className="col-md-2">
                    <Link to={`/${d._id}/dashboard`}>
                      <BiCommentDetail />/<BiEdit />
                    </Link>
                  </div>

                  <div className="col-md-1">
                    <AiOutlineDelete
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        userContext.setisLoading(true);
                        deleteRecord({
                          _id: d._id,
                          createdAt: d.createdAt,
                          name: d.name,
                        });
                      }}
                    />
                  </div>
                  <div className="col-md-2">
                    <Moment format="DD MMM, YYYY-hh:mm A" date={d.createdAt} />
                  </div>
                </div>
              );
            })
          : ""}

        {data
          ? data.map((d, index) => {
              return (
                <div className="container big-screen-none" key={index}>
                  <div className="card record-card">
                    <div class="card-body">
                      {/* <h5 class="card-title">Special title treatment</h5> */}
                      <p class="card-text">
                        <div className="container">
                          <div className="row">
                            <div className="col-12 mt-1">
                              Sr. No : {index + 1}
                            </div>
                            <div className="col-12 mt-1">Name : {d.name}</div>
                            <div className="col-12">
                              Check In :{" "}
                              <Moment
                                format="DD MMM, YYYY-hh:mm A"
                                date={d.checkIn}
                              />
                            </div>
                            <div className="col-12 mt-1">
                              Check Out :{" "}
                              <Moment
                                format="DD MMM, YYYY-hh:mm A"
                                date={d.checkOut}
                              />
                            </div>
                            <div className="col-12 mt-1">
                              Created At :{" "}
                              <Moment
                                format="DD MMM, YYYY-hh:mm A"
                                date={d.createdAt}
                              />
                            </div>
                          </div>
                        </div>
                      </p>
                      <Link
                        to={`/${d._id}/dashboard`}
                        className="record-card-link"
                      >
                        View <BiCommentDetail />
                        /Edit
                        <BiEdit />
                      </Link>
                      <span className=" record-card-link red-link">
                        <MdDelete
                          size={16}
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            userContext.setisLoading(true);
                            deleteRecord({
                              _id: d._id,
                              createdAt: d.createdAt,
                              name: d.name,
                            });
                          }}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default UserList;
