import React from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import CreateProfile from "./components/createProfile";
import EditProfile from "./components/editProfile";
import Home from "./components/home";
import NavBar from "./components/navBar";

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <NavBar />
      <Switch>
        <Route path="/create-profile" component={CreateProfile} />
        <Route path="/edit-profile" component={EditProfile} />
        <Route path="/" component={Home} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
