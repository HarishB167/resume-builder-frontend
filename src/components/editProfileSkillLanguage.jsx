import React, { useState } from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import {
  getSkill,
  getLanguage,
  saveSkill,
  saveLanguage,
  deleteSkill,
  deleteLanguage,
} from "../services/skillLanguageService";
import Modal from "./modal";
import SpinnerWhileLoading from "./common/spinnerWhileLoading";

const schemaSkill = {
  id: Joi.optional(),
  user_id: Joi.required(),
  name: Joi.string().required().label("Skill"),
};

const schemaLanguage = {
  id: Joi.optional(),
  user_id: Joi.required(),
  name: Joi.string().required().label("Lanuage"),
};

function EditProfileSkillLanguage(props) {
  const { list: listSkill, current: currentSkill } = props.data.skill;
  const { list: listLanguage, current: currentLanguage } = props.data.language;
  const [skillToDelete, setSkillToDelete] = useState();
  const [languageToDelete, setLanguageToDelete] = useState();
  const [showSpinner, setShowSpinner] = useState(false);

  const handleSaveSkill = async (e) => {
    e.preventDefault();
    const result = validateSkill();
    if (result) {
      let message = "";
      Object.values(result).map((str) => (message += ".\n" + str));
      toast.error(message);
    } else {
      setShowSpinner(true);
      console.log("result :>> ", result);
      await saveSkill(currentSkill.user_id, { ...currentSkill });
      toast.success("Skill saved successfully.");

      const objWithNullValues = { ...currentSkill };
      Object.keys(objWithNullValues).forEach((k) => {
        if (k !== "user_id") objWithNullValues[k] = "";
      });
      props.setData(objWithNullValues, "skill");
      props.refresh();
      setShowSpinner(false);
    }
  };

  const handleSaveLanguage = async (e) => {
    e.preventDefault();
    const result = validateLanguage();
    if (result) {
      let message = "";
      Object.values(result).map((str) => (message += ".\n" + str));
      toast.error(message);
    } else {
      setShowSpinner(true);
      console.log("result :>> ", result);
      await saveLanguage(currentLanguage.user_id, { ...currentLanguage });
      toast.success("Language saved successfully.");

      const objWithNullValues = { ...currentLanguage };
      Object.keys(objWithNullValues).forEach((k) => {
        if (k !== "user_id") objWithNullValues[k] = "";
      });
      props.setData(objWithNullValues, "language");
      props.refresh();
      setShowSpinner(false);
    }
  };

  const handleEditSkill = async (skillId) => {
    setShowSpinner(true);
    const skill = await getSkill(currentSkill.user_id, skillId);
    props.setData({ ...skill }, "skill");
    setShowSpinner(false);
  };

  const handleEditLanguage = async (languageId) => {
    setShowSpinner(true);
    const language = await getLanguage(currentLanguage.user_id, languageId);
    props.setData({ ...language }, "language");
    setShowSpinner(false);
  };

  const handleDeleteSkill = async () => {
    if (skillToDelete) {
      await deleteSkill(currentSkill.user_id, skillToDelete);
      props.refresh();
      setSkillToDelete(null);
    }
  };

  const handleDeleteLanguage = async () => {
    if (languageToDelete) {
      await deleteLanguage(currentLanguage.user_id, languageToDelete);
      props.refresh();
      setLanguageToDelete(null);
    }
  };

  const validateSkill = () => {
    const result = Joi.validate(currentSkill, schemaSkill, {
      abortEarly: false,
    });
    if (!result.error) return null;

    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  const validateLanguage = () => {
    const result = Joi.validate(currentLanguage, schemaLanguage, {
      abortEarly: false,
    });
    if (!result.error) return null;

    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  return (
    <div className="container d-flex flex-column">
      <Modal
        id="modalPopupSkill"
        title="Delete"
        body="Are you sure you want to delete this item?"
        action={handleDeleteSkill}
        actionMessage="Delete"
      ></Modal>
      <Modal
        id="modalPopupLanguage"
        title="Delete"
        body="Are you sure you want to delete this item?"
        action={handleDeleteLanguage}
        actionMessage="Delete"
      ></Modal>
      <div id="editpage" className="editpage row align-self-center">
        <div className="col">
          <div className="row mb-3 mt-3">
            <div className="col-3">
              <label htmlFor="skill" className="form-label">
                Skill
              </label>
            </div>
            <div className="col">
              <input
                type="text"
                id="skill"
                className="form-control"
                value={currentSkill.name}
                onChange={(e) =>
                  props.setData(
                    {
                      ...currentSkill,
                      name: e.currentTarget.value,
                    },
                    "skill"
                  )
                }
              />
            </div>
            <div className="col-3">
              <button
                disabled={validateSkill() || showSpinner}
                onClick={handleSaveSkill}
                className="btn btn-primary btn-sm"
              >
                Save
              </button>
            </div>
          </div>
          <div className="row mb-3 mt-3">
            <div className="col-3">
              <label htmlFor="language" className="form-label">
                Language
              </label>
            </div>
            <div className="col">
              <input
                type="text"
                id="language"
                className="form-control"
                value={currentLanguage.name}
                onChange={(e) =>
                  props.setData(
                    {
                      ...currentLanguage,
                      name: e.currentTarget.value,
                    },
                    "language"
                  )
                }
              />
            </div>
            <div className="col-3">
              <button
                disabled={validateLanguage() || showSpinner}
                onClick={handleSaveLanguage}
                className="btn btn-primary btn-sm"
              >
                Save
              </button>
            </div>
          </div>
          <button className="btn btn-primary btn-sm" onClick={props.onNext}>
            Next
          </button>
          <SpinnerWhileLoading
            className="btn"
            showSpinnerWhen={showSpinner}
          ></SpinnerWhileLoading>
          <hr className="border border-primary opacity-75" />
        </div>
        <div className="col row">
          <div className="col-6">
            <table className="table">
              <thead>
                <tr>
                  <th>Skills</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {listSkill.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>
                      <div className="d-flex flex-column align-items-center">
                        <button
                          className="btn btn-warning btn-sm mb-2"
                          onClick={() => handleEditSkill(item.id)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => setSkillToDelete(item.id)}
                          data-bs-toggle="modal"
                          data-bs-target="#modalPopupSkill"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-6">
            <table className="table">
              <thead>
                <tr>
                  <th>Language</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {listLanguage.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>
                      <div className="d-flex flex-column align-items-center">
                        <button
                          className="btn btn-warning btn-sm mb-2"
                          onClick={() => handleEditLanguage(item.id)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => setLanguageToDelete(item.id)}
                          data-bs-toggle="modal"
                          data-bs-target="#modalPopupLanguage"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfileSkillLanguage;
