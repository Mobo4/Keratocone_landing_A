import React from 'react';
import { Navigate } from 'react-router-dom';

// Default service page redirects to the first location
const MyopiaControlIndex: React.FC = () => {
  return <Navigate to="/services/myopia-control/woodbridge" replace />;
};

export default MyopiaControlIndex;