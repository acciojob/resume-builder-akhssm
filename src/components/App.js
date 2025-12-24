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
            <input name="fname" onChange={e => setProfile({ ...profile, fname: e.target.value })} />
            <input name="lname" onChange={e => setProfile({ ...profile, lname: e.target.value })} />
            <input name="phone" onChange={e => setProfile({ ...profile, phone: e.target.value })} />
            <input name="address" onChange={e => setProfile({ ...profile, address: e.target.value })} />
            <input name="url" type="file" />
          </>
        )}

        {step === 2 && (
          <>
            <h3>Add your Education Details ({education.length})</h3>

            <input name="courseName" onChange={e => setEduForm({ ...eduForm, courseName: e.target.value })} />
            <input name="completionYear" onChange={e => setEduForm({ ...eduForm, completionYear: e.target.value })} />
            <input name="college" onChange={e => setEduForm({ ...eduForm, college: e.target.value })} />
            <input name="percentage" onChange={e => setEduForm({ ...eduForm, percentage: e.target.value })} />

            <button
              id="add_education"
              className="MuiButton-contained"
              onClick={() => setEducation([...education, eduForm])}
            >
              ADD EDUCATION
            </button>

            <button id="delete" onClick={() => setEducation([])}>DELETE</button>
          </>
        )}

        {step === 3 && (
          <>
            <h3>Add your Skills ({skills.length})</h3>

            <input
              name="skill"
              value={skill}
              onChange={e => setSkill(e.target.value)}
            />

            <button
              id="add_skill"
              className="MuiButton-contained"
              onClick={() => {
                setSkills([...skills, skill]);
                setSkill("");
              }}
            >
              ADD SKILL
            </button>

            <button id="delete_skill" onClick={() => setSkills([])}>DELETE SKILL</button>
          </>
        )}

        {step === 4 && (
          <>
            <h3>Add your Mini Projects ({projects.length})</h3>

            <input name="projectName" onChange={e => setProjectForm({ ...projectForm, projectName: e.target.value })} />
            <input name="techStack" onChange={e => setProjectForm({ ...projectForm, techStack: e.target.value })} />
            <textarea name="description" onChange={e => setProjectForm({ ...projectForm, description: e.target.value })} />

            <button
              id="add_project"
              className="MuiButton-contained"
              onClick={() => setProjects([...projects, projectForm])}
            >
              ADD PROJECT
            </button>

            <button id="delete" onClick={() => setProjects([])}>DELETE</button>
          </>
        )}

        {step === 5 && (
          <>
            <h3>Add your Social Media ({socials.length})</h3>

            <input
              name="Social"
              value={social}
              onChange={e => setSocial(e.target.value)}
            />

            <button
              id="add_social"
              className="MuiButton-contained"
              onClick={() => {
                setSocials([...socials, social]);
                setSocial("");
              }}
            >
              ADD SOCIAL
            </button>
          </>
        )}

        <div className="makeStyles-footer-15">
          <button id="back" onClick={back} disabled={step === 1}>
            BACK
          </button>

          {step < 6 && (
            <button id="next" className="MuiButton-contained" onClick={next}>
              NEXT
            </button>
          )}

          <button id="save_continue" className="MuiButton-contained">
            SAVE AND CONTINUE
          </button>
        </div>

      </div>
    </>
  );
};

export default App;
