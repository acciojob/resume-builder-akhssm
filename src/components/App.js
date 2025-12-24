import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [step, setStep] = useState(1);

  const [profile, setProfile] = useState({
    fname: "",
    lname: "",
    phone: "",
    address: "",
    url: "",
  });

  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [socials, setSocials] = useState([]);

  const [eduInput, setEduInput] = useState({ courseName: "", completionYear: "", college: "", percentage: "" });
  const [skillInput, setSkillInput] = useState("");
  const [projectInput, setProjectInput] = useState({ projectName: "", techStack: "", description: "" });
  const [socialInput, setSocialInput] = useState("");

  return (
    <>
      <h1 className="title">RESUME GENERATOR</h1>

      <div className="steps">
        <span data-step="1" className={step === 1 ? "active-step" : ""}>Profile Section</span>
        <span data-step="2" className={step === 2 ? "active-step" : ""}>Education Section</span>
        <span data-step="3" className={step === 3 ? "active-step" : ""}>Skills Section</span>
        <span data-step="4" className={step === 4 ? "active-step" : ""}>Mini Project</span>
        <span data-step="5" className={step === 5 ? "active-step" : ""}>Social</span>
      </div>

      <div className="container">
        {step === 1 && (
          <>
            <h3>Add your profile details</h3>
            <input
              name="fname"
              placeholder="First Name"
              value={profile.fname}
              onChange={(e) => setProfile({ ...profile, fname: e.target.value })}
            />
            <input
              name="lname"
              placeholder="Last Name"
              value={profile.lname}
              onChange={(e) => setProfile({ ...profile, lname: e.target.value })}
            />
            <input
              name="phone"
              placeholder="Phone"
              value={profile.phone}
              onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
            />
            <input
              name="address"
              placeholder="Address"
              value={profile.address}
              onChange={(e) => setProfile({ ...profile, address: e.target.value })}
            />
            <input
              name="url"
              type="file"
              onChange={(e) => setProfile({ ...profile, url: e.target.files[0] })}
            />
          </>
        )}

        {step === 2 && (
          <>
            <h3>Add your Education Details</h3>
            <input
              name="courseName"
              placeholder="Course Name *"
              value={eduInput.courseName}
              onChange={(e) => setEduInput({ ...eduInput, courseName: e.target.value })}
            />
            <input
              name="completionYear"
              placeholder="Completion Year *"
              value={eduInput.completionYear}
              onChange={(e) => setEduInput({ ...eduInput, completionYear: e.target.value })}
            />
            <input
              name="college"
              placeholder="College/School *"
              value={eduInput.college}
              onChange={(e) => setEduInput({ ...eduInput, college: e.target.value })}
            />
            <input
              name="percentage"
              placeholder="Percentage *"
              value={eduInput.percentage}
              onChange={(e) => setEduInput({ ...eduInput, percentage: e.target.value })}
            />

            <div className="counter">{education.length}</div>

            <button
              id="add_education"
              onClick={() => {
                if (eduInput.courseName && eduInput.completionYear && eduInput.college && eduInput.percentage) {
                  setEducation([...education, eduInput]);
                  setEduInput({ courseName: "", completionYear: "", college: "", percentage: "" });
                }
              }}
            >
              ADD EDUCATION
            </button>

            <button id="delete" onClick={() => setEducation([])}>
              DELETE
            </button>
          </>
        )}

        {step === 3 && (
          <>
            <h3>Add your Skills</h3>
            <div>
              <input
                name="skill"
                placeholder="Skill *"
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
              />
              <span>{skills.length}</span>
            </div>

            <button
              id="add_skill"
              onClick={() => {
                if (skillInput.trim() !== "") {
                  setSkills([...skills, skillInput]);
                  setSkillInput("");
                }
              }}
            >
              ADD SKILL
            </button>

            <button id="delete_skill" onClick={() => setSkills([])}>
              DELETE SKILL
            </button>
          </>
        )}

        {step === 4 && (
          <>
            <h3>Add your Mini Projects</h3>
            <input
              name="projectName"
              placeholder="Project Name *"
              value={projectInput.projectName}
              onChange={(e) => setProjectInput({ ...projectInput, projectName: e.target.value })}
            />
            <input
              name="techStack"
              placeholder="Tech Stack"
              value={projectInput.techStack}
              onChange={(e) => setProjectInput({ ...projectInput, techStack: e.target.value })}
            />
            <textarea
              name="description"
              placeholder="Description"
              value={projectInput.description}
              onChange={(e) => setProjectInput({ ...projectInput, description: e.target.value })}
            />

            <div className="counter">{projects.length}</div>

            <button
              id="add_project"
              onClick={() => {
                if (projectInput.projectName) {
                  setProjects([...projects, projectInput]);
                  setProjectInput({ projectName: "", techStack: "", description: "" });
                }
              }}
            >
              ADD PROJECT
            </button>

            <button id="delete" onClick={() => setProjects([])}>
              DELETE
            </button>
          </>
        )}

        {step === 5 && (
          <>
            <h3>Add social links</h3>
            <div>
              <input
                name="Social"
                placeholder="Social Links *"
                value={socialInput}
                onChange={(e) => setSocialInput(e.target.value)}
              />
              <span>{socials.length}</span>
            </div>

            <button
              id="add_social"
              onClick={() => {
                if (socialInput.trim() !== "") {
                  setSocials([...socials, socialInput]);
                  setSocialInput("");
                }
              }}
            >
              ADD SOCIAL
            </button>
          </>
        )}

        <div className="buttons">
          {step > 1 && <button id="back" onClick={() => setStep(step - 1)}>BACK</button>}
          {step < 5 && <button id="next" onClick={() => setStep(step + 1)}>NEXT</button>}
          <button id="save_continue">SAVE AND CONTINUE</button>
        </div>
      </div>
    </>
  );
};

export default App;
