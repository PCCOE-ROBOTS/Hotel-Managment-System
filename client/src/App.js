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
import { isLoggedin } from "./components/Utils/auth";
import UserList from "./components/Screens/Dashboard/UserList";

export const UserData = createContext(null);
function App() {
  const [user, setuser] = useState({});
  const [authenticated, setauthenticated] = useState(false);

  // const checkAuth = () => {
  //   isLoggedin()
  //     .then((res) => {
  //       if (res.data.status !== "error") {
  //         setauthenticated(true);
  //         setuser(res.data);
  //       }
  //     })
  //     .catch((err) => {});
  // };

  const data = {
    user: user,
    setuser,
    authenticated,
    setauthenticated,
    // checkAuth,
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
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
          <Route path="/receptionist/customers">
            {authenticated ? <UserList /> : <Redirect to="/login" />}
            {/* {authenticated ? <Dashboard /> : <Redirect to="/login" />} */}
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
