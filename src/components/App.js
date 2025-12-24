import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [step, setStep] = useState(1);

  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [socials, setSocials] = useState([]);

  return (
    <>
      <h1 className="title">RESUME GENERATOR</h1>

      <div className="steps">
        <span data-step="1" className={step === 1 ? "active-step" : ""}>Profile</span>
        <span data-step="2" className={step === 2 ? "active-step" : ""}>Education</span>
        <span data-step="3" className={step === 3 ? "active-step" : ""}>Skills</span>
        <span data-step="4" className={step === 4 ? "active-step" : ""}>Projects</span>
        <span data-step="5" className={step === 5 ? "active-step" : ""}>Social</span>
      </div>

      <div className="container">

        {step === 1 && (
          <>
            <h3>Add your profile details</h3>
            <input name="fname" placeholder="First Name" />
            <input name="lname" placeholder="Last Name" />
            <input name="phone" placeholder="Phone" />
            <input name="address" placeholder="Address" />
            <input name="url" type="file" />
          </>
        )}

        {step === 2 && (
          <>
            <h3>Add your Education Details</h3>

            <div>
              <input name="courseName" placeholder="Course Name" />
              <span>{education.length}</span>
            </div>

            <button
              id="add_education"
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
              <input name="skill" placeholder="Skill" />
              <span>{skills.length}</span>
            </div>

            <button
              id="add_skill"
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
              <input name="projectName" placeholder="Project Name" />
              <span>{projects.length}</span>
            </div>

            <button
              id="add_project"
              onClick={() => setProjects([...projects, {}])}
            >
              ADD PROJECT
            </button>
          </>
        )}

        {step === 5 && (
          <>
            <h3>Add social links</h3>

            <div>
              <input name="Social" placeholder="Social Link" />
              <span>{socials.length}</span>
            </div>

            <button
              id="add_social"
              onClick={() => setSocials([...socials, {}])}
            >
              ADD SOCIAL
            </button>
          </>
        )}

        <div className="buttons">
          {step > 1 && (
            <button id="back" onClick={() => setStep(step - 1)}>
              BACK
            </button>
          )}

          {step < 5 && (
            <button id="next" onClick={() => setStep(step + 1)}>
              NEXT
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
