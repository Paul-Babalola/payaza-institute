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

  const validateField = (name: string, value: string): string | undefined => {
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

  const handleSubmit = () => {
    setIsSubmitting(true);
    if (validateForm()) {
      navigate("/apply/submitted");
    }
    setIsSubmitting(false);
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
          <div className="separator"></div>
          <span className="exit-text">Exit Application</span>
        </div>
        <div className="step-info">
          <div className="step-details">
            <div className="step-label">STEP 4/4</div>
            <div className="step-title">Motivation & Goals</div>
          </div>
          <div className="step-circle">
            <span className="step-number">4/4</span>
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
            <h2 className="section-title">Motivation & Goals</h2>
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
                className={`submit-btn ${isSubmitting ? "disabled" : ""}`}
                onClick={handleSubmit}
                disabled={isSubmitting}
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
