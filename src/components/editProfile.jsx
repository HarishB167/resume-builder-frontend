import React, { useEffect, useRef, useState } from "react";
import EditProfileEducation from "./editProfileEducation";
import EditProfileExperience from "./editProfileExperience";
import EditProfileProject from "./editProfileProject";
import EditProfileSkillLanguage from "./editProfileSkillLanguage";
import EditProfileTraining from "./editProfileTraining";
import SpinnerWhileLoading from "./common/spinnerWhileLoading";
import { getProjectListForUserId } from "../services/projectService";
import { getEducationListForUserId } from "../services/educationService";
import { getExperienceListForUserId } from "../services/experienceService";
import { getSkillListForUserId } from "../services/skillLanguageService";
import { getLanguageListForUserId } from "../services/skillLanguageService";
import { getTrainingListForUserId } from "../services/trainingService";
import { getUserProfile } from "../services/userService";

const EDIT_TABS = [
  { name: "project", label: "Add/Edit Project", Component: EditProfileProject },
  {
    name: "education",
    label: "Add/Edit Education",
    Component: EditProfileEducation,
  },
  {
    name: "experience",
    label: "Add/Edit Experience",
    Component: EditProfileExperience,
  },
  {
    name: "skillLanguage",
    label: "Add/Edit Skill/Language",
    Component: EditProfileSkillLanguage,
  },
  {
    name: "training",
    label: "Add/Edit Training",
    Component: EditProfileTraining,
  },
];

function EditProfile(props) {
  const userId = props.match.params.id;

  const [editTab, setEditTab] = useState(EDIT_TABS[0]);
  const [showSpinner, setShowSpinner] = useState(true);

  const [data, setData] = useState({
    project: {
      list: [],
      current: {
        id: "",
        user_id: userId,
        title: "",
        subtitle: "",
        description: "",
        git_link: "",
        test_link: "",
      },
    },
    education: {
      list: [],
      current: {
        id: "",
        user_id: userId,
        qualification: "",
        institute: "",
        score: "",
      },
    },
    experience: {
      list: [],
      current: {
        id: "",
        user_id: userId,
        title: "",
        subtitle: "",
        start: "",
        end: "",
        responsibilities: "",
      },
    },
    skill: { list: [], current: { id: "", user_id: userId, name: "" } },
    language: { list: [], current: { id: "", user_id: userId, name: "" } },
    training: {
      list: [],
      current: {
        id: "",
        user_id: userId,
        title: "",
        subtitle: "",
        description: "",
      },
    },
  });

  async function loadProjects() {
    const projects = await getProjectListForUserId(userId);
    setData({ ...data, project: { ...data.project, list: projects } });
  }

  function clearCurrentFields() {
    setData({
      ...data,
      project: {
        ...data.project,
        current: {
          id: "",
          user_id: userId,
          title: "",
          subtitle: "",
          description: "",
          git_link: "",
          test_link: "",
        },
      },
      education: {
        ...data.education,
        current: {
          id: "",
          user_id: userId,
          qualification: "",
          institute: "",
          score: "",
        },
      },
      experience: {
        ...data.experience,
        current: {
          id: "",
          user_id: userId,
          title: "",
          subtitle: "",
          start: "",
          end: "",
          responsibilities: "",
        },
      },
      skill: { ...data.skill, current: { id: "", user_id: userId, name: "" } },
      language: {
        ...data.language,
        current: { id: "", user_id: userId, name: "" },
      },
      training: {
        ...data.training,
        current: {
          id: "",
          user_id: userId,
          title: "",
          subtitle: "",
          description: "",
        },
      },
    });
  }

  async function loadEducations() {
    const educations = await getEducationListForUserId(userId);
    setData({ ...data, education: { ...data.education, list: educations } });
  }

  async function loadExperiences() {
    const experiences = await getExperienceListForUserId(userId);
    setData({ ...data, experience: { ...data.experience, list: experiences } });
  }

  async function loadSkillsLanguages() {
    const skills = await getSkillListForUserId(userId);
    const languages = await getLanguageListForUserId(userId);
    setData({
      ...data,
      skill: { ...data.skill, list: skills },
      language: { ...data.language, list: languages },
    });
  }

  async function loadTrainings() {
    const trainings = await getTrainingListForUserId(userId);
    setData({ ...data, training: { ...data.training, list: trainings } });
  }

  useEffect(() => {
    async function loadAllData() {
      setShowSpinner(true);
      const profile = await getUserProfile(userId);
      setData({
        ...data,
        project: { ...data.project, list: profile.projects },
        education: { ...data.education, list: profile.educations },
        experience: { ...data.experience, list: profile.experiences },
        skill: { ...data.skill, list: profile.skills },
        language: { ...data.language, list: profile.languages },
        training: { ...data.training, list: profile.trainings },
      });
      setShowSpinner(false);
    }
    loadAllData();
  }, []);

  const padSelectedRef = useRef(null);
  useEffect(() => {
    if (padSelectedRef.current)
      padSelectedRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
  }, [editTab]);

  const handleSetData = (pData) => {
    const currentData = { ...data };
    currentData[editTab.name].current = pData;
    setData(currentData);
  };

  const handleSetDataSkillLanguage = (pData, type) => {
    const currentData = { ...data };
    currentData[type].current = pData;
    setData(currentData);
  };

  const refreshFuncs = {
    project: loadProjects,
    education: loadEducations,
    experience: loadExperiences,
    skillLanguage: loadSkillsLanguages,
    training: loadTrainings,
  };
  let refreshFuncForEditTab = refreshFuncs[editTab.name];
  return (
    <SpinnerWhileLoading
      className="d-flex flex-column align-items-center h-75 justify-content-center"
      showSpinnerWhen={showSpinner}
    >
      <React.Fragment>
        <div className="d-flex justify-content-center w-100">
          <div className="pad">
            {EDIT_TABS.map((item) => (
              <span
                key={item.name}
                className={
                  "pad__select c-pointer" +
                  (item.name === editTab.name ? " pad__select_selected" : "")
                }
                ref={item.name === editTab.name ? padSelectedRef : null}
                onClick={() => {
                  setEditTab(item);
                  clearCurrentFields();
                }}
              >
                {item.label}
              </span>
            ))}
          </div>
        </div>
        {editTab.name !== "skillLanguage" && (
          <editTab.Component
            onNext={() => setEditTab(EDIT_TABS[EDIT_TABS.indexOf(editTab) + 1])}
            refresh={refreshFuncForEditTab}
            data={data[editTab.name]}
            setData={handleSetData}
          />
        )}
        {editTab.name === "skillLanguage" && (
          <editTab.Component
            onNext={() => setEditTab(EDIT_TABS[EDIT_TABS.indexOf(editTab) + 1])}
            refresh={loadSkillsLanguages}
            data={{ skill: data.skill, language: data.language }}
            setData={handleSetDataSkillLanguage}
          />
        )}
      </React.Fragment>
    </SpinnerWhileLoading>
  );
}

export default EditProfile;
