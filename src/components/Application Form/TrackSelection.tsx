import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/ApplicationForm.css";

const TrackSelection: React.FC = () => {
  const navigate = useNavigate();
  const [selectedTrack, setSelectedTrack] = useState("");
  const [error, setError] = useState<string>("");

  const handleNext = () => {
    if (!selectedTrack || selectedTrack.trim() === "") {
      setError("Please select a track to continue");
      return;
    }
    // Save selected track to localStorage
    localStorage.setItem("selectedTrack", selectedTrack);
    navigate("/apply/background");
  };

  const handlePrevious = () => {
    navigate("/apply/personal-information");
  };

  const handleExit = () => {
    navigate("/");
  };

  const handleTrackChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTrack(e.target.value);
    setError(""); // Clear error when user selects
  };

  return (
    <div className="application-form-container">
      {/* Progress Bar */}
      <div className="progress-bar">
        <div className="progress-bar-fill" style={{ width: "50%" }}></div>
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
          <span className="exit-text hidden sm:inline">Exit Application</span>
        </div>
        <div className="separator hidden sm:block"></div>
        <div className="step-info md:justify-end">
          <div className="step-details ">
            <div className="step-label">STEP 2/4</div>
            <div className="step-title">Track Selection</div>
          </div>
          <div className="step-icon">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.92689 22.2148V21.513L11.5628 18.6275C11.8722 18.2895 12.1269 17.9958 12.3271 17.7462C12.5273 17.4941 12.6754 17.2575 12.7716 17.0365C12.8704 16.813 12.9198 16.579 12.9198 16.3347C12.9198 16.0539 12.8522 15.8108 12.717 15.6055C12.5845 15.4001 12.4025 15.2415 12.1711 15.1298C11.9398 15.018 11.6798 14.9621 11.3913 14.9621C11.0845 14.9621 10.8168 15.0258 10.588 15.1532C10.3618 15.2779 10.1864 15.4534 10.0616 15.6796C9.93942 15.9057 9.87833 16.1709 9.87833 16.475H8.95809C8.95809 16.0071 9.06597 15.5964 9.28173 15.2428C9.49749 14.8893 9.79124 14.6138 10.163 14.4162C10.5373 14.2186 10.9571 14.1198 11.4225 14.1198C11.8904 14.1198 12.305 14.2186 12.6663 14.4162C13.0277 14.6138 13.311 14.8802 13.5164 15.2156C13.7218 15.5509 13.8244 15.9239 13.8244 16.3347C13.8244 16.6284 13.7712 16.9157 13.6646 17.1964C13.5606 17.4746 13.3786 17.7852 13.1187 18.1283C12.8613 18.4689 12.5039 18.8848 12.0464 19.3761L10.2527 21.2946V21.357H13.9648V22.2148H8.92689ZM19.512 13.8547L16.9384 23.4158H16.0962L18.6698 13.8547H19.512ZM21.4981 20.5771V19.7817L25.0075 14.229H25.5846V15.4612H25.1947L22.5431 19.6569V19.7193H27.2691V20.5771H21.4981ZM25.2571 22.2148V20.3354V19.9649V14.229H26.1773V22.2148H25.2571Z"
                fill="#0E0014"
              />
              <path
                d="M35.5712 17.9985C35.5712 27.7015 27.7054 35.5673 18.0024 35.5673C8.29942 35.5673 0.433594 27.7015 0.433594 17.9985C0.433594 8.29551 8.29942 0.429688 18.0024 0.429688C27.7054 0.429688 35.5712 8.29551 35.5712 17.9985ZM3.79914 17.9985C3.79914 25.8427 10.1582 32.2018 18.0024 32.2018C25.8467 32.2018 32.2057 25.8427 32.2057 17.9985C32.2057 10.1542 25.8467 3.79523 18.0024 3.79523C10.1582 3.79523 3.79914 10.1542 3.79914 17.9985Z"
                fill="#DACCE0"
              />
              <path
                d="M17.7538 2.11461C17.7394 1.18535 18.4826 0.412007 19.409 0.486573C21.2353 0.633572 23.0308 1.06564 24.7296 1.77013C26.9476 2.68995 28.9535 4.05467 30.6234 5.78001C32.2934 7.50534 33.5919 9.55469 34.4389 11.8015C35.2859 14.0483 35.6633 16.4449 35.5479 18.8433C35.4325 21.2416 34.8267 23.5909 33.7678 25.746C32.709 27.9011 31.2197 29.8163 29.3918 31.3733C27.5638 32.9303 25.4362 34.0961 23.1401 34.7986C21.3815 35.3368 19.5528 35.5944 17.7209 35.5654C16.7916 35.5506 16.1261 34.7095 16.2296 33.7859C16.3331 32.8623 17.1672 32.208 18.0966 32.2017C19.4695 32.1923 20.8368 31.9839 22.1553 31.5804C24.0116 31.0124 25.7316 30.0699 27.2094 28.8112C28.6871 27.5525 29.8912 26.0042 30.7472 24.2619C31.6032 22.5196 32.093 20.6204 32.1863 18.6815C32.2796 16.7425 31.9744 14.8051 31.2897 12.9887C30.605 11.1723 29.5552 9.5155 28.2051 8.12067C26.8551 6.72584 25.2334 5.62256 23.4403 4.87894C22.1666 4.35073 20.8256 4.01196 19.46 3.87077C18.5355 3.7752 17.7681 3.04386 17.7538 2.11461Z"
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
              <span>Personal Information</span>
            </div>
            <div className="summary-step active">
              <div className="step-indicator active"></div>
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
            <h2 className="section-title">Track Selection</h2>
            <p className="section-subtitle">
              Select a track that interests you
            </p>
          </div>

          <form className="form-fields">
            <div className="form-field" style={{ width: "54.7vw" }}>
              <select
                value={selectedTrack}
                onChange={handleTrackChange}
                className={error ? "error" : ""}
              >
                <option value="">Select a track</option>
                <option value="Product and Design Track">
                  Product and Design Track
                </option>
                <option value="Engineering Track">Engineering Track</option>
                <option value="Career & AI Productivity Track">
                  Career & AI Productivity Track
                </option>
              </select>
              {error && <div className="error-message">{error}</div>}
            </div>

            {selectedTrack && (
              <div className="track-description">
                {selectedTrack === "Product and Design Track" &&
                  "Design fintech products with AI research, compliance-first UX, and data-driven strategy"}
                {selectedTrack === "Engineering Track" &&
                  "Build scalable fintech solutions with modern technologies and best practices"}
                {selectedTrack === "Career & AI Productivity Track" &&
                  "Leverage AI tools and strategies to accelerate your fintech career growth"}
              </div>
            )}

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
                className={`next-btn${!selectedTrack ? " disabled" : ""}`}
                onClick={handleNext}
                disabled={!selectedTrack}
                title={
                  !selectedTrack ? "Please select a track to continue" : ""
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

export default TrackSelection;
