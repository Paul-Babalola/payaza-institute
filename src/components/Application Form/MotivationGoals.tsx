import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/ApplicationForm.css";

interface MotivationErrors {
  motivation?: string;
  careerGoals?: string;
  fintechInterest?: string;
}

const MotivationGoals: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    motivation: "",
    careerGoals: "",
    fintechInterest: "",
  });
  const [errors, setErrors] = useState<MotivationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (_: string, value: string): string | undefined => {
    if (!value.trim()) {
      return `This field is required`;
    }
    if (value.trim().length < 10) {
      return `Please provide at least 10 characters`;
    }
    if (value.length > 500) {
      return `Please keep your response under 500 characters`;
    }
    return undefined;
  };

  const isFormValid = (): boolean => {
    return Object.values(formData).every((value) => {
      const trimmedValue = value.trim();
      return trimmedValue.length >= 10 && trimmedValue.length <= 500;
    });
  };

  const validateForm = (): boolean => {
    const newErrors: MotivationErrors = {};

    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value);
      if (error) {
        newErrors[key as keyof MotivationErrors] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for this field when user starts typing
    if (errors[name as keyof MotivationErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    // Save current form data first
    localStorage.setItem(
      "motivation",
      JSON.stringify({
        motivation_text: formData.motivation,
        career_goals: formData.careerGoals,
        why_fintech: formData.fintechInterest,
      })
    );

    setIsSubmitting(true);

    try {
      // Safe localStorage parsing with better error handling
      const safeParseLocalStorage = (key: string, fallback = {}) => {
        try {
          const item = localStorage.getItem(key);
          if (!item || item === "undefined" || item === "null") {
            return fallback;
          }
          return JSON.parse(item);
        } catch (error) {
          console.warn(`Failed to parse localStorage item "${key}":`, error);
          return fallback;
        }
      };

      const personalInfo = safeParseLocalStorage("personalInformation", {});
      const trackData = safeParseLocalStorage("trackData", {});
      const background = safeParseLocalStorage("background", {});
      const motivation = safeParseLocalStorage("motivation", {});

      const resumeFile = (window as any).resumeFile;

      if (!resumeFile) {
        alert(
          "Resume file is missing. Please go back and re-upload your resume."
        );
        setIsSubmitting(false);
        return;
      }

      const apiFormData = new FormData();

      // Personal Information - with null checks
      apiFormData.append("email", personalInfo.email || "");
      apiFormData.append("firstname", personalInfo.firstName || "");
      apiFormData.append("lastname", personalInfo.lastName || "");
      apiFormData.append("phone", personalInfo.phone || "");
      apiFormData.append("location", personalInfo.location || "");
      // apiFormData.append("github_url", personalInfo?.github_url || "");
      // apiFormData.append("portfolio_url", personalInfo?.portfolio_url || "");

      // Track Selection
      apiFormData.append("selected_track", trackData.selected_track || "");

      // Background Information
      apiFormData.append("current_position", background.current_position || "");
      apiFormData.append(
        "years_of_experience",
        (background.years_of_experience || 0).toString()
      );
      apiFormData.append("education_level", background.education_level || "");
      // apiFormData.append("current_company", background?.current_company || "");
      apiFormData.append("field_of_study", background.field_of_study || "");

      // Arrays - ensure they're valid arrays before stringifying
      const technicalSkills = Array.isArray(background.technical_skills)
        ? background.technical_skills
        : [];
      apiFormData.append("technical_skills", JSON.stringify(technicalSkills));

      const tools = Array.isArray(background.tools) ? background.tools : [];
      apiFormData.append("tools", JSON.stringify(tools));

      // Motivation & Goals
      apiFormData.append("motivation_text", motivation.motivation_text || "");
      apiFormData.append("career_goals", motivation.career_goals || "");
      apiFormData.append("why_fintech", motivation.why_fintech || "");

      // Resume file
      apiFormData.append("resume", resumeFile);

      // Debug: Log what we're sending
      console.log("Sending form data:");
      for (let pair of apiFormData.entries()) {
        console.log(pair[0] + ": " + pair[1]);
      }

      // console.log("Log data:", apiF
      // ormData);
      // Submit to API

      // const payload: { [key: string]: any } = {
      //   email: "chibuikeuko@gmail.com",
      //   firstname: "Chibuike",
      //   lastname: "Uko",
      //   phone: "07064726898",
      //   location: "Lagos",
      //   // linkedin_url: "https://linkedin/chibuike",
      //   github_url: "https://www.github.com/malachi43",
      //   selected_track: "engineering",
      //   current_position: "backend engineering",
      //   years_of_experience: 2,
      //   education_level: "Bachelor in Engineering",
      //   current_company: "Payaza",
      //   motivation_text: "If you can think it you can do it",
      //   career_goals: "be one the best in my field",
      //   why_fintech: "To learn financial discipline",
      //   field_of_study: "Electronic and Computer Engineering",
      //   programming_languages: ["javascript", "java"],
      //   technical_skills: ["critical thinkking"],
      //   tools: ["git", "github"],
      // };

      const response = await fetch(
        "https://institute.dev.payaza.africa/applications",
        {
          method: "POST",
          body: apiFormData,
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Application submitted successfully:", result);

        // Clear localStorage
        localStorage.removeItem("personalInformation");
        localStorage.removeItem("trackSelection");
        localStorage.removeItem("trackData");
        localStorage.removeItem("background");
        localStorage.removeItem("motivation");
        localStorage.removeItem("resumeName");
        delete (window as any).resumeFile;

        navigate("/apply/submitted");
      } else {
        const errorData = await response.json();
        console.error("Submission failed:", errorData);
        alert(`Submission failed: ${errorData.message || "Please try again"}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePrevious = () => {
    navigate("/apply/background");
  };

  const handleExit = () => {
    navigate("/");
  };

  return (
    <div className="application-form-container">
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
          <div className="step-details">
            <div className="step-label">STEP 4/4</div>
            <div className="step-title">Motivation & Goals</div>
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
                d="M8.54135 20.5771V19.7817L12.0507 14.229H12.6278V15.4612H12.2379L9.58637 19.6569V19.7193H14.3124V20.5771H8.54135ZM12.3003 22.2148V20.3354V19.9649V14.229H13.2205V22.2148H12.3003ZM19.7104 13.8547L17.1368 23.4158H16.2946L18.8681 13.8547H19.7104ZM21.6965 20.5771V19.7817L25.2059 14.229H25.783V15.4612H25.3931L22.7415 19.6569V19.7193H27.4675V20.5771H21.6965ZM25.4555 22.2148V20.3354V19.9649V14.229H26.3757V22.2148H25.4555Z"
                fill="#0E0014"
              />
              <path
                d="M16.8461 35.5297C7.16409 34.8927 -0.168439 26.5275 0.468492 16.8455C1.10542 7.16342 9.47062 -0.169103 19.1527 0.467828C28.8347 1.10476 36.1673 9.46995 35.5303 19.152C34.8934 28.8341 26.5282 36.1666 16.8461 35.5297ZM18.9318 3.82611C11.1044 3.31119 4.34169 9.23907 3.82677 17.0664C3.31186 24.8937 9.23974 31.6565 17.0671 32.1714C24.8944 32.6863 31.6571 26.7584 32.172 18.9311C32.687 11.1038 26.7591 4.34103 18.9318 3.82611Z"
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
            <div className="summary-step">
              <div className="step-indicator"></div>
              <span>Background</span>
            </div>
            <div className="summary-step active">
              <div className="step-indicator active"></div>
              <span>Motivation & Goals</span>
            </div>
          </div>
        </div>

        {/* Main Form */}
        <div className="main-form">
          <div className="form-section-header">
            <h2 className="section-title text-left">Motivation & Goals</h2>
            <p className="section-subtitle">
              Tell us a bit about your motivation and goals (250 words max)
            </p>
          </div>

          <form className="form-fields">
            <div
              className={`textarea-field ${errors.motivation ? "error" : ""}`}
            >
              <textarea
                name="motivation"
                value={formData.motivation}
                onChange={handleTextareaChange}
                rows={5}
                placeholder="Why do you want to join Payaza Institute?"
              />
              {errors.motivation && (
                <div className="error-message">{errors.motivation}</div>
              )}
              <div className="character-count">
                {formData.motivation.length}/500
              </div>
            </div>

            <div
              className={`textarea-field ${errors.careerGoals ? "error" : ""}`}
            >
              <textarea
                name="careerGoals"
                value={formData.careerGoals}
                onChange={handleTextareaChange}
                rows={5}
                placeholder="What are your career goals?"
              />
              {errors.careerGoals && (
                <div className="error-message">{errors.careerGoals}</div>
              )}
              <div className="character-count">
                {formData.careerGoals.length}/500
              </div>
            </div>

            <div
              className={`textarea-field ${
                errors.fintechInterest ? "error" : ""
              }`}
            >
              <textarea
                name="fintechInterest"
                value={formData.fintechInterest}
                onChange={handleTextareaChange}
                rows={5}
                placeholder="Why are you interested in Fintech?"
              />
              {errors.fintechInterest && (
                <div className="error-message">{errors.fintechInterest}</div>
              )}
              <div className="character-count">
                {formData.fintechInterest.length}/500
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
                className={`submit-btn ${
                  isSubmitting || !isFormValid() ? "disabled" : ""
                }`}
                onClick={handleSubmit}
                disabled={isSubmitting || !isFormValid()}
                title="Please ensure all fields have at least 50 characters"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
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

export default MotivationGoals;
