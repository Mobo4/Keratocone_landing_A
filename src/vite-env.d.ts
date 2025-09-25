/// <reference types="vite/client" />

// Extend Window interface for security utilities
interface Window {
  __CSP_NONCE__?: string;
}
