import React, { useEffect, useRef, useState } from "react";
import EditProfileEducation from "./editProfileEducation";
import EditProfileExperience from "./editProfileExperience";
import EditProfileProject from "./editProfileProject";
import EditProfileSkillLanguage from "./editProfileSkillLanguage";
import EditProfileTraining from "./editProfileTraining";
import { getProjectListForUserId } from "../services/fakeProjectService";
import { getEducationListForUserId } from "../services/fakeEducationService";

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
    experience: { list: [], current: {} },
    skillLanguage: { list: [], current: {} },
    training: { list: [], current: {} },
  });

  async function loadProjects() {
    const projects = await getProjectListForUserId(userId);
    setData({ ...data, project: { ...data.project, list: projects } });
  }

  async function loadEducations() {
    const educations = await getEducationListForUserId(userId);
    setData({ ...data, education: { ...data.education, list: educations } });
  }

  useEffect(() => {
    async function loadAllData() {
      const projects = await getProjectListForUserId(userId);
      const educations = await getEducationListForUserId(userId);
      setData({
        ...data,
        project: { ...data.project, list: projects },
        education: { ...data.education, list: educations },
      });
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

  const refreshFuncs = {
    project: loadProjects,
    education: loadEducations,
    // experience: loadExperiences,
    // skillLanguage: loadSkillsLanguages,
    // training: loadTrainings,
  };
  let refreshFuncForEditTab = refreshFuncs[editTab.name];
  return (
    <React.Fragment>
      <div className="d-flex justify-content-center w-100">
        <div className="pad">
          {EDIT_TABS.map((item) => (
            <span
              className={
                "pad__select c-pointer" +
                (item.name === editTab.name ? " pad__select_selected" : "")
              }
              ref={item.name === editTab.name ? padSelectedRef : null}
              onClick={() => {
                setEditTab(item);
              }}
            >
              {item.label}
            </span>
          ))}
        </div>
      </div>
      {
        <editTab.Component
          onNext={() => setEditTab(EDIT_TABS[EDIT_TABS.indexOf(editTab) + 1])}
          refresh={refreshFuncForEditTab}
          data={data[editTab.name]}
          setData={handleSetData}
        />
      }
    </React.Fragment>
  );
}

export default EditProfile;
