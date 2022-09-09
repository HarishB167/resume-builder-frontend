import React from "react";

function EditProfileProject(props) {
  return (
    <div class="container d-flex flex-column">
      <div id="editpage" class="editpage row align-self-center">
        <div class="col">
          <div class="row mb-3 mt-3">
            <div class="col-4">
              <label for="title" class="form-label">
                Title
              </label>
            </div>
            <div class="col">
              <input type="text" id="title" class="form-control" />
            </div>
          </div>
          <div class="row mb-3 mt-3">
            <div class="col-4">
              <label for="subtitle" class="form-label">
                Subtitle
              </label>
            </div>
            <div class="col">
              <input type="text" id="subtitle" class="form-control" />
            </div>
          </div>
          <div class="row mb-3">
            <div class="input-group">
              <span class="input-group-text text-wrap font-size-small-screen">
                Description
              </span>
              <textarea
                class="form-control"
                aria-label="Description"
              ></textarea>
            </div>
          </div>

          <div class="row mb-3 mt-3">
            <div class="col-4">
              <label for="gitlink" class="form-label">
                Git link
              </label>
            </div>
            <div class="col">
              <input type="text" id="gitlink" class="form-control" />
            </div>
          </div>

          <div class="row mb-3 mt-3">
            <div class="col-4">
              <label for="testlink" class="form-label">
                Test link
              </label>
            </div>
            <div class="col">
              <input type="text" id="testlink" class="form-control" />
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

export default EditProfileProject;
