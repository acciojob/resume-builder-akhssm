import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [step, setStep] = useState(1);

  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [socials, setSocials] = useState([]);

  const next = () => step < 5 && setStep(step + 1);
  const back = () => step > 1 && setStep(step - 1);

  return (
    <div>
      {/* Do not remove the main div */}

      <h1 className="title">RESUME GENERATOR</h1>

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

          <div>
            <input name="courseName" />
            <input name="completionYear" />
            <input name="college" />
            <input name="percentage" />
          </div>

          <button
            id="add_education"
            onClick={() => setEducation([...education, {}])}
          >
            Add Education
          </button>

          <div className="makeStyles-instance-16">
            {education.map((_, i) => (
              <p key={i}>{i + 1}</p>
            ))}
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h3>Add your Skills</h3>

          <div>
            <input name="skill" />
            <div>
              {skills.map((_, i) => (
                <p key={i}>{i + 1}</p>
              ))}
            </div>
          </div>

          <button
            id="add_skill"
            onClick={() => setSkills([...skills, {}])}
          >
            Add Skill
          </button>
        </div>
      )}

      {step === 4 && (
        <div>
          <h3>Add your Mini Projects</h3>

          <div>
            <input name="projectName" />
            <input name="techStack" />
            <textarea name="description" />
            <div>
              {projects.map((_, i) => (
                <p key={i}>{i + 1}</p>
              ))}
            </div>
          </div>

          <button
            id="add_project"
            onClick={() => setProjects([...projects, {}])}
          >
            Add Project
          </button>
        </div>
      )}

      {step === 5 && (
        <div>
          <h3>Add your Social Media Links</h3>

          <div>
            <input name="Social" />
            <div>
              {socials.map((_, i) => (
                <p key={i}>{i + 1}</p>
              ))}
            </div>
          </div>

          <button
            id="add_social"
            onClick={() => setSocials([...socials, {}])}
          >
            Add Social
          </button>
        </div>
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

        <button id="save_continue">SAVE AND CONTINUE</button>
      </div>
    </div>
  );
};

export default App;
