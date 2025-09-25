import React from 'react';
import { Navigate } from 'react-router-dom';

// Default service page redirects to the first location
const HeadacheandEyeFatigueIndex: React.FC = () => {
  return <Navigate to="/services/headache-eye-fatigue/fashion-island" replace />;
};

export default HeadacheandEyeFatigueIndex;