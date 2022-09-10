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
} from "../services/fakeSkillLanguageService";
import Modal from "./modal";

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

  const handleSaveSkill = (e) => {
    e.preventDefault();
    const result = validateSkill();
    if (result) {
      let message = "";
      Object.values(result).map((str) => (message += ".\n" + str));
      toast.error(message);
    } else {
      console.log("result :>> ", result);
      saveSkill({ ...currentSkill });
      toast.success("Skill saved successfully.");

      const objWithNullValues = { ...currentSkill };
      Object.keys(objWithNullValues).forEach((k) => {
        if (k !== "user_id") objWithNullValues[k] = "";
      });
      props.setData(objWithNullValues, "skill");
      props.refresh();
    }
  };

  const handleSaveLanguage = (e) => {
    e.preventDefault();
    const result = validateLanguage();
    if (result) {
      let message = "";
      Object.values(result).map((str) => (message += ".\n" + str));
      toast.error(message);
    } else {
      console.log("result :>> ", result);
      saveLanguage({ ...currentLanguage });
      toast.success("Skill saved successfully.");

      const objWithNullValues = { ...currentLanguage };
      Object.keys(objWithNullValues).forEach((k) => {
        if (k !== "user_id") objWithNullValues[k] = "";
      });
      props.setData(objWithNullValues, "language");
      props.refresh();
    }
  };

  const handleEditSkill = async (skillId) => {
    const skill = await getSkill(skillId);
    props.setData({ ...skill }, "skill");
  };

  const handleEditLanguage = async (languageId) => {
    const language = await getLanguage(languageId);
    props.setData({ ...language }, "language");
  };

  const handleDeleteSkill = async () => {
    if (skillToDelete) {
      await deleteSkill(skillToDelete);
      props.refresh();
      setSkillToDelete(null);
    }
  };

  const handleDeleteLanguage = async () => {
    if (languageToDelete) {
      await deleteLanguage(languageToDelete);
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
                disabled={validateSkill()}
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
                disabled={validateLanguage()}
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
