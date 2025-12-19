import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [step, setStep] = useState(1);

  const next = () => setStep(step + 1);
  const back = () => setStep(step - 1);

  return (
    <div>
      {/* Do not remove the main div */}

      <h1 className="title">RESUME GENERATOR</h1>

      <div className="steps">
        <span>1 Profile</span>
        <span>2 Education</span>
        <span>3 Skills</span>
        <span>4 Projects</span>
        <span>5 Social</span>
      </div>

      {step === 1 && (
        <div>
          <h3>Profile Section</h3>

          <input name="fname" placeholder="First Name" />
          <input name="lname" placeholder="Last Name" />
          <input name="phone" placeholder="Phone Number" />
          <input name="address" placeholder="Address" />
          <input name="url" type="file" />

          <div className="buttons">
            <button id="next" onClick={next}>NEXT</button>
            <button id="save_continue">SAVE AND CONTINUE</button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h3>Education Section</h3>

          <input name="courseName" placeholder="Course Name" />
          <input name="completionYear" placeholder="Completion Year" />
          <input name="college" placeholder="College Name" />
          <input name="percentage" placeholder="Percentage" />

          <button id="add_education">Add Education</button>
          <button id="delete">Delete</button>

          <div className="buttons">
            <button id="back" onClick={back}>BACK</button>
            <button id="next" onClick={next}>NEXT</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h3>Skills Section</h3>

          <input name="skill" placeholder="Skill" />
          <button id="add_skill">Add Skill</button>
          <button id="delete_skill">Delete Skill</button>

          <div className="buttons">
            <button id="back" onClick={back}>BACK</button>
            <button id="next" onClick={next}>NEXT</button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div>
          <h3>Projects Section</h3>

          <input name="projectName" placeholder="Project Name" />
          <input name="techStack" placeholder="Tech Stack" />
          <textarea name="description" placeholder="Description"></textarea>

          <button id="add_project">Add Project</button>
          <button id="delete">Delete</button>

          <div className="buttons">
            <button id="back" onClick={back}>BACK</button>
            <button id="next" onClick={next}>NEXT</button>
          </div>
        </div>
      )}

      {step === 5 && (
        <div>
          <h3>Social Media</h3>

          <input name="Social" placeholder="Social Link" />
          <button id="add_social">Add Social</button>

          <div className="buttons">
            <button id="back" onClick={back}>BACK</button>
            <button id="save_continue">SAVE</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
