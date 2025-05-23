import React from 'react';

const BellIcon = ({ width = 28, height = 28, className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`w-${width} h-${height} ${className}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 
           .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1"
      />
    </svg>
  );
};

export default BellIcon;
