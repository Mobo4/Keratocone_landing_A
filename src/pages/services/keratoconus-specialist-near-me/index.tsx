import React from 'react';
import { Navigate } from 'react-router-dom';

// Default service page redirects to the first location
const KeratoconusSpecialistNearMeIndex: React.FC = () => {
  return <Navigate to="/services/keratoconus-specialist-near-me/woodbridge" replace />;
};

export default KeratoconusSpecialistNearMeIndex;