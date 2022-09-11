import React, { useEffect, useState } from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import { getUser, saveUser } from "../services/userService";
import SpinnerWhileLoading from "./common/spinnerWhileLoading";

const schema = {
  id: Joi.optional(),
  first_name: Joi.string().required().label("First name"),
  last_name: Joi.string().required().label("Last name"),
  email: Joi.string().email().required().label("Email"),
  phone: Joi.string().required().label("Phone"),
  address: Joi.string().required().label("Address"),
  profile_statement: Joi.string().required().label("Profile statement"),
  profile_link: Joi.string().uri().required().label("Profile link"),
};

function ProfileForm(props) {
  const userId = props.match.params.id;

  const [profile, setProfile] = useState({
    id: null,
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    profile_statement: "",
    profile_link: "",
  });
  const [showSpinner, setShowSpinnger] = useState(true);
  const [showSavingSpinner, setShowSavingSpinner] = useState(false);

  useEffect(() => {
    async function loadUser() {
      if (userId) {
        const user = await getUser(userId);
        setProfile(user);
      }
      setShowSpinnger(false);
    }
    loadUser();
  }, []);

  const save = () => {
    setShowSavingSpinner(true);
    console.log("Saving data", profile);
    const result = validate();
    if (result) {
      let message = "";
      Object.values(result).map((str) => (message += "\n" + str));
      toast.error(message);
    }
    return saveUser({ ...profile });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    await save();
    setShowSavingSpinner(false);
    props.history.replace("/");
  };

  const handleSaveAndNext = async (e) => {
    e.preventDefault();
    const user = await save();
    setShowSavingSpinner(false);
    props.history.replace(`/${user.id}/edit-profile-details`);
  };

  const validate = () => {
    const result = Joi.validate(profile, schema, {
      abortEarly: false,
    });
    if (!result.error) return null;

    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  return (
    <SpinnerWhileLoading
      className="d-flex flex-column align-items-center h-75 justify-content-center"
      showSpinnerWhen={showSpinner}
    >
      <form className="container container_max-width_500px">
        <div className="row mb-3 mt-3">
          <div className="col-4">
            <label htmlFor="firstName" className="form-label">
              Name
            </label>
          </div>
          <div className="col">
            <input
              type="text"
              id="firstName"
              className="form-control"
              placeholder="First"
              value={profile.first_name}
              onChange={(e) =>
                setProfile({ ...profile, first_name: e.currentTarget.value })
              }
            />
          </div>
          <div className="col">
            <input
              type="text"
              id="lastName"
              className="form-control"
              placeholder="Last"
              value={profile.last_name}
              onChange={(e) =>
                setProfile({ ...profile, last_name: e.currentTarget.value })
              }
            />
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
              value={profile.profile_statement}
              onChange={(e) =>
                setProfile({
                  ...profile,
                  profile_statement: e.currentTarget.value,
                })
              }
            ></textarea>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-4">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
          </div>
          <div className="col">
            <input
              type="text"
              id="phone"
              className="form-control"
              value={profile.phone}
              onChange={(e) =>
                setProfile({
                  ...profile,
                  phone: e.currentTarget.value,
                })
              }
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-4">
            <label htmlFor="email" className="form-label">
              Email
            </label>
          </div>
          <div className="col">
            <input
              type="email"
              id="email"
              className="form-control"
              value={profile.email}
              onChange={(e) =>
                setProfile({
                  ...profile,
                  email: e.currentTarget.value,
                })
              }
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="input-group">
            <span className="input-group-text w-25">Address</span>
            <textarea
              className="form-control"
              aria-label="Address"
              value={profile.address}
              onChange={(e) =>
                setProfile({
                  ...profile,
                  address: e.currentTarget.value,
                })
              }
            ></textarea>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-4">
            <label htmlFor="profile-link" className="form-label">
              Profile Link
            </label>
          </div>
          <div className="col">
            <input
              type="text"
              id="profile-link"
              className="form-control"
              value={profile.profile_link}
              onChange={(e) =>
                setProfile({
                  ...profile,
                  profile_link: e.currentTarget.value,
                })
              }
            />
          </div>
        </div>
        <button
          disabled={validate() || showSavingSpinner}
          onClick={handleSave}
          className="btn btn-primary mx-3"
        >
          Save
        </button>
        <button
          disabled={validate() || showSavingSpinner}
          onClick={handleSaveAndNext}
          className="btn btn-primary"
        >
          Save and Next
        </button>
        <SpinnerWhileLoading
          className="btn"
          showSpinnerWhen={showSavingSpinner}
        ></SpinnerWhileLoading>
      </form>
    </SpinnerWhileLoading>
  );
}

export default ProfileForm;
