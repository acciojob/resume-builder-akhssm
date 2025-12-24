import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [step, setStep] = useState(1);

  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [socials, setSocials] = useState([]);

  const next = () => setStep(step + 1);
  const back = () => setStep(step - 1);

  return (
    <>
      <h1 className="title">RESUME GENERATOR</h1>

      <div className="steps">
        <span className={step === 1 ? "active-step" : ""} data-step="1">Profile</span>
        <span className={step === 2 ? "active-step" : ""} data-step="2">Education</span>
        <span className={step === 3 ? "active-step" : ""} data-step="3">Skills</span>
        <span className={step === 4 ? "active-step" : ""} data-step="4">Projects</span>
        <span className={step === 5 ? "active-step" : ""} data-step="5">Social</span>
      </div>

      <div className="container">

        {step === 1 && (
          <>
            <h3>Add your profile details</h3>
            <input />
            <input />
            <input />
            <input />
            <input type="file" />
          </>
        )}

        {step === 2 && (
          <>
            <h3>Add your Education Details</h3>

            <div>
              <input />
              <span>{education.length}</span>
            </div>

            <button
              id="add_education"
              className="MuiButton-contained"
              onClick={() => setEducation([...education, {}])}
            >
              ADD EDUCATION
            </button>
          </>
        )}

        {step === 3 && (
          <>
            <h3>Add your Skills</h3>

            <div>
              <input />
              <span>{skills.length}</span>
            </div>

            <button
              id="add_skill"
              className="MuiButton-contained"
              onClick={() => setSkills([...skills, {}])}
            >
              ADD SKILL
            </button>
          </>
        )}

        {step === 4 && (
          <>
            <h3>Add your Mini Projects</h3>

            <div>
              <input />
              <span>{projects.length}</span>
            </div>

            <button
              id="add_project"
              className="MuiButton-contained"
              onClick={() => setProjects([...projects, {}])}
            >
              ADD PROJECT
            </button>
          </>
        )}

        {step === 5 && (
          <>
            <h3>Add your Social Media</h3>

            <div>
              <input />
              <span>{socials.length}</span>
            </div>

            <button
              id="add_social"
              className="MuiButton-contained"
              onClick={() => setSocials([...socials, {}])}
            >
              ADD SOCIAL
            </button>
          </>
        )}

        <div className="makeStyles-footer-15">
          {step > 1 && <button id="back" onClick={back}>BACK</button>}
          {step < 5 && <button id="next" onClick={next}>NEXT</button>}
        </div>

      </div>
    </>
  );
};

export default App;
