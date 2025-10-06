
import React, { useContext, ReactNode } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

// Accessible visually hidden text utility
const VisuallyHidden = ({ children }: { children: ReactNode }) => (
  <span className="sr-only">{children}</span>
);

export default function LoadingScreen() {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.theme || 'light';

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-colors duration-300 
        ${theme === 'dark' 
          ? 'bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900' 
          : 'bg-gradient-to-br from-white via-slate-100 to-blue-50'}
      `}
      aria-busy="true"
      aria-live="polite"
      role="status"
    >
      <div className="flex flex-col items-center gap-6">
        {/* Spinner Animation */}
        <span className="relative flex h-16 w-16">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-40"></span>
          <span className={`relative inline-flex rounded-full h-16 w-16 items-center justify-center 
            ${theme === 'dark' ? 'bg-purple-700' : 'bg-blue-500'}`}
          >
            <svg className="w-8 h-8 text-white animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
            </svg>
          </span>
        </span>
        {/* Loading Text */}
        <span className={`text-lg font-semibold tracking-wide ${theme === 'dark' ? 'text-white' : 'text-blue-900'}`}>
          Quiz Generation in progress...
        </span>
        <VisuallyHidden>Loading, please wait</VisuallyHidden>
      </div>
    </div>
  );
}
