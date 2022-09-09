import React from "react";

function CreateProfile(props) {
  return (
    <form className="container container_max-width_500px">
      <div className="row mb-3 mt-3">
        <div className="col-4">
          <label for="name" className="form-label">
            Name
          </label>
        </div>
        <div className="col">
          <input type="text" id="name" className="form-control" />
        </div>
      </div>
      <div className="row mb-3">
        <div className="input-group">
          <span className="input-group-text w-25 text-wrap font-size-small-screen">
            Profile Statement
          </span>
          <textarea
            className="form-control"
            aria-label="Profile Statement"
          ></textarea>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-4">
          <label for="phone" className="form-label">
            Phone
          </label>
        </div>
        <div className="col">
          <input type="text" id="phone" className="form-control" />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-4">
          <label for="email" className="form-label">
            Email
          </label>
        </div>
        <div className="col">
          <input type="email" id="email" className="form-control" />
        </div>
      </div>
      <div className="row mb-3">
        <div className="input-group">
          <span className="input-group-text w-25">Address</span>
          <textarea className="form-control" aria-label="Address"></textarea>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-4">
          <label for="profile-link" className="form-label">
            Profile Link
          </label>
        </div>
        <div className="col">
          <input type="text" id="profile-link" className="form-control" />
        </div>
      </div>
      <button className="btn btn-primary mx-3">Save and Next</button>
    </form>
  );
}

export default CreateProfile;
