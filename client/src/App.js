import "./components/Assets/Styles/App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./components/Layouts/Header";
import Footer from "./components/Layouts/Footer";
import "./components/Assets/Styles/main.css";
import Home from "./components/Layouts/Home";
import Login from "./components/Screens/Auth/Login";
import ContactUs from "./components/Layouts/ContactUs";
import { createContext, useState, useEffect } from "react";
import { isLoggedin } from "./components/Utils/Api/auth";
import UserList from "./components/Screens/Receiptionist/CustomerRecords/UserList";
import AddNewRecord from "./components/Screens/Receiptionist/CustomerRecords/AddNewRecord";
import AlertComponent from "./components/Layouts/AlertComponent";
import PreLoader from "./components/Layouts/PreLoader";
import Dashboard from "./components/Screens/Receiptionist/UserDataDashboard/Dashboard";

export const UserData = createContext(null);
function App() {
  const [user, setuser] = useState({});
  const [authenticated, setauthenticated] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [alertOpen, setAlertOpen] = useState([false]);

  const handleAlert = (type, msg) => {
    setAlertOpen([true, type, msg]);
    setTimeout(() => {
      setAlertOpen(false);
    }, 5000);
  };

  const data = {
    user: user,
    setuser,
    authenticated,
    setauthenticated,
    handleAlert,
    setisLoading,
  };

  useEffect(() => {
    isLoggedin()
      .then((res) => {
        if (res.data.username) {
          setauthenticated(true);
        }
      })
      .catch((err) => {});
  }, []);

  if (authenticated) {
    <Redirect to="/receptionist/customers" />;
  }

  return (
    <UserData.Provider value={data} className="App">
      <Router>
        <AlertComponent data={alertOpen} />
        {isLoading ? <PreLoader /> : ""}
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
          <Route path="/receptionist/customers">
            <UserList />
          </Route>
          <Route path="/:recordId/dashboard">
            <Dashboard />
          </Route>
          <Route path="/add-new-record">
            <AddNewRecord />{" "}
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </UserData.Provider>
  );
}

export default App;
