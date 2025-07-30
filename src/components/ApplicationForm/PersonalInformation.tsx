import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/ApplicationForm.css";

const PersonalInformation: React.FC = () => {
  const [formData, setFormData] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    location: string;
    githubUrl: string;
    portfolioUrl: string;
    resume: File | null;
  }>({
    firstName: "Sally",
    lastName: "Blue",
    email: "sallyblue@gmail.com",
    phoneNumber: "9029311001",
    location: "301, Jide Oki Street, Lagos State.",
    githubUrl: "",
    portfolioUrl: "",
    resume: null,
  });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, resume: file }));
    }
  };

  // Validation: all required fields must be filled
  const isFormValid =
    formData.firstName.trim() &&
    formData.lastName.trim() &&
    formData.email.trim() &&
    formData.phoneNumber.trim() &&
    formData.location.trim() &&
    formData.resume;

  const handleNext = () => {
    if (isFormValid) {
      // Save to localStorage (or context/global state)
      const { resume, ...rest } = formData;
      localStorage.setItem("personalInformation", JSON.stringify(rest));
      // Optionally save file name
      if (resume) {
        localStorage.setItem("resumeName", resume.name);
      }
      navigate("/apply/track-selection");
    }
  };

  const handleExit = () => {
    navigate("/");
  };

  return (
    <div className="application-form-container">
      {/* Progress Bar */}
      <div className="progress-bar">
        <div className="progress-bar-fill" style={{ width: "25%" }}></div>
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
            <div className="step-label">STEP 1/4</div>
            <div className="step-title">Personal Information</div>
          </div>
          <div className="step-circle">
            <span className="step-number">1/4</span>
          </div>
        </div>
      </div>

      <div className="form-content">
        {/* Summary Section */}
        <div className="summary-section">
          <div className="summary-title">SUMMARY</div>
          <div className="summary-steps">
            <div className="summary-step active">
              <div className="step-indicator active"></div>
              <span>Personal Information</span>
            </div>
            <div className="summary-step">
              <div className="step-indicator"></div>
              <span>Track Selection</span>
            </div>
            <div className="summary-step">
              <div className="step-indicator"></div>
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
            <h2 className="section-title">Personal Information</h2>
            <p className="section-subtitle">
              Ensure all information inputted is correct
            </p>
          </div>

          <form className="form-fields">
            <div className="form-row">
              <div className="form-field">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-field">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-field">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                style={{ width: "54.7vw" }}
              />
            </div>

            <div className="phone-field-container">
              <div className="country-select">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/3e134cd629397550e099c23075eba089b4092bc3?width=36"
                  alt="NG flag"
                  className="flag-icon"
                />
                <span>NG</span>
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
              <div className="phone-field">
                <label>Phone Number</label>
                <div className="phone-input">
                  <span className="country-code">+234</span>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
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

            <div className="form-field">
              <label>Github URL (Optional)</label>
              <input
                type="url"
                name="githubUrl"
                value={formData.githubUrl}
                onChange={handleInputChange}
                placeholder="https://"
                style={{ width: "54.7vw" }}
              />
            </div>

            <div className="form-field">
              <label>Portfolio URL (Optional)</label>
              <input
                type="url"
                name="portfolioUrl"
                value={formData.portfolioUrl}
                onChange={handleInputChange}
                placeholder="https://"
                style={{ width: "54.7vw" }}
              />
            </div>

            <div className="file-upload-field">
              <div className="file-upload-header">
                <div className="file-icon-section">
                  <div className="file-icon">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.1538 10.4295L9.84551 11.7377C9.51731 12.0658 9.07218 12.2502 8.60805 12.2502L4.0829 12.2499C3.61877 12.2499 3.17367 12.0654 2.8455 11.7372C2.51733 11.409 2.33298 10.9639 2.33301 10.4998L2.33343 3.49977C2.33346 3.03564 2.51786 2.59054 2.84607 2.26237C3.17427 1.9342 3.6194 1.74985 4.08353 1.74988L9.91687 1.75023C10.381 1.75026 10.8261 1.93466 11.1543 2.26287C11.4824 2.59107 11.6668 3.0362 11.6668 3.50033L11.6664 9.19213C11.6664 9.65625 11.482 10.1014 11.1538 10.4295Z"
                        stroke="#938999"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.6665 9.04199L9.62487 9.04187C9.31545 9.04185 9.01869 9.16475 8.79989 9.38353C8.58108 9.60231 8.45815 9.89905 8.45813 10.2085L8.45801 12.2501"
                        stroke="#938999"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.33317 4.37518L4.6665 4.3749"
                        stroke="#938999"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.6665 6.41653L9.33317 6.41681"
                        stroke="#938999"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.2415 8.45834L4.6665 8.45825"
                        stroke="#938999"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span>Resume</span>
                </div>
                <button
                  type="button"
                  className="upload-btn"
                  onClick={handleFileUpload}
                >
                  Upload File
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                  accept=".pdf"
                />
                {formData.resume && (
                  <span style={{ marginLeft: "1rem", color: "#4d9944" }}>
                    {(formData.resume as File).name}
                  </span>
                )}
              </div>
            </div>

            <div className="form-actions">
              <button type="button" className="cancel-btn">
                Cancel
              </button>
              <button
                type="button"
                className={`next-btn${!isFormValid ? " disabled" : ""}`}
                onClick={handleNext}
                disabled={!isFormValid}
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

export default PersonalInformation;
