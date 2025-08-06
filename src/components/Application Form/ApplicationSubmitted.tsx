import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/ApplicationForm.css";

const ApplicationSubmitted: React.FC = () => {
  const navigate = useNavigate();

  const handleShareApp = async () => {
    const appUrl = window.location.origin + "/apply/personal-information";

    if (navigator.share) {
      try {
        await navigator.share({
          title: "Payaza Institute Application",
          text: "Join Payaza Institute and start your tech career journey!",
          url: appUrl,
        });
      } catch (error) {
        console.log("Error sharing:", error);
        copyToClipboard(appUrl);
      }
    } else {
      copyToClipboard(appUrl);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Application link copied to clipboard!");
      })
      .catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        alert("Application link copied to clipboard!");
      });
  };

  const handleReturnToWebsite = () => {
    navigate("/");
  };

  const handleExit = () => {
    navigate("/");
  };
  return (
    <div className="application-form-container submission-page">
      {/* Progress Bar */}
      <div className="progress-bar">
        <div className="progress-bar-fill" style={{ width: "100%" }}></div>
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
            width="17"
            height="24"
            viewBox="0 0 17 24"
            fill="none"
          >
            <path
              d="M4.5 15L11.5 8"
              stroke="#3E3841"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.5 15L4.5 8"
              stroke="#323232"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="separator"></div>
          <span className="exit-text">Exit Application</span>
        </div>
      </div>

      <br />
      <br />

      <div className="submission-content">
        {/* Success Message */}
        <div className="success-message">
          <div className="success-header">
            <h2>Application Submitted!</h2>
            <div className="star-icon">
              <svg width="23" height="27" viewBox="0 0 23 27" fill="none">
                <path
                  d="M11.5 1.09961C11.7073 1.09961 11.8802 1.25837 11.8984 1.46484L12.7598 11.3154L21.7236 7.1377C21.9114 7.05026 22.1345 7.12051 22.2383 7.2998C22.342 7.47942 22.292 7.70916 22.1221 7.82812L14.0215 13.5L22.1221 19.1719C22.292 19.2908 22.342 19.5206 22.2383 19.7002C22.1345 19.8795 21.9114 19.9497 21.7236 19.8623L12.7598 15.6836L11.8984 25.5352C11.8802 25.7416 11.7073 25.9004 11.5 25.9004C11.2927 25.9004 11.1198 25.7416 11.1016 25.5352L10.2393 15.6836L1.27637 19.8623C1.08856 19.9497 0.865462 19.8795 0.761719 19.7002C0.65802 19.5206 0.708044 19.2908 0.87793 19.1719L8.97754 13.5L0.87793 7.82812C0.708044 7.70916 0.65802 7.47942 0.761719 7.2998C0.865462 7.12051 1.08856 7.05026 1.27637 7.1377L10.2393 11.3154L11.1016 1.46484L11.1152 1.38965C11.1634 1.22111 11.3187 1.09961 11.5 1.09961Z"
                  fill="#80FF72"
                  stroke="#80FF72"
                  strokeWidth="0.8"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="success-divider"></div>
          <p className="success-text">
            Thank you for your interest in joining Payaza Institute. We are
            excited to review your application. Check your email{" "}
            <span className="email-highlight">s****@gmail.com</span> for
            important updates
          </p>
        </div>

        {/* Next Steps */}
        <div className="next-steps-section">
          <h3 className="next-steps-title">WHAT ARE THE NEXT STEPS?</h3>

          <div className="steps-list">
            <div className="step-item">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Application Review</h4>
                <p>
                  Our team will review your application within 3-5 business
                  days.
                </p>
              </div>
            </div>

            <div className="step-item">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Technical Assessment</h4>
                <p>
                  If selected, you will receive a personalized technical
                  assessment via email
                </p>
              </div>
            </div>

            <div className="step-item">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Interview & Onboarding</h4>
                <p>
                  Final Interview and program onboarding for successful
                  candidates
                </p>
              </div>
            </div>
          </div>

          <button className="submit-another-btn" onClick={handleShareApp}>
            Share Application Link
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M12 6C13.1046 6 14 5.10457 14 4C14 2.89543 13.1046 2 12 2C10.8954 2 10 2.89543 10 4C10 4.28862 10.0587 4.56479 10.1659 4.82142L7.46482 6.46482C7.02206 6.17639 6.43744 6 5.8 6C4.80589 6 4 6.80589 4 7.8C4 8.79411 4.80589 9.6 5.8 9.6C6.43744 9.6 7.02206 9.42361 7.46482 9.13518L10.1659 10.7786C10.0587 11.0352 10 11.3114 10 11.6C10 12.7046 10.8954 13.6 12 13.6C13.1046 13.6 14 12.7046 14 11.6C14 10.4954 13.1046 9.6 12 9.6C11.3626 9.6 10.7779 9.77639 10.3352 10.0648L7.63408 8.42142C7.74133 8.16479 7.8 7.88862 7.8 7.6C7.8 7.31138 7.74133 7.03521 7.63408 6.77858L10.3352 5.13518C10.7779 5.42361 11.3626 5.6 12 5.6C12.3314 5.6 12.6485 5.55268 12.9459 5.46482L12.9459 5.46482Z"
                stroke="#F4F3F5"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Return Link */}
        <div
          className="return-link"
          onClick={handleReturnToWebsite}
          style={{ cursor: "pointer" }}
        >
          <span>Return to Payaza Institute Website</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M10 8L14 12L10 16"
              stroke="#5A515F"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ApplicationSubmitted;
