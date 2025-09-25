// Accessibility helper utilities

// Generate unique IDs for form fields
export const generateFieldId = (prefix: string, fieldName: string): string => {
  return `${prefix}-${fieldName}-${Math.random().toString(36).substr(2, 9)}`;
};

// Common ARIA labels for icons
export const iconAriaLabels = {
  menu: 'Open navigation menu',
  close: 'Close navigation menu',
  chevronDown: 'Show submenu',
  phone: 'Call office',
  email: 'Send email',
  location: 'View location',
  search: 'Search',
  filter: 'Filter options',
  calendar: 'Schedule appointment',
  eye: 'Eyecare Center logo',
  facebook: 'Visit our Facebook page',
  instagram: 'Visit our Instagram page',
  twitter: 'Visit our Twitter page',
  linkedin: 'Visit our LinkedIn page',
  youtube: 'Visit our YouTube channel',
  arrowUp: 'Scroll to top',
  arrowLeft: 'Previous',
  arrowRight: 'Next',
  info: 'More information',
  warning: 'Warning',
  success: 'Success',
  error: 'Error',
  loading: 'Loading',
  external: 'Opens in new window',
};

// Announce content changes to screen readers
export const announceToScreenReader = (message: string, priority: 'polite' | 'assertive' = 'polite'): void => {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.setAttribute('class', 'sr-only');
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  // Remove after announcement
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};

// Skip navigation link helper
export const skipToMainContent = (): void => {
  const mainContent = document.getElementById('main-content');
  if (mainContent) {
    mainContent.focus();
    mainContent.scrollIntoView();
  }
};

// Focus trap for modals
export const createFocusTrap = (container: HTMLElement): (() => void) => {
  const focusableElements = container.querySelectorAll(
    'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
  );
  const firstFocusable = focusableElements[0] as HTMLElement;
  const lastFocusable = focusableElements[focusableElements.length - 1] as HTMLElement;

  const trapFocus = (e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          lastFocusable.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          firstFocusable.focus();
          e.preventDefault();
        }
      }
    }
  };

  container.addEventListener('keydown', trapFocus);
  
  // Return cleanup function
  return () => {
    container.removeEventListener('keydown', trapFocus);
  };
};

// Keyboard navigation helpers
export const handleArrowKeyNavigation = (
  e: KeyboardEvent,
  currentIndex: number,
  totalItems: number,
  onNavigate: (index: number) => void
): void => {
  let newIndex = currentIndex;

  switch (e.key) {
    case 'ArrowUp':
    case 'ArrowLeft':
      e.preventDefault();
      newIndex = currentIndex > 0 ? currentIndex - 1 : totalItems - 1;
      break;
    case 'ArrowDown':
    case 'ArrowRight':
      e.preventDefault();
      newIndex = currentIndex < totalItems - 1 ? currentIndex + 1 : 0;
      break;
    case 'Home':
      e.preventDefault();
      newIndex = 0;
      break;
    case 'End':
      e.preventDefault();
      newIndex = totalItems - 1;
      break;
  }

  if (newIndex !== currentIndex) {
    onNavigate(newIndex);
  }
};

// Screen reader only text component helper
export const srOnly = 'absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0';