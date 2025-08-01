import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/ApplicationForm.css";

const Background: React.FC = () => {
  // Load previous data
  React.useEffect(() => {
    // Load previous form data if available
    const personalInfo = localStorage.getItem("personalInformation");
    if (personalInfo) {
      setFormData((prev) => ({ ...prev, ...JSON.parse(personalInfo) }));
    }
    // Load background data if available
    const backgroundInfo = localStorage.getItem("backgroundInformation");
    if (backgroundInfo) {
      setFormData((prev) => ({ ...prev, ...JSON.parse(backgroundInfo) }));
    }
  }, []);
  // Track-based skills and tools
  const trackSkills: { [key: string]: string[] } = {
    "Product and Design Track": [
      "Wireframing",
      "Prototyping",
      "User Research",
      "UX Writing",
      "Design Systems",
      "Figma",
      "Adobe XD",
      "Accessibility",
      "Journey Mapping",
      "Usability Testing",
    ],
    "Engineering Track": [
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "Python",
      "APIs",
      "Docker",
      "SQL",
      "Git",
      "Testing",
    ],
    "Career & AI Productivity Track": [
      "Prompt Engineering",
      "Notion",
      "Automation",
      "AI Research",
      "Productivity Tools",
      "ChatGPT",
      "Google Workspace",
      "LinkedIn Optimization",
      "Time Management",
      "Remote Collaboration",
    ],
  };

  const trackTools: { [key: string]: string[] } = {
    "Product and Design Track": [
      "Figma",
      "Adobe XD",
      "Sketch",
      "Miro",
      "InVision",
      "Zeplin",
      "Canva",
      "Overflow",
      "Maze",
      "Balsamiq",
    ],
    "Engineering Track": [
      "VS Code",
      "GitHub",
      "Postman",
      "Docker",
      "Jira",
      "Slack",
      "AWS",
      "MongoDB",
      "Redis",
      "Linux",
    ],
    "Career & AI Productivity Track": [
      "Notion",
      "Zapier",
      "Google Workspace",
      "Slack",
      "Trello",
      "Calendly",
      "ChatGPT",
      "LinkedIn",
      "Airtable",
      "Miro",
    ],
  };

  // Get selected track from localStorage (set in TrackSelection)
  const selectedTrack =
    localStorage.getItem("selectedTrack") || "Engineering Track";
  // Compulsory fields: currentPosition, yearsOfExperience, educationLevel, fieldOfStudy, location
  // ...existing code...
  const [formData, setFormData] = useState({
    currentPosition: "",
    yearsOfExperience: "",
    educationLevel: "",
    fieldOfStudy: "",
    currentCompany: "",
    location: "",
    technicalSkills: ["Java", "Python", "Javascript", "Github"] as string[],
    tools: ["VS Code", "GitHub", "Postman", "Docker"] as string[],
  });

  const isFormValid =
    formData.currentPosition.trim() !== "" &&
    formData.yearsOfExperience.trim() !== "" &&
    formData.educationLevel.trim() !== "" &&
    formData.fieldOfStudy.trim() !== "" &&
    formData.location.trim() !== "" &&
    formData.technicalSkills.length >= 1 &&
    formData.tools.length >= 1;
  const navigate = useNavigate();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const removeSkill = (
    skillToRemove: string,
    type: "technicalSkills" | "tools"
  ) => {
    setFormData((prev) => ({
      ...prev,
      [type]: prev[type].filter((skill) => skill !== skillToRemove),
    }));
  };

  const handleNext = () => {
    // Save background data
    localStorage.setItem("backgroundInformation", JSON.stringify(formData));
    navigate("/apply/motivation-goals");
  };

  const handlePrevious = () => {
    // Save background data before going back
    localStorage.setItem("backgroundInformation", JSON.stringify(formData));
    navigate("/apply/track-selection");
  };

  const handleExit = () => {
    navigate("/");
  };

  return (
    <div className="application-form-container">
      {/* Progress Bar */}
      <div className="progress-bar">
        <div className="progress-bar-fill" style={{ width: "75%" }}></div>
      </div>

      {/* Header */}
      <div className="form-header">
        <div
          className="exit-section"
          onClick={handleExit}
          style={{ cursor: "pointer" }}
        >
          <svg
            className="close-icon"
            width="16"
            height="24"
            viewBox="0 0 16 24"
            fill="none"
          >
            <path
              d="M4 15L11 8"
              stroke="#3E3841"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11 15L4 8"
              stroke="#323232"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="exit-text">Exit Application</span>
        </div>
        <div className="separator"></div>
        <div className="step-info" style={{ marginLeft: "-10rem" }}>
          <div className="step-details">
            <div className="step-label">STEP 3/4</div>
            <div className="step-title">Background</div>
          </div>
          <div className="relative w-9 h-9">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.4537 22.324C10.9389 22.324 10.4801 22.2356 10.0772 22.0589C9.67686 21.8821 9.35842 21.6364 9.12186 21.3219C8.8879 21.0048 8.76052 20.6369 8.73972 20.2184H9.72236C9.74315 20.4757 9.83154 20.698 9.98751 20.8852C10.1435 21.0697 10.3475 21.2127 10.5997 21.3141C10.8519 21.4155 11.1313 21.4662 11.4381 21.4662C11.7812 21.4662 12.0853 21.4064 12.3505 21.2868C12.6157 21.1672 12.8236 21.0009 12.9744 20.7877C13.1252 20.5745 13.2006 20.3276 13.2006 20.0468C13.2006 19.7531 13.1278 19.4944 12.9822 19.2709C12.8366 19.0447 12.6235 18.8679 12.3427 18.7405C12.062 18.6132 11.7188 18.5495 11.3133 18.5495H10.6738V17.6916H11.3133C11.6304 17.6916 11.9086 17.6344 12.1477 17.5201C12.3895 17.4057 12.578 17.2445 12.7131 17.0365C12.8509 16.8286 12.9198 16.5842 12.9198 16.3035C12.9198 16.0331 12.86 15.7978 12.7404 15.5977C12.6209 15.3975 12.4519 15.2415 12.2335 15.1298C12.0178 15.018 11.763 14.9621 11.4693 14.9621C11.1937 14.9621 10.9337 15.0128 10.6894 15.1142C10.4476 15.213 10.2501 15.3572 10.0967 15.547C9.94332 15.7342 9.86013 15.9603 9.84713 16.2255H8.91129C8.92689 15.8069 9.05297 15.4404 9.28953 15.1259C9.52609 14.8087 9.83544 14.5618 10.2176 14.385C10.6023 14.2082 11.0247 14.1198 11.4849 14.1198C11.9788 14.1198 12.4025 14.2199 12.756 14.4201C13.1096 14.6177 13.3812 14.8789 13.571 15.2039C13.7608 15.5288 13.8556 15.8797 13.8556 16.2567C13.8556 16.7064 13.7374 17.0898 13.5008 17.407C13.2668 17.7241 12.9484 17.9438 12.5455 18.066V18.1283C13.0498 18.2115 13.4436 18.426 13.727 18.7717C14.0103 19.1149 14.152 19.5399 14.152 20.0468C14.152 20.4809 14.0337 20.8709 13.7972 21.2166C13.5632 21.5598 13.2434 21.8301 12.8379 22.0277C12.4324 22.2252 11.971 22.324 11.4537 22.324ZM19.6836 13.8547L17.11 23.4158H16.2678L18.8413 13.8547H19.6836ZM21.6697 20.5771V19.7817L25.1791 14.229H25.7562V15.4612H25.3663L22.7147 19.6569V19.7193H27.4407V20.5771H21.6697ZM25.4287 22.2148V20.3354V19.9649V14.229H26.3489V22.2148H25.4287Z"
                fill="#0E0014"
              />
              <path
                d="M35.5712 17.9985C35.5712 27.7015 27.7054 35.5673 18.0024 35.5673C8.29942 35.5673 0.433594 27.7015 0.433594 17.9985C0.433594 8.29551 8.29942 0.429688 18.0024 0.429688C27.7054 0.429688 35.5712 8.29551 35.5712 17.9985ZM3.79914 17.9985C3.79914 25.8427 10.1582 32.2018 18.0024 32.2018C25.8467 32.2018 32.2057 25.8427 32.2057 17.9985C32.2057 10.1542 25.8467 3.79523 18.0024 3.79523C10.1582 3.79523 3.79914 10.1542 3.79914 17.9985Z"
                fill="#DACCE0"
              />
              <path
                d="M17.7538 2.11461C17.7394 1.18535 18.4826 0.412001 19.409 0.486561C22.3889 0.7264 25.2683 1.72379 27.7685 3.39639C30.7363 5.38192 33.0288 8.22467 34.3403 11.5459C35.6518 14.8671 35.9202 18.5092 35.1096 21.9868C34.2991 25.4644 32.4481 28.6124 29.8033 31.0115C27.1584 33.4106 23.8454 34.9469 20.3055 35.4156C16.7656 35.8843 13.1669 35.2632 9.98882 33.635C6.81079 32.0069 4.20432 29.449 2.51666 26.3022C1.09499 23.6514 0.382199 20.6886 0.433133 17.6995C0.448968 16.7703 1.2909 16.1057 2.21436 16.2103C3.13782 16.315 3.79109 17.1498 3.79636 18.0792C3.80942 20.3859 4.38439 22.6639 5.48259 24.7116C6.84695 27.2556 8.95412 29.3235 11.5234 30.6397C14.0926 31.9559 17.0019 32.458 19.8637 32.0791C22.7255 31.7002 25.4039 30.4583 27.5421 28.5188C29.6802 26.5792 31.1766 24.0342 31.8319 21.2228C32.4872 18.4114 32.2702 15.467 31.21 12.782C30.1497 10.097 28.2964 7.79884 25.8971 6.19367C23.9658 4.90164 21.7545 4.10797 19.46 3.87076C18.5356 3.77519 17.7681 3.04386 17.7538 2.11461Z"
                fill="#360E54"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="form-content">
        {/* Summary Section */}
        <div className="summary-section">
          <div className="summary-title">SUMMARY</div>
          <div className="summary-steps">
            <div className="summary-step">
              <div className="step-indicator"></div>
              <span>Track Selection</span>
            </div>
            <div className="summary-step">
              <div className="step-indicator"></div>
              <span>Personal Information</span>
            </div>
            <div className="summary-step active">
              <div className="step-indicator active"></div>
              <span>Background</span>
            </div>
            <div className="summary-step">
              <div className="step-indicator"></div>
              <span>Motivation & Goals</span>
            </div>
          </div>
        </div>

        {/* Main Form */}
        <div className="main-form">
          <div className="form-section-header">
            <h2 className="section-title">Background</h2>
            <p className="section-subtitle">
              Tell us a bit about your background
            </p>
          </div>

          <form className="form-fields">
            <div className="form-field">
              <input
                type="text"
                name="currentPosition"
                placeholder="Current Position"
                value={formData.currentPosition}
                onChange={handleInputChange}
                style={{ width: "54.7vw" }}
              />
              <label>Current Position</label>
            </div>

            <div className="form-field">
              <input
                type="text"
                name="yearsOfExperience"
                placeholder="Years of Experience"
                value={formData.yearsOfExperience}
                onChange={handleInputChange}
                style={{ width: "54.7vw" }}
              />
              <label>Years of Experience</label>
            </div>

            <div className="form-row">
              <div className="form-field">
                <select
                  name="educationLevel"
                  value={formData.educationLevel}
                  onChange={handleInputChange}
                >
                  <option value="">Select Education Level</option>
                  <option value="Student">Student</option>
                  <option value="High School">High School</option>
                  <option value="Bachelor's">Bachelor's</option>
                  <option value="Master's">Master's</option>
                  <option value="PhD">PhD</option>
                </select>
                <label>Education Level</label>
              </div>
              <div className="form-field">
                <input
                  type="text"
                  name="fieldOfStudy"
                  placeholder="Field of Study"
                  value={formData.fieldOfStudy}
                  onChange={handleInputChange}
                />
                <label>Field of Study</label>
              </div>
            </div>

            <div className="form-field">
              <input
                type="text"
                name="currentCompany"
                placeholder="Current Company (Optional)"
                value={formData.currentCompany}
                onChange={handleInputChange}
                style={{ width: "54.7vw" }}
              />
              <label>Current Company (Optional)</label>
            </div>

            <div className="form-field">
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleInputChange}
                style={{ width: "54.7vw" }}
              />
              <label>City, Country</label>
            </div>

            <div className="form-field">
              <div className="technical-skills-container">
                <div className="skills-label">
                  <span className="skills-label-text">Technical Skills</span>
                </div>
                <select
                  className="skills-select"
                  onChange={(e) => {
                    if (
                      e.target.value &&
                      !formData.technicalSkills.includes(e.target.value)
                    ) {
                      setFormData((prev) => ({
                        ...prev,
                        technicalSkills: [
                          ...prev.technicalSkills,
                          e.target.value,
                        ],
                      }));
                    }
                    e.target.value = "";
                  }}
                >
                  <option value="">Select a skill...</option>
                  {(
                    trackSkills[selectedTrack] ||
                    trackSkills["Engineering Track"]
                  ).map((skill) => (
                    <option key={skill} value={skill}>
                      {skill}
                    </option>
                  ))}
                </select>
                {formData.technicalSkills.length > 0 && (
                  <div className="skills-tags-container">
                    {formData.technicalSkills.map((skill) => (
                      <div key={skill} className="technical-skill-tag">
                        <button
                          type="button"
                          className="remove-skill-x"
                          onClick={() => removeSkill(skill, "technicalSkills")}
                        >
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                          >
                            <path
                              d="M9 3L3 9M3 3L9 9"
                              stroke="#F4F3F5"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                        <span className="skill-name">{skill}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="form-field">
              <div className="technical-skills-container">
                <div className="skills-label">
                  <span className="skills-label-text">Tools</span>
                </div>
                <select
                  className="skills-select"
                  onChange={(e) => {
                    if (
                      e.target.value &&
                      !formData.tools.includes(e.target.value)
                    ) {
                      setFormData((prev) => ({
                        ...prev,
                        tools: [...prev.tools, e.target.value],
                      }));
                    }
                    e.target.value = "";
                  }}
                  style={{ width: "54.7vw" }}
                >
                  <option value="">Select a tool...</option>
                  {(
                    trackTools[selectedTrack] || trackTools["Engineering Track"]
                  ).map((tool) => (
                    <option key={tool} value={tool}>
                      {tool}
                    </option>
                  ))}
                </select>
                {formData.tools.length > 0 && (
                  <div className="skills-tags-container">
                    {formData.tools.map((tool) => (
                      <div key={tool} className="technical-skill-tag">
                        <button
                          type="button"
                          className="remove-skill-x"
                          onClick={() => removeSkill(tool, "tools")}
                        >
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                          >
                            <path
                              d="M9 3L3 9M3 3L9 9"
                              stroke="#F4F3F5"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                        <span className="skill-name">{tool}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="form-actions">
              <button
                type="button"
                className="previous-btn"
                onClick={handlePrevious}
              >
                Previous
              </button>
              <button
                type="button"
                className={`next-btn${!isFormValid ? " disabled" : ""}`}
                onClick={handleNext}
                disabled={!isFormValid}
                title={
                  !isFormValid
                    ? "Please fill all required fields including technical skills and tools"
                    : ""
                }
              >
                Next
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M8.33203 13.3327L11.6654 9.99935L8.33203 6.66602"
                    stroke="#F4F3F5"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Background;
