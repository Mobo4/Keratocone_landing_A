import React from 'react';
import { Navigate } from 'react-router-dom';

// Default service page redirects to the first location
const OrthokeratologyIndex: React.FC = () => {
  return <Navigate to="/services/orthokeratology/university-park" replace />;
};

export default OrthokeratologyIndex;