import React from 'react';
import { skipToMainContent, srOnly } from '@/utils/accessibilityHelpers';

const SkipToMain = () => {
  return (
    <button
      onClick={skipToMainContent}
      className={`${srOnly} focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-eyecare-blue focus:text-white focus:rounded-md focus:shadow-lg`}
    >
      Skip to main content
    </button>
  );
};

export default SkipToMain;