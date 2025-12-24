import React, { useState } from "react";
import "./../styles/App.css";

const steps = [
  "Profile Section",
  "Education Section",
  "Skills Sector",
  "Mini Project",
  "Social",
];

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
  const [eduForm, setEduForm] = useState({
    courseName: "",
    completionYear: "",
    college: "",
    percentage: "",
  });

  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState("");

  const [projects, setProjects] = useState([]);
  const [projectForm, setProjectForm] = useState({
    projectName: "",
    techStack: "",
    description: "",
  });

  const [socials, setSocials] = useState([]);
  const [social, setSocial] = useState("");

  const next = () => step < 6 && setStep(step + 1);
  const back = () => step > 1 && setStep(step - 1);

  return (
    <>
      <h1 className="title">RESUME GENERATOR</h1>

      <div className="steps">
        {steps.map((label, i) => (
          <span
            key={i}
            data-step={i + 1}
            className={step === i + 1 ? "active-step" : ""}
          >
            {label}
          </span>
        ))}
      </div>

      <div className="container">
        {step === 1 && (
          <>
            <h3>Add your profile details</h3>
            <input name="fname" placeholder="First Name"
              onChange={(e) => setProfile({ ...profile, fname: e.target.value })} />
            <input name="lname" placeholder="Last Name"
              onChange={(e) => setProfile({ ...profile, lname: e.target.value })} />
            <input name="phone" placeholder="Phone Number"
              onChange={(e) => setProfile({ ...profile, phone: e.target.value })} />
            <input name="address" placeholder="Address"
              onChange={(e) => setProfile({ ...profile, address: e.target.value })} />
            <input name="url" type="file" />
          </>
        )}

        {step === 2 && (
          <>
            <h3>Add your Education Details</h3>
            <input name="courseName" placeholder="Course Name *"
              onChange={(e) => setEduForm({ ...eduForm, courseName: e.target.value })} />
            <input name="completionYear" placeholder="Completion Year *"
              onChange={(e) => setEduForm({ ...eduForm, completionYear: e.target.value })} />
            <input name="college" placeholder="College/School *"
              onChange={(e) => setEduForm({ ...eduForm, college: e.target.value })} />
            <input name="percentage" placeholder="Percentage *"
              onChange={(e) => setEduForm({ ...eduForm, percentage: e.target.value })} />

            <button id="add_education"
              onClick={() => {
                setEducation([...education, eduForm]);
                setEduForm({ courseName: "", completionYear: "", college: "", percentage: "" });
              }}>
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
            <input
              name="skill"
              placeholder="Skill *"
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
            />

            <button id="add_skill"
              onClick={() => {
                setSkills([...skills, skill]);
                setSkill("");
              }}>
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
            <input name="projectName" placeholder="Project Name *"
              onChange={(e) =>
                setProjectForm({ ...projectForm, projectName: e.target.value })} />
            <input name="techStack" placeholder="Tech Stack"
              onChange={(e) =>
                setProjectForm({ ...projectForm, techStack: e.target.value })} />
            <textarea name="description" placeholder="Description"
              onChange={(e) =>
                setProjectForm({ ...projectForm, description: e.target.value })} />

            <button id="add_project"
              onClick={() => {
                setProjects([...projects, projectForm]);
                setProjectForm({ projectName: "", techStack: "", description: "" });
              }}>
              ADD PROJECT
            </button>

            <button id="delete" onClick={() => setProjects([])}>
              DELETE
            </button>
          </>
        )}

        {step === 5 && (
          <>
            <h3>Add social links like linkedin , github etc</h3>
            <input
              name="Social"
              placeholder="Social Links *"
              value={social}
              onChange={(e) => setSocial(e.target.value)}
            />

            <button id="add_social"
              onClick={() => {
                setSocials([...socials, social]);
                setSocial("");
              }}>
              ADD SOCIAL
            </button>
          </>
        )}

        {step === 6 && (
          <>
            <h3>All steps completed - your resume is ready!!</h3>
            <h1>{profile.fname} {profile.lname}</h1>
          </>
        )}

        <div className="buttons">
          <button id="back" onClick={back} disabled={step === 1}>
            BACK
          </button>

          {step < 6 && (
            <button id="next" onClick={next}>
              NEXT
            </button>
          )}

          <button id="save_continue">SAVE AND CONTINUE</button>
        </div>
      </div>
    </>
  );
};

export default App;
