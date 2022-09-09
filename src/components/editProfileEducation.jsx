import React, { useState } from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import {
  getEducation,
  saveEducation,
  deleteEducation,
} from "../services/fakeEducationService";
import Modal from "./modal";

const schema = {
  id: Joi.optional(),
  user_id: Joi.required(),
  qualification: Joi.string().required().label("Qualification"),
  institute: Joi.string().required().label("Institute"),
  score: Joi.alternatives(Joi.string(), Joi.number()).required().label("Score"),
};

function EditProfileEducation(props) {
  const { list, current } = props.data;
  const [educationToDelete, setEducationToDelete] = useState();

  const handleSave = (e) => {
    e.preventDefault();
    console.log("Saving data", current);
    const result = validate();
    if (result) {
      let message = "";
      Object.values(result).map((str) => (message += ".\n" + str));
      toast.error(message);
    } else {
      console.log("result :>> ", result);
      saveEducation({ ...current });
      toast.success("Education saved successfully.");

      const objWithNullValues = { ...current };
      Object.keys(objWithNullValues).forEach((k) => {
        if (k !== "user_id") objWithNullValues[k] = "";
      });
      props.setData(objWithNullValues);
      props.refresh();
    }
  };

  const handleEdit = async (educationId) => {
    const education = await getEducation(educationId);
    props.setData({ ...education });
  };

  const handleDelete = async () => {
    if (educationToDelete) {
      await deleteEducation(educationToDelete);
      props.refresh();
      setEducationToDelete(null);
    }
  };

  const validate = () => {
    const result = Joi.validate(current, schema, {
      abortEarly: false,
    });
    if (!result.error) return null;

    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  return (
    <div class="container d-flex flex-column">
      <Modal
        id="modalPopup"
        title="Delete"
        body="Are you sure you want to delete this item?"
        action={handleDelete}
        actionMessage="Delete"
      ></Modal>
      <div id="editpage" class="editpage row align-self-center">
        <div class="col">
          <div class="row mb-3 mt-3">
            <div class="col-4">
              <label for="qualification" class="form-label">
                Qualification
              </label>
            </div>
            <div class="col">
              <input
                type="text"
                id="qualification"
                class="form-control"
                value={current.qualification}
                onChange={(e) =>
                  props.setData({
                    ...current,
                    qualification: e.currentTarget.value,
                  })
                }
              />
            </div>
          </div>
          <div class="row mb-3 mt-3">
            <div class="col-4">
              <label for="institute" class="form-label">
                Institute
              </label>
            </div>
            <div class="col">
              <input
                type="text"
                id="institute"
                class="form-control"
                value={current.institute}
                onChange={(e) =>
                  props.setData({
                    ...current,
                    institute: e.currentTarget.value,
                  })
                }
              />
            </div>
          </div>
          <div class="row mb-3 mt-3">
            <div class="col-4">
              <label for="score" class="form-label">
                Score
              </label>
            </div>
            <div class="col">
              <input
                type="text"
                id="score"
                class="form-control"
                value={current.score}
                onChange={(e) =>
                  props.setData({
                    ...current,
                    score: e.currentTarget.value,
                  })
                }
              />
            </div>
          </div>
          <button
            disabled={validate()}
            onClick={handleSave}
            class="btn btn-primary btn-sm"
          >
            Save
          </button>
          <button class="btn btn-primary btn-sm ms-3" onClick={props.onNext}>
            Next
          </button>
          <hr class="border border-primary opacity-75" />
        </div>
        <div class="col">
          <table class="table">
            <thead>
              <tr>
                <th>Qualification</th>
                <th>Institute</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {list.map((item) => (
                <tr>
                  <td>{item.qualification}</td>
                  <td>{item.institute}</td>
                  <td>
                    <div class="d-flex flex-column align-items-center">
                      <button
                        class="btn btn-warning btn-sm mb-2"
                        onClick={() => handleEdit(item.id)}
                      >
                        Edit
                      </button>
                      <button
                        class="btn btn-danger btn-sm"
                        onClick={() => setEducationToDelete(item.id)}
                        data-bs-toggle="modal"
                        data-bs-target="#modalPopup"
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
  );
}

export default EditProfileEducation;
