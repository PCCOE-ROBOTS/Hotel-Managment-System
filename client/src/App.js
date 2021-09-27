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
import Login from "./components/Screens/Login";
import ContactUs from "./components/Screens/ContactUs";
import { createContext, useState, useEffect } from "react";
import Dashboard from "./components/Screens/Dashboard/Dashboard";

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

  if (authenticated) {
    <Redirect to="/receptionist/dashboard" />;
  }
  return (
    <UserData.Provider value={data} className="App">
      <Router>
        <Header user={user} />
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
            <Dashboard />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </UserData.Provider>
  );
}

export default App;
