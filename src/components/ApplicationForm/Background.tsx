import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/ApplicationForm.css";

const Background: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    currentPosition: "",
    yearsOfExperience: "",
    educationLevel: "",
    fieldOfStudy: "",
    currentCompany: "",
    location: "",
    technicalSkills: [] as string[],
    tools: [] as string[],
  });

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
    navigate("/apply/motivation-goals");
  };

  const handlePrevious = () => {
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
          <div className="separator"></div>
          <span className="exit-text">Exit Application</span>
        </div>
        <div className="step-info">
          <div className="step-details">
            <div className="step-label">STEP 3/4</div>
            <div className="step-title">Background</div>
          </div>
          <div className="step-circle">
            <span className="step-number">3/4</span>
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
              <label>Current Position</label>
              <input
                type="text"
                name="currentPosition"
                value={formData.currentPosition}
                onChange={handleInputChange}
                style={{ width: "54.7vw" }}
              />
            </div>

            <div className="form-field">
              <label>Years of Experience</label>
              <input
                type="text"
                name="yearsOfExperience"
                value={formData.yearsOfExperience}
                onChange={handleInputChange}
                style={{ width: "54.7vw" }}
              />
            </div>

            <div className="form-row">
              <div className="form-field">
                <label>Education Level</label>
                <div className="select-container">
                  <select
                    name="educationLevel"
                    value={formData.educationLevel}
                    onChange={handleInputChange}
                  >
                    <option value="Student">Student</option>
                    <option value="High School">High School</option>
                    <option value="Bachelor's">Bachelor's</option>
                    <option value="Master's">Master's</option>
                    <option value="PhD">PhD</option>
                  </select>
                  <svg
                    className="dropdown-arrow"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M8 10L12 14L16 10"
                      stroke="#0F0E10"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="form-field">
                <label>Field of Study</label>
                <input
                  type="text"
                  name="fieldOfStudy"
                  value={formData.fieldOfStudy}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-field">
              <label>Current Company (Optional)</label>
              <input
                type="text"
                name="currentCompany"
                value={formData.currentCompany}
                onChange={handleInputChange}
                style={{ width: "54.7vw" }}
              />
            </div>

            <div className="form-field">
              <label>Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                style={{ width: "54.7vw" }}
              />
            </div>

            <div className="skills-field">
              <label>Technical Skills</label>
              <div className="skills-container">
                <div className="skills-list">
                  {formData.technicalSkills.map((skill, index) => (
                    <div key={index} className="skill-tag">
                      <button
                        type="button"
                        className="remove-skill"
                        onClick={() => removeSkill(skill, "technicalSkills")}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <path
                            d="M8.18 3.82L4.82 7.18"
                            stroke="#F4F3F5"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8.18 7.18L4.82 3.82"
                            stroke="#F4F3F5"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
                <svg
                  className="dropdown-arrow skills-dropdown"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M8 10L12 14L16 10"
                    stroke="#0F0E10"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <div className="skills-field">
              <label>Tools</label>
              <div className="skills-container">
                <div className="skills-list">
                  {formData.tools.map((tool, index) => (
                    <div key={index} className="skill-tag">
                      <button
                        type="button"
                        className="remove-skill"
                        onClick={() => removeSkill(tool, "tools")}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <path
                            d="M8.18 3.82L4.82 7.18"
                            stroke="#F4F3F5"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8.18 7.18L4.82 3.82"
                            stroke="#F4F3F5"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                      <span>{tool}</span>
                    </div>
                  ))}
                </div>
                <svg
                  className="dropdown-arrow skills-dropdown"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M8 10L12 14L16 10"
                    stroke="#0F0E10"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
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
              <button type="button" className="next-btn" onClick={handleNext}>
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
