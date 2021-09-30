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

export const UserData = createContext(null);
function App() {
  const [user, setuser] = useState({});
  const [authenticated, setauthenticated] = useState(false);

  const data = {
    user: user,
    setuser,
    authenticated,
    setauthenticated,
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
    <Redirect to="/receptionist/dashboard" />;
  }
  return (
    <UserData.Provider value={data} className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
          <Route path="/receptionist/dashboard">
            {authenticated ? <Dashboard /> : <Redirect to="/login" />}
            {/* <Dashboard /> */}
          </Route>
        </Switch>
        <Footer />
      </Router>
    </UserData.Provider>
  );
}

export default App;
