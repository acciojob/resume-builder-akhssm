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
        <span data-step="1" className={step === 1 ? "active-step" : ""}>Profile Section</span>
        <span data-step="2" className={step === 2 ? "active-step" : ""}>Education Section</span>
        <span data-step="3" className={step === 3 ? "active-step" : ""}>Skills Sector</span>
        <span data-step="4" className={step === 4 ? "active-step" : ""}>Mini Project</span>
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

            <input name="courseName" placeholder="Course Name *" />
            <input name="completionYear" placeholder="Completion Year *" />

            <input name="college" placeholder="College/School *" />
            <input name="percentage" placeholder="Percentage *" />

            <div className="counter">{education.length}</div>

            <button
              id="add_education"
              onClick={() => setEducation([...education, {}])}
            >
              ADD EDUCATION
            </button>

            <button
              id="delete"
              onClick={() => setEducation([])}
            >
              DELETE
            </button>
          </>
        )}

        {step === 3 && (
          <>
            <h3>Add your Skills</h3>

            <div>
              <input name="skill" placeholder="Skill *" />
              <span>{skills.length}</span>
            </div>

            <button
              id="add_skill"
              onClick={() => setSkills([...skills, {}])}
            >
              ADD SKILL
            </button>

            <button
              id="delete_skill"
              onClick={() => setSkills([])}
            >
              DELETE SKILL
            </button>
          </>
        )}

        {step === 4 && (
          <>
            <h3>Add your Mini Projects</h3>

            <input name="projectName" placeholder="Project Name *" />
            <input name="techStack" placeholder="Tech Stack" />
            <textarea name="description" placeholder="Description" />

            <div className="counter">{projects.length}</div>

            <button
              id="add_project"
              onClick={() => setProjects([...projects, {}])}
            >
              ADD PROJECT
            </button>

            <button
              id="delete"
              onClick={() => setProjects([])}
            >
              DELETE
            </button>
          </>
        )}

        {step === 5 && (
          <>
            <h3>Add social links</h3>

            <div>
              <input name="Social" placeholder="Social Links *" />
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

          <button id="save_continue">SAVE AND CONTINUE</button>
        </div>
      </div>
    </>
  );
};

export default App;
