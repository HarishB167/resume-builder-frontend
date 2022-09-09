import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home(props) {
  useEffect(() => {
    props.loadUserList();
  }, []);
  return (
    <div className="container container_max-width_500px">
      <Link
        to="/create-profile"
        className="btn btn-outline-primary btn-sm mt-2 mb-2"
      >
        Create Profile
      </Link>
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
                  <a href="#" className="text-decoration-none text-primary">
                    {`${user.first_name} ${user.last_name}`}
                  </a>
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
                    <button className="btn btn-danger btn-sm">Delete</button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
