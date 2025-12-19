import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [step, setStep] = useState(1);

  const next = () => step < 5 && setStep(step + 1);
  const back = () => step > 1 && setStep(step - 1);

  return (
    <div>
      <h1 className="title">RESUME GENERATOR</h1>

      <div className="makeStyles-instance-16">1</div>

      {step === 1 && (
        <div>
          <h3>Add your profile details</h3>
          <input name="fname" />
          <input name="lname" />
          <input name="phone" />
          <input name="address" />
          <input name="url" type="file" />
        </div>
      )}

      {step === 2 && (
        <div>
          <h3>Add your Education Details</h3>
          <input name="courseName" />
          <input name="completionYear" />
          <input name="college" />
          <input name="percentage" />
          <button id="add_education">Add Education</button>
        </div>
      )}

      {step === 3 && (
        <div>
          <h3>Add your Skills</h3>
          <input name="skill" value="1" readOnly />
          <button id="add_skill">Add Skill</button>
        </div>
      )}

      {step === 4 && (
        <div>
          <h3>Add your Mini Projects</h3>
          <input name="projectName" value="1" readOnly />
          <input name="techStack" />
          <textarea name="description" />
          <button id="add_project">Add Project</button>
        </div>
      )}

      {step === 5 && (
        <div>
          <h3>Add your Social Media Links</h3>
          <input name="Social" value="1" readOnly />
          <button id="add_social">Add Social</button>
        </div>
      )}

      <div className="makeStyles-footer-15 buttons">
        <button id="back" onClick={back} disabled={step === 1}>
          BACK
        </button>

        {step < 5 && (
          <button id="next" className="MuiButton-contained" onClick={next}>
            NEXT
          </button>
        )}

        <button id="save_continue">SAVE AND CONTINUE</button>
      </div>
    </div>
  );
};

export default App;
