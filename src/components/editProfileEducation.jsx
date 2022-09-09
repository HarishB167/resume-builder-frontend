import React from "react";

function EditProfileEducation(props) {
  return (
    <div class="container d-flex flex-column">
      <div id="editpage" class="editpage row align-self-center">
        <div class="col">
          <div class="row mb-3 mt-3">
            <div class="col-4">
              <label for="qualification" class="form-label">
                Qualification
              </label>
            </div>
            <div class="col">
              <input type="text" id="qualification" class="form-control" />
            </div>
          </div>
          <div class="row mb-3 mt-3">
            <div class="col-4">
              <label for="institute" class="form-label">
                Institute
              </label>
            </div>
            <div class="col">
              <input type="text" id="institute" class="form-control" />
            </div>
          </div>
          <div class="row mb-3 mt-3">
            <div class="col-4">
              <label for="score" class="form-label">
                Score
              </label>
            </div>
            <div class="col">
              <input type="text" id="score" class="form-control" />
            </div>
          </div>
          <button class="btn btn-primary btn-sm">Add</button>
          <button class="btn btn-primary btn-sm ms-3">Next</button>
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
              <tr>
                <td>MasHelper</td>
                <td>Material at site helper</td>
                <td>
                  <div class="d-flex flex-column align-items-center">
                    <button class="btn btn-warning btn-sm mb-2">Edit</button>
                    <button class="btn btn-danger btn-sm">Delete</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Mindmap</td>
                <td>A Mindmap app</td>
                <td>
                  <div class="d-flex flex-column align-items-center">
                    <button class="btn btn-warning btn-sm mb-2">Edit</button>
                    <button class="btn btn-danger btn-sm">Delete</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Resume Builder</td>
                <td>Building resume form profiles</td>
                <td>
                  <div class="d-flex flex-column align-items-center">
                    <button class="btn btn-warning btn-sm mb-2">Edit</button>
                    <button class="btn btn-danger btn-sm">Delete</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Lorem, ipsum.</td>
                <td>Lorem, ipsum dolor.</td>
                <td>
                  <div class="d-flex flex-column align-items-center">
                    <button class="btn btn-warning btn-sm mb-2">Edit</button>
                    <button class="btn btn-danger btn-sm">Delete</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Lorem, ipsum.</td>
                <td>Lorem, ipsum dolor.</td>
                <td>
                  <div class="d-flex flex-column align-items-center">
                    <button class="btn btn-warning btn-sm mb-2">Edit</button>
                    <button class="btn btn-danger btn-sm">Delete</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Lorem, ipsum.</td>
                <td>Lorem, ipsum dolor.</td>
                <td>
                  <div class="d-flex flex-column align-items-center">
                    <button class="btn btn-warning btn-sm mb-2">Edit</button>
                    <button class="btn btn-danger btn-sm">Delete</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Lorem, ipsum.</td>
                <td>Lorem, ipsum dolor.</td>
                <td>
                  <div class="d-flex flex-column align-items-center">
                    <button class="btn btn-warning btn-sm mb-2">Edit</button>
                    <button class="btn btn-danger btn-sm">Delete</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Lorem, ipsum.</td>
                <td>Lorem, ipsum dolor.</td>
                <td>
                  <div class="d-flex flex-column align-items-center">
                    <button class="btn btn-warning btn-sm mb-2">Edit</button>
                    <button class="btn btn-danger btn-sm">Delete</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Lorem, ipsum.</td>
                <td>Lorem, ipsum dolor.</td>
                <td>
                  <div class="d-flex flex-column align-items-center">
                    <button class="btn btn-warning btn-sm mb-2">Edit</button>
                    <button class="btn btn-danger btn-sm">Delete</button>
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

export default EditProfileEducation;
