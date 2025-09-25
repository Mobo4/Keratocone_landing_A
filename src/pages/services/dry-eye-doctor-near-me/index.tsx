import React from 'react';
import { Navigate } from 'react-router-dom';

// Default service page redirects to the first location
const DryEyeDoctorNearMeIndex: React.FC = () => {
  return <Navigate to="/services/dry-eye-doctor-near-me/woodbridge" replace />;
};

export default DryEyeDoctorNearMeIndex;