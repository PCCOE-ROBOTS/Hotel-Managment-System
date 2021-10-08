import React, { useState } from "react";
import { BiEdit, BiCommentDetail } from "react-icons/bi";
import { ImPlus } from "react-icons/im";
import { AiOutlineDelete } from "react-icons/ai";
// import {  AiOutlineLine } from "react-icons/ai";
import { MdClear } from "react-icons/md";
// import { BsCaretDown, BsCaretUp } from "react-icons/bs";
// import Queue from "../../Utils/Queue";
// import { sortFunction } from "../../Utils/sort";
import { cleanTitle } from "../../Utils/regex";

const testData = [
  {
    name: "Tejas Borde",
    checkIn: "24/09/2021",
    checkOut: "2/09/2021",
    bookedAt: "2007-05-08 12:35:00",
  },
  {
    name: "Aditya Deo",
    checkIn: "1/09/2021",
    checkOut: "10/09/2021",
    bookedAt: "2007-05-08 12:35:00",
  },
  {
    name: "Suraj Dhamak",
    checkIn: "23/09/2021",
    checkOut: "24/09/2021",
    bookedAt: "2007-05-08 12:35:00",
  },
  {
    name: "Tejas Borde",
    checkIn: "24/08/2021",
    checkOut: "7/09/2021",
    bookedAt: "2007-05-08 11:24:00",
  },
  {
    name: "Aditya Deo",
    checkIn: "24/09/2021",
    checkOut: "26/05/2021",
    bookedAt: "2007-05-08 12:12:00",
  },
  {
    name: "Tejas Borde",
    checkIn: "24/09/2021",
    checkOut: "24/09/2021",
    bookedAt: "2007-05-08 12:35:00",
  },
  {
    name: "Aditya Deo",
    checkIn: "24/09/2021",
    checkOut: "24/05/2021",
    bookedAt: "2007-05-08 10:36:00",
  },
  {
    name: "Suraj Dhamak",
    checkIn: "24/09/2021",
    checkOut: "24/09/2021",
    bookedAt: "2007-05-08 12:35:00",
  },
  {
    name: "Tejas Borde",
    checkIn: "24/09/2021",
    checkOut: "24/09/2021",
    bookedAt: "2007-05-08 07:35:00",
  },
  {
    name: "Aditya Deo",
    checkIn: "24/09/2021",
    checkOut: "24/09/2021",
    bookedAt: "2007-05-08 12:35:00",
  },
  {
    name: "Suraj Dhamak",
    checkIn: "24/09/2021",
    checkOut: "24/09/2021",
    bookedAt: "2007-05-08 12:35:00",
  },
];

const UserList = () => {
  const [data, setData] = useState(testData);
  const [searchValue, setsearchValue] = useState("");
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
      setData(testData);
    }
  };
  return (
    <div className="users">
      <div className="container user-list-container">
        <div className="search-box mb-3">
          <div className="row">
            <div className="col-4 ">
              <input
                className="form-control"
                placeholder="Search name..."
                value={searchValue}
                onChange={(e) => {
                  displaySearchedRecords(e.target.value);
                  setsearchValue(e.target.value);
                }}
              />
            </div>
            <div className="col-2">
              <MdClear
                size={25}
                style={{ marginTop: "6", cursor: "pointer" }}
                onClick={() => {
                  setsearchValue("");
                  setData(testData);
                }}
              />
            </div>
          </div>
        </div>
        <div className="row add-customer">
          <button className="btn btn-primary">
            Add New Customer
            <ImPlus style={{ marginLeft: "0.5rem" }} size={"12"} />
          </button>
        </div>
        <div className="row">
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
          <div className="col-md-2">View Details</div>
          <div className="col-md-1">Edit</div>
          <div className="col-md-1">Delete</div>
          <div className="col-md-1">Booked At</div>
        </div>

        {data
          ? data.map((d, index) => {
              return (
                <div className="row" key={index}>
                  <div className="col-md-1">{index + 1}</div>
                  <div className="col-md-2">{d.name}</div>
                  <div className="col-md-2">{d.checkIn}</div>
                  <div className="col-md-2">{d.checkOut}</div>

                  <div className="col-md-2">
                    <BiCommentDetail />
                  </div>
                  <div className="col-md-1">
                    <BiEdit />
                  </div>
                  <div className="col-md-1">
                    <AiOutlineDelete />
                  </div>
                  <div className="col-md-1" style={{ fontSize: "10px" }}>
                    {d.bookedAt}
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
