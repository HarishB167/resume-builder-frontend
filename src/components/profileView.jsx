import React, { useEffect, useState } from "react";
import SpinnerWhileLoading from "./common/spinnerWhileLoading";
import { getUserProfile } from "../services/fakeUserService";

function ProfileView(props) {
  const userId = props.match.params.id;
  const [profile, setProfile] = useState({
    basicInfo: {
      id: userId,
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      address: "",
      profile_statement: "",
      profile_link: "",
    },
    projects: [],
    educations: [],
    experiences: [],
    skills: [],
    languages: [],
    trainings: [],
  });
  const [showSpinner, setShowSpinnger] = useState(true);

  async function loadProfile() {
    const userProfile = await getUserProfile(userId);
    setProfile(userProfile);
    setShowSpinnger(false);
  }

  useEffect(() => {
    loadProfile();
  }, []);

  return (
    <SpinnerWhileLoading
      className="d-flex flex-column align-items-center h-75 justify-content-center"
      showSpinnerWhen={showSpinner}
    >
      <div className="container profile_view my-3 pb-3">
        <div className="name-profile-statement">
          <h1>{`${profile.basicInfo.first_name} ${profile.basicInfo.last_name}`}</h1>
          <p>{profile.basicInfo.profile_statement}</p>
        </div>
        <div className="other-details">
          <div className="skills">
            {profile.skills.length > 0 && (
              <React.Fragment>
                <h2>Skills</h2>
                <div className="skills__items mb-3">
                  {profile.skills.map((skill) => (
                    <span
                      key={skill.id}
                      className="badge rounded-pill bg-primary m-1"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </React.Fragment>
            )}
          </div>
          <div className="projects-education-experience">
            {profile.projects.length > 0 && (
              <React.Fragment>
                <h2>Projects</h2>
                <ul className="list-group mb-3">
                  {profile.projects.map((project) => (
                    <li key={project.id} className="list-group-item">
                      <strong>{project.title}</strong> -
                      <em>{project.subtitle}</em>
                      <p className="description text-secondary">
                        {project.description}
                      </p>
                      <p>
                        Github link -
                        <a
                          className="text-secondary text-break text-decoration-none"
                          href={project.git_link}
                        >
                          {project.git_link}
                        </a>
                      </p>
                      <p className="mb-0">
                        Test link -
                        <a
                          className="text-secondary text-break text-decoration-none"
                          href={project.test_link}
                        >
                          {project.test_link}
                        </a>
                      </p>
                    </li>
                  ))}
                </ul>
              </React.Fragment>
            )}
            {profile.educations.length > 0 && (
              <React.Fragment>
                <h2>Education</h2>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Qualification</th>
                      <th>Institute</th>
                      <th>Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    {profile.educations.map((item) => (
                      <tr key={item.id}>
                        <td>{item.qualification}</td>
                        <td>{item.institute}</td>
                        <td>{item.score}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </React.Fragment>
            )}
            {profile.experiences.length > 0 && (
              <React.Fragment>
                <h2>Experience</h2>
                <ul className="list-group mb-3">
                  {profile.experiences.map((ex) => (
                    <li key={ex.id} className="list-group-item">
                      <strong>{ex.title}</strong> -<em>{ex.subtitle}</em>
                      <p className="text-secondary">
                        {ex.start} - {ex.end}
                      </p>
                      <p className="description text-secondary mb-0">
                        {ex.responsibilities}
                      </p>
                    </li>
                  ))}
                </ul>
              </React.Fragment>
            )}
            {profile.trainings.length > 0 && (
              <React.Fragment>
                <h2>Trainings</h2>
                <ul className="list-group mb-3">
                  {profile.trainings.map((tr) => (
                    <li key={tr.id} className="list-group-item">
                      <strong>{tr.title}</strong> -<em>{tr.subtitle}</em>
                      <p className="description text-secondary mb-0">
                        {tr.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </React.Fragment>
            )}
          </div>
          <div className="language">
            {profile.languages.length > 0 && (
              <React.Fragment>
                <h2>Languages</h2>
                <p>{profile.languages.map((l) => l.name).join(", ")}</p>
              </React.Fragment>
            )}
          </div>
        </div>
        <div className="contact">
          <h2 className="contact-h2">Contact</h2>
          <p className="mb-0">{profile.basicInfo.email}</p>
          <p className="mb-0">{profile.basicInfo.address}</p>
          <p className="mb-0">{profile.basicInfo.phone}</p>
          <a href={profile.basicInfo.profile_link}>
            {profile.basicInfo.profile_link.length < 25
              ? profile.basicInfo.profile_link
              : profile.basicInfo.profile_link.substr(0, 25)}
          </a>
        </div>
      </div>
    </SpinnerWhileLoading>
  );
}

export default ProfileView;
