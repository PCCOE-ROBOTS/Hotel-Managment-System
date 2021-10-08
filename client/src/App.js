import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./components/Layouts/Header";
import Footer from "./components/Layouts/Footer";
import "./Styles/main.css";
import Home from "./components/Screens/Home";
import Login from "./components/Screens/Auth/Login";
import ContactUs from "./components/Screens/ContactUs";
import { createContext, useState, useEffect } from "react";
import Dashboard from "./components/Screens/Dashboard/Dashboard";
import { isLoggedin } from "./components/Utils/Api/auth";
import UserList from "./components/Screens/Dashboard/UserList";
import AddNewRecord from "./components/Screens/AddNewRecord/AddNewRecord";
import AlertComponent from "./components/Layouts/AlertComponent";
import PreLoader from "./components/Layouts/PreLoader";

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
