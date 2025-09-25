import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n';  // Import i18n configuration
import SecurityHeaders from './utils/securityHeaders';
import App from './App';
import './index.css';
import './App.css';

// Initialize security headers - TEMPORARILY DISABLED FOR TESTING
// SecurityHeaders.addSecurityHeaders();
// SecurityHeaders.enforceHTTPS();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>,
);