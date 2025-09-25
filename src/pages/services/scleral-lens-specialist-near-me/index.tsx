import React from 'react';
import { Navigate } from 'react-router-dom';

// Default service page redirects to the first location
const ScleralLensSpecialistNearMeIndex: React.FC = () => {
  return <Navigate to="/services/scleral-lens-specialist-near-me/woodbridge" replace />;
};

export default ScleralLensSpecialistNearMeIndex;