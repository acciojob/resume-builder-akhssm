import React, { useState } from "react";
import "./../styles/App.css";

const steps = [
  "Profile Section",
  "Education Section",
  "Skills Section",
  "Mini Project",
  "Social"
];

const App = () => {
  const [step, setStep] = useState(1);

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
            <input placeholder="First Name" />
            <input placeholder="Last Name" />
            <input placeholder="Phone Number" />
            <input placeholder="Address" />
            <input type="file" />
          </>
        )}

        {step === 2 && (
          <>
            <h3>Add your Education Details</h3>
            <input placeholder="Course Name" />
            <input placeholder="Completion Year" />
            <input placeholder="College" />
            <input placeholder="Percentage" />
            <button id="add_education">Add Education</button>
            <button id="delete">Delete</button>
          </>
        )}

        {step === 3 && (
          <>
            <h3>Add your Skills</h3>
            <input placeholder="Skill" />
            <button id="add_skill">Add Skill</button>
            <button id="delete_skill">Delete Skill</button>
          </>
        )}

        {step === 4 && (
          <>
            <h3>Add your Mini Projects</h3>
            <input placeholder="Project Name" />
            <input placeholder="Tech Stack" />
            <textarea placeholder="Description"></textarea>
            <button id="add_project">Add Project</button>
            <button id="delete">Delete</button>
          </>
        )}

        {step === 5 && (
          <>
            <h3>Add your Social Media Links</h3>
            <input placeholder="Social Media URL" />
            <button id="add_social">Add Social</button>
          </>
        )}

        <div className="buttons">
          <button id="back" onClick={back} disabled={step === 1}>
            BACK
          </button>

          {step < 5 && (
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
