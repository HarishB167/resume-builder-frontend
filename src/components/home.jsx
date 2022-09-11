import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteUser } from "../services/userService";
import Modal from "./modal";
import SpinnerWhileLoading from "./common/spinnerWhileLoading";

function Home(props) {
  const [userToDelete, setUserToDelete] = useState("");

  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    async function loadData() {
      await props.loadUserList();
      setShowSpinner(false);
    }
    loadData();
  }, []);

  const handleDelete = async () => {
    console.log("Deleting item", userToDelete);
    if (userToDelete) {
      await deleteUser(userToDelete);
      props.loadUserList();
      setUserToDelete("");
    }
  };
  return (
    <div className="container container_max-width_500px">
      <Modal
        id="modalPopup"
        title="Delete"
        body="Are you sure you want to delete this item?"
        action={handleDelete}
        actionMessage="Delete"
      ></Modal>
      <div className="d-flex justify-content-between align-items-center">
        <Link
          to="/create-profile"
          className="btn btn-outline-primary btn-sm mt-2 mb-2"
        >
          Create Profile
        </Link>
        <button className="btn btn-primary btn-sm" onClick={props.loadUserList}>
          Refresh
        </button>
      </div>

      <SpinnerWhileLoading
        className="d-flex flex-column align-items-center"
        showSpinnerWhen={showSpinner && props.userList.length == 0}
      >
        <table className="table table-light table-scroll">
          <thead className="thead-scroll">
            <tr className="tr-scroll">
              <th scope="col">Name</th>
              <th scope="col">Profile</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody className="tbody-scroll">
            {props.userList.map((user) => {
              return (
                <tr key={user.id} className="tr-scroll">
                  <td>
                    <Link
                      to={`/view-profile/${user.id}`}
                      className="text-decoration-none text-primary"
                    >
                      {`${user.first_name} ${user.last_name}`}
                    </Link>
                  </td>
                  <td>
                    {user.profile_statement.length > 30
                      ? user.profile_statement.substr(0, 30) + "..."
                      : user.profile_statement}
                  </td>
                  <td>
                    <div className="d-flex flex-column align-items-center">
                      <Link
                        to={`${user.id}/edit-profile`}
                        className="btn btn-warning btn-sm mb-2"
                      >
                        Edit
                      </Link>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => setUserToDelete(user.id)}
                        data-bs-toggle="modal"
                        data-bs-target="#modalPopup"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </SpinnerWhileLoading>
    </div>
  );
}

export default Home;
