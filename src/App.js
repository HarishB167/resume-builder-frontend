import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import ProfileForm from "./components/profileForm";
import EditProfile from "./components/editProfile";
import Home from "./components/home";
import NavBar from "./components/navBar";
import { getUserList } from "./services/fakeBackend";

function App() {
  const [userList, setUserList] = useState([]);

  async function loadUserList() {
    const userList = await getUserList();
    setUserList(userList);
  }

  useEffect(() => {
    loadUserList();
  }, []);

  return (
    <React.Fragment>
      <ToastContainer />
      <NavBar />
      <Switch>
        <Route path="/create-profile" component={ProfileForm} />
        <Route path="/:id/edit-profile" component={ProfileForm} />
        <Route path="/:id/edit-profile-details" component={EditProfile} />
        <Route
          path="/"
          render={(props) => (
            <Home loadUserList={loadUserList} userList={userList} {...props} />
          )}
        />
      </Switch>
    </React.Fragment>
  );
}

export default App;
