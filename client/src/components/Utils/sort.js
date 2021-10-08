const testData = [
  {
    name: "Tejas Borde",
    checkIn: "24/09/2021",
    checkOut: "24/09/2021",
    bookedAt: "2007-05-08 12:35:00",
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
  {
    name: "Tejas Borde",
    checkIn: "24/09/2021",
    checkOut: "24/09/2021",
    bookedAt: "2007-05-08 12:35:00",
  },
  {
    name: "Aditya Deo",
    checkIn: "24/09/2021",
    checkOut: "24/09/2021",
    bookedAt: "2007-05-08 12:35:00",
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
    checkOut: "24/09/2021",
    bookedAt: "2007-05-08 12:35:00",
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
    bookedAt: "2007-05-08 12:35:00",
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

function compareBasedonNameAsc(a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  return 0;
}
function compareBasedonNameDesc(a, b) {
  if (a.name > b.name) {
    return -1;
  }
  if (a.name < b.name) {
    return 1;
  }
  return 0;
}
function compareBasedonCheckInAsc(a, b) {
  if (a.checkIn > b.checkIn) {
    return 1;
  }
  if (a.checkIn < b.checkIn) {
    return -1;
  }
  return 0;
}
function compareBasedonCheckInDesc(a, b) {
  if (a.checkIn > b.checkIn) {
    return -1;
  }
  if (a.checkIn < b.checkIn) {
    return 1;
  }
  return 0;
}
function compareBasedonCheckOutAsc(a, b) {
  if (a.checkOut > b.checkOut) {
    return 1;
  }
  if (a.checkOut < b.checkOut) {
    return -1;
  }
  return 0;
}
function compareBasedonCheckOutDesc(a, b) {
  if (a.checkOut > b.checkOut) {
    return -1;
  }
  if (a.checkOut < b.checkOut) {
    return 1;
  }
  return 0;
}

export const sortFunction = (data, sortBy, SortDirection) => {
  console.log(data, sortBy, SortDirection);
  let sortedData;
  if (sortBy === "name") {
    if (SortDirection === "asc") {
      sortedData = data.sort(compareBasedonNameAsc);

      return sortedData;
    } else if (SortDirection === "desc") {
      sortedData = data.sort(compareBasedonNameDesc);
      console.log(sortedData);
      return sortedData;
    } else {
      console.log(sortedData);
      return sortedData;
    }
  } else if (sortBy === "checkIn") {
    if (SortDirection === "asc") {
      sortedData = data.sort(compareBasedonCheckInAsc);
      return sortedData;
    } else if (SortDirection === "desc") {
      sortedData = data.sort(compareBasedonCheckInDesc);
      return sortedData;
    } else {
      return sortedData;
    }
  } else if (sortBy === "checkOut") {
    if (SortDirection === "asc") {
      sortedData = data.sort(compareBasedonCheckOutAsc);
      return sortedData;
    } else if (SortDirection === "desc") {
      sortedData = data.sort(compareBasedonCheckOutDesc);
      return sortedData;
    } else {
      return sortedData;
    }
  } else {
    return sortedData;
  }
};

// sortFunction(testData, "checkIn", "asc");
