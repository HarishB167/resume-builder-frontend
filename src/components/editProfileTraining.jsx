import React, { useState } from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import {
  getTraining,
  saveTraining,
  deleteTraining,
} from "../services/trainingService";
import Modal from "./modal";
import SpinnerWhileLoading from "./common/spinnerWhileLoading";

const schema = {
  id: Joi.optional(),
  user_id: Joi.required(),
  title: Joi.string().required().label("Title"),
  subtitle: Joi.string().required().label("Subtitle"),
  description: Joi.string().required().label("Description"),
};

function EditProfileTraining(props) {
  const { list, current } = props.data;
  const [trainingToDelete, setTrainingToDelete] = useState();
  const [showSpinner, setShowSpinner] = useState(false);

  const handleSave = async (e) => {
    e.preventDefault();
    console.log("Saving data", current);
    const result = validate();
    if (result) {
      let message = "";
      Object.values(result).map((str) => (message += ".\n" + str));
      toast.error(message);
    } else {
      setShowSpinner(true);
      console.log("result :>> ", result);
      await saveTraining(current.user_id, { ...current });
      toast.success("Training saved successfully.");

      const objWithNullValues = { ...current };
      Object.keys(objWithNullValues).forEach((k) => {
        if (k !== "user_id") objWithNullValues[k] = "";
      });
      props.setData(objWithNullValues);
      props.refresh();
      setShowSpinner(false);
    }
  };

  const handleEdit = async (trainingId) => {
    setShowSpinner(true);
    const training = await getTraining(current.user_id, trainingId);
    props.setData({ ...training });
    setShowSpinner(false);
  };

  const handleDelete = async () => {
    if (trainingToDelete) {
      await deleteTraining(current.user_id, trainingToDelete);
      toast.success("Training deleted successfully.");
      props.refresh();
      setTrainingToDelete(null);
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
    <div className="container d-flex flex-column">
      <Modal
        id="modalPopup"
        title="Delete"
        body="Are you sure you want to delete this item?"
        action={handleDelete}
        actionMessage="Delete"
      ></Modal>
      <div id="editpage" className="editpage row align-self-center">
        <div className="col">
          <div className="row mb-3 mt-3">
            <div className="col-4">
              <label htmlFor="title" className="form-label">
                Title
              </label>
            </div>
            <div className="col">
              <input
                type="text"
                id="title"
                className="form-control"
                value={current.title}
                onChange={(e) =>
                  props.setData({ ...current, title: e.currentTarget.value })
                }
              />
            </div>
          </div>
          <div className="row mb-3 mt-3">
            <div className="col-4">
              <label htmlFor="subtitle" className="form-label">
                Subtitle
              </label>
            </div>
            <div className="col">
              <input
                type="text"
                id="subtitle"
                className="form-control"
                value={current.subtitle}
                onChange={(e) =>
                  props.setData({ ...current, subtitle: e.currentTarget.value })
                }
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="input-group">
              <span className="input-group-text text-wrap font-size-small-screen">
                Description
              </span>
              <textarea
                className="form-control"
                aria-label="Description"
                value={current.description}
                onChange={(e) =>
                  props.setData({
                    ...current,
                    description: e.currentTarget.value,
                  })
                }
              ></textarea>
            </div>
          </div>
          <button
            className="btn btn-primary btn-sm"
            disabled={validate() || showSpinner}
            onClick={handleSave}
          >
            Save
          </button>
          <SpinnerWhileLoading
            className="btn"
            showSpinnerWhen={showSpinner}
          ></SpinnerWhileLoading>
          <hr className="border border-primary opacity-75" />
        </div>
        <div className="col">
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Subtitle</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {list.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.subtitle}</td>
                  <td>
                    <div className="d-flex flex-column align-items-center">
                      <button
                        className="btn btn-warning btn-sm mb-2"
                        onClick={() => handleEdit(item.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => setTrainingToDelete(item.id)}
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

export default EditProfileTraining;
