import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/ApplicationForm.css';

const TrackSelection: React.FC = () => {
  const navigate = useNavigate();
  const [selectedTrack, setSelectedTrack] = useState('');
  const [error, setError] = useState<string>('');

  const handleNext = () => {
    if (!selectedTrack) {
      setError('Please select a track to continue');
      return;
    }
    navigate('/apply/background');
  };

  const handlePrevious = () => {
    navigate('/apply/personal-information');
  };

  const handleExit = () => {
    navigate('/');
  };

  const handleTrackChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTrack(e.target.value);
    setError(''); // Clear error when user selects
  };

  return (
    <div className="application-form-container">
      {/* Progress Bar */}
      <div className="progress-bar">
        <div className="progress-bar-fill" style={{ width: '50%' }}></div>
      </div>

      {/* Header */}
      <div className="form-header">
        <div className="exit-section" onClick={handleExit} style={{ cursor: 'pointer' }}>
          <svg className="close-icon" width="16" height="24" viewBox="0 0 16 24" fill="none">
            <path d="M4 15L11 8" stroke="#3E3841" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11 15L4 8" stroke="#323232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div className="separator"></div>
          <span className="exit-text">Exit Application</span>
        </div>
        <div className="step-info">
          <div className="step-details">
            <div className="step-label">STEP 2/4</div>
            <div className="step-title">Track Selection</div>
          </div>
          <div className="step-circle">
            <span className="step-number">2/4</span>
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
            <p className="section-subtitle">Select a track that interests you</p>
          </div>

          <form className="form-fields">
            <div className="track-selection-field">
              <div className={`select-field ${error ? 'error' : ''}`}>
                <label>Select Track</label>
                <div className="select-container">
                  <select
                    value={selectedTrack}
                    onChange={handleTrackChange}
                  >
                    <option value="">Select a track</option>
                    <option value="Product and Design Track">Product and Design Track</option>
                    <option value="Engineering Track">Engineering Track</option>
                    <option value="Career & AI Productivity Track">Career & AI Productivity Track</option>
                  </select>
                  <svg className="dropdown-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M8 10L12 14L16 10" stroke="#0F0E10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                {error && <div className="error-message">{error}</div>}
              </div>
              <p className="track-description">
                {selectedTrack === 'Product and Design Track' && 'Design fintech products with AI research, compliance-first UX, and data-driven strategy'}
                {selectedTrack === 'Engineering Track' && 'Build scalable fintech solutions with modern technologies and best practices'}
                {selectedTrack === 'Career & AI Productivity Track' && 'Leverage AI tools and strategies to accelerate your fintech career growth'}
              </p>
            </div>

            <div className="form-actions">
              <button type="button" className="previous-btn" onClick={handlePrevious}>Previous</button>
              <button type="button" className="next-btn" onClick={handleNext}>
                Next
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M8.33203 13.3327L11.6654 9.99935L8.33203 6.66602" stroke="#F4F3F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
