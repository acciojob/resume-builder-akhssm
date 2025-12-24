import React, { useState } from "react";
import "./../styles/App.css";

const steps = [
  "Profile Section",
  "Education Section",
  "Skills Section",
  "Mini Project",
  "Social",
];

const App = () => {
  const [step, setStep] = useState(1);
  const [skill, setSkill] = useState("");
  const [projectName, setProjectName] = useState("");
  const [social, setSocial] = useState("");

  const next = () => step < 5 && setStep(step + 1);
  const back = () => step > 1 && setStep(step - 1);

  return (
    <>
      <h1 className="title">RESUME GENERATOR</h1>
      <div className="steps">
        {steps.map((label, index) => (
          <span
            key={index}
            className={step === index + 1 ? "active-step" : ""}
          >
            {index + 1}. {label}
          </span>
        ))}
      </div>

      <div className="container">
        {step === 1 && (
          <>
            <h3>Add your profile details</h3>
            <input name="fname" placeholder="First Name" />
            <input name="lname" placeholder="Last Name" />
            <input name="phone" placeholder="Phone Number" />
            <input name="address" placeholder="Address" />
            <input name="url" type="file" />
          </>
        )}

        {step === 2 && (
          <>
            <h3>Add your Education Details</h3>
            <input name="courseName" placeholder="Course Name" />
            <input name="completionYear" placeholder="Completion Year" />
            <input name="college" placeholder="College" />
            <input name="percentage" placeholder="Percentage" />
            <button id="add_education">Add Education</button>
            <button id="delete">Delete</button>
          </>
        )}

        {step === 3 && (
          <>
            <h3>Add your Skills</h3>
            <input
              name="skill"
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
              placeholder="Skill"
            />
            <button id="add_skill">Add Skill</button>
            <button id="delete_skill">Delete Skill</button>
          </>
        )}

        {step === 4 && (
          <>
            <h3>Add your Mini Projects</h3>
            <input
              name="projectName"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              placeholder="Project Name"
            />
            <input name="techStack" placeholder="Tech Stack" />
            <textarea name="description" placeholder="Description" />
            <button id="add_project">Add Project</button>
            <button id="delete">Delete</button>
          </>
        )}

        {step === 5 && (
          <>
            <h3>Add your Social Media Links</h3>
            <input
              name="Social"
              value={social}
              onChange={(e) => setSocial(e.target.value)}
              placeholder="Social Media URL"
            />
            <button id="add_social">Add Social</button>
          </>
        )}

        <div className="makeStyles-footer-15 buttons">
          <button id="back" onClick={back} disabled={step === 1}>
            BACK
          </button>

          {step < 5 && (
            <button
              id="next"
              className="MuiButton-contained"
              onClick={next}
            >
              NEXT
            </button>
          )}

          <button
            id="save_continue"
            className="MuiButton-contained"
          >
            SAVE AND CONTINUE
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
