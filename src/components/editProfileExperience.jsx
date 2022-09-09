import React from "react";

function EditProfileExperience(props) {
  return (
    <div className="container d-flex flex-column">
      <div id="editpage" className="editpage row align-self-center">
        <div className="col">
          <div className="row mb-3 mt-3">
            <div className="col-4">
              <label for="title" className="form-label">
                Title
              </label>
            </div>
            <div className="col">
              <input type="text" id="title" className="form-control" />
            </div>
          </div>
          <div className="row mb-3 mt-3">
            <div className="col-4">
              <label for="subtitle" className="form-label">
                Subtitle
              </label>
            </div>
            <div className="col">
              <input type="text" id="subtitle" className="form-control" />
            </div>
          </div>
          <div className="row mb-3 mt-3">
            <div className="col-4">
              <label for="start" className="form-label">
                Start
              </label>
            </div>
            <div className="col">
              <input type="date" id="start" className="form-control" />
            </div>
          </div>
          <div className="row mb-3 mt-3">
            <div className="col-4">
              <label for="end" className="form-label">
                End
              </label>
            </div>
            <div className="col">
              <input type="date" id="end" className="form-control" />
            </div>
          </div>
          <div className="row mb-3">
            <div className="input-group">
              <span className="input-group-text text-wrap font-size-small-screen">
                Responsibilities
              </span>
              <textarea
                className="form-control"
                aria-label="Responsibilities"
              ></textarea>
            </div>
          </div>
          <button className="btn btn-primary btn-sm">Add</button>
          <button className="btn btn-primary btn-sm ms-3">Next</button>
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
              <tr>
                <td>MasHelper</td>
                <td>Material at site helper</td>
                <td>
                  <div className="d-flex flex-column align-items-center">
                    <button className="btn btn-warning btn-sm mb-2">
                      Edit
                    </button>
                    <button className="btn btn-danger btn-sm">Delete</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Mindmap</td>
                <td>A Mindmap app</td>
                <td>
                  <div className="d-flex flex-column align-items-center">
                    <button className="btn btn-warning btn-sm mb-2">
                      Edit
                    </button>
                    <button className="btn btn-danger btn-sm">Delete</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Resume Builder</td>
                <td>Building resume form profiles</td>
                <td>
                  <div className="d-flex flex-column align-items-center">
                    <button className="btn btn-warning btn-sm mb-2">
                      Edit
                    </button>
                    <button className="btn btn-danger btn-sm">Delete</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Lorem, ipsum.</td>
                <td>Lorem, ipsum dolor.</td>
                <td>
                  <div className="d-flex flex-column align-items-center">
                    <button className="btn btn-warning btn-sm mb-2">
                      Edit
                    </button>
                    <button className="btn btn-danger btn-sm">Delete</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Lorem, ipsum.</td>
                <td>Lorem, ipsum dolor.</td>
                <td>
                  <div className="d-flex flex-column align-items-center">
                    <button className="btn btn-warning btn-sm mb-2">
                      Edit
                    </button>
                    <button className="btn btn-danger btn-sm">Delete</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Lorem, ipsum.</td>
                <td>Lorem, ipsum dolor.</td>
                <td>
                  <div className="d-flex flex-column align-items-center">
                    <button className="btn btn-warning btn-sm mb-2">
                      Edit
                    </button>
                    <button className="btn btn-danger btn-sm">Delete</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Lorem, ipsum.</td>
                <td>Lorem, ipsum dolor.</td>
                <td>
                  <div className="d-flex flex-column align-items-center">
                    <button className="btn btn-warning btn-sm mb-2">
                      Edit
                    </button>
                    <button className="btn btn-danger btn-sm">Delete</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Lorem, ipsum.</td>
                <td>Lorem, ipsum dolor.</td>
                <td>
                  <div className="d-flex flex-column align-items-center">
                    <button className="btn btn-warning btn-sm mb-2">
                      Edit
                    </button>
                    <button className="btn btn-danger btn-sm">Delete</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Lorem, ipsum.</td>
                <td>Lorem, ipsum dolor.</td>
                <td>
                  <div className="d-flex flex-column align-items-center">
                    <button className="btn btn-warning btn-sm mb-2">
                      Edit
                    </button>
                    <button className="btn btn-danger btn-sm">Delete</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default EditProfileExperience;
