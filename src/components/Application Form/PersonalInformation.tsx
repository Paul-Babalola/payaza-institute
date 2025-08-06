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
    firstName: "Payaza",
    lastName: "Institute",
    email: "payazainstitute@gmail.com",
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
      // Validate file size (2MB max)
      if (file.size > 2 * 1024 * 1024) {
        alert("File size must be less than 2MB");
        return;
      }

      // Validate file type (PDF only)
      if (file.type !== "application/pdf") {
        alert("Only PDF files are allowed");
        return;
      }

      setFormData((prev) => ({ ...prev, resume: file }));

      // Store file globally for access in other components
      (window as any).resumeFile = file;
    }
  };

  // Validation: all required fields must be filled
  const isFormValid =
    formData.firstName.trim() &&
    formData.lastName.trim() &&
    formData.email.trim() &&
    formData.phoneNumber.trim() &&
    formData.location.trim() &&
    formData.resume &&
    // Email validation
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
    // Phone number validation (at least 10 digits)
    /^\d{10,}$/.test(formData.phoneNumber.replace(/\D/g, ""));

  const handleNext = () => {
    if (isFormValid) {
      // Map field names to match API requirements
      const apiFormData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phoneNumber, // phoneNumber -> phone
        location: formData.location,
        github_url: formData.githubUrl || "null", // githubUrl -> github_url
        portfolio_url: formData.portfolioUrl || "null", // portfolioUrl -> portfolio_url
      };

      localStorage.setItem("personalInformation", JSON.stringify(apiFormData));

      // Store resume filename for display purposes
      if (formData.resume) {
        localStorage.setItem("resumeName", formData.resume.name);
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
      <div className="form-header flex items-center justify-between px-6 py-4 lg:px-8 lg:py-5">
        <div
          className="exit-section flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
          onClick={handleExit}
        >
          <svg
            className="close-icon w-5 h-5"
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
          <span className="exit-text hidden sm:inline text-sm font-medium text-gray-700">
            Exit Application
          </span>
        </div>
        {/* <div className="separator hidden sm:block w-px h-6 bg-gray-300 mx-4"></div> */}
        <div className="step-info flex md:justify-end items-center gap-4 flex-1 justify-end">
          <div className="step-details flex flex-col items-center text-center justify-end">
            <div className="step-label text-xs font-medium text-gray-500 uppercase tracking-wide">
              STEP 1/4
            </div>
            <div className="step-title text-sm font-semibold text-gray-900 mt-1">
              Personal Information
            </div>
          </div>
          <div className="step-icon flex items-center justify-center w-9 h-9">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5065 14.229V22.2148H11.5394V15.2428H11.4926L9.54299 16.5374V15.5548L11.5394 14.229H12.5065ZM18.7399 13.8547L16.1664 23.4158H15.3241L17.8977 13.8547H18.7399ZM20.7261 20.5771V19.7817L24.2355 14.229H24.8126V15.4612H24.4226L21.7711 19.6569V19.7193H26.4971V20.5771H20.7261ZM24.485 22.2148V20.3354V19.9649V14.229H25.4053V22.2148H24.485Z"
                fill="#0E0014"
              />
              <path
                d="M35.5712 17.9985C35.5712 27.7015 27.7054 35.5673 18.0024 35.5673C8.29942 35.5673 0.433594 27.7015 0.433594 17.9985C0.433594 8.29551 8.29942 0.429688 18.0024 0.429688C27.7054 0.429688 35.5712 8.29551 35.5712 17.9985ZM3.79914 17.9985C3.79914 25.8427 10.1582 32.2018 18.0024 32.2018C25.8467 32.2018 32.2057 25.8427 32.2057 17.9985C32.2057 10.1542 25.8467 3.79523 18.0024 3.79523C10.1582 3.79523 3.79914 10.1542 3.79914 17.9985Z"
                fill="#DACCE0"
              />
              <path
                d="M17.7538 2.11461C17.7394 1.18535 18.4827 0.412 19.409 0.48656C22.5259 0.737427 25.5306 1.81696 28.1051 3.62729C30.6796 5.43763 32.7119 7.89993 34.0023 10.7482C34.3859 11.5948 33.9096 12.5558 33.0302 12.8566C32.1509 13.1575 31.2031 12.6827 30.8004 11.8451C29.753 9.66613 28.162 7.78164 26.1692 6.38034C24.1764 4.97904 21.8648 4.11937 19.46 3.87076C18.5355 3.77519 17.7681 3.04386 17.7538 2.11461Z"
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
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
                <label>First Name</label>
              </div>
              <div className="form-field">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
                <label>Last Name</label>
              </div>
            </div>

            <div className="form-field">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                style={{ width: "54.7vw" }}
              />
              <label>Email Address</label>
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
                <div className="phone-input">
                  <span className="country-code">+234</span>
                  <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <div className="form-field">
              <input
                type="text"
                name="location"
                placeholder="City, Country"
                value={formData.location}
                onChange={handleInputChange}
                style={{ width: "54.7vw" }}
              />
              <label>City, Country</label>
            </div>

            <div className="form-field">
              <input
                type="url"
                name="githubUrl"
                value={formData.githubUrl}
                onChange={handleInputChange}
                placeholder="Github URL (Optional)"
                style={{ width: "54.7vw" }}
              />
              <label>Github URL (Optional)</label>
            </div>

            <div className="form-field">
              <input
                type="url"
                name="portfolioUrl"
                value={formData.portfolioUrl}
                onChange={handleInputChange}
                placeholder="Portfolio URL (Optional)"
                style={{ width: "54.7vw" }}
              />
              <label>Portfolio URL (Optional)</label>
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
                  style={{ display: "none", width: "54.7vw" }}
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
                title={
                  !isFormValid
                    ? "Please fill all required fields including resume upload"
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

export default PersonalInformation;
