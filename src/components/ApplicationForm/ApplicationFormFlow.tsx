import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PersonalInformation from './PersonalInformation';
import TrackSelection from './TrackSelection';
import Background from './Background';
import MotivationGoals from './MotivationGoals';
import ApplicationSubmitted from './ApplicationSubmitted';

const ApplicationFormFlow: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/apply/personal-information" replace />} />
      <Route path="/personal-information" element={<PersonalInformation />} />
      <Route path="/track-selection" element={<TrackSelection />} />
      <Route path="/background" element={<Background />} />
      <Route path="/motivation-goals" element={<MotivationGoals />} />
      <Route path="/submitted" element={<ApplicationSubmitted />} />
    </Routes>
  );
};

export default ApplicationFormFlow;
