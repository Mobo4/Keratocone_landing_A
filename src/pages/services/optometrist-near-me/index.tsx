import React from 'react';
import { Navigate } from 'react-router-dom';

// Default service page redirects to the first location
const OptometristNearMeIndex: React.FC = () => {
  return <Navigate to="/services/optometrist-near-me/woodbridge" replace />;
};

export default OptometristNearMeIndex;