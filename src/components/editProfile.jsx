import React, { useEffect, useRef, useState } from "react";
import EditProfileEducation from "./editProfileEducation";
import EditProfileExperience from "./editProfileExperience";
import EditProfileProject from "./editProfileProject";
import EditProfileSkillLanguage from "./editProfileSkillLanguage";
import EditProfileTraining from "./editProfileTraining";

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
  const [editTab, setEditTab] = useState(EDIT_TABS[0]);
  const padSelectedRef = useRef(null);

  useEffect(() => {
    if (padSelectedRef.current)
      padSelectedRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
  }, [editTab]);

  return (
    <React.Fragment>
      <div className="d-flex justify-content-center w-100">
        <div className="pad">
          {EDIT_TABS.map((item) => (
            <span
              className={
                "pad__select c-pointer" +
                (item.name == editTab.name ? " pad__select_selected" : "")
              }
              ref={item.name == editTab.name ? padSelectedRef : null}
              onClick={() => {
                setEditTab(item);
              }}
            >
              {item.label}
            </span>
          ))}
        </div>
      </div>
      {<editTab.Component />}
    </React.Fragment>
  );
}

export default EditProfile;
