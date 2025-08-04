import React from 'react';

const SpotifyIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.19 14.33c-.16.25-.5.33-.75.16-2.19-1.34-4.95-1.63-8.28-.89-.29.06-.57-.12-.63-.41-.06-.29.12-.57.41-.63 3.63-.8 6.64-.47 8.95.98.25.17.33.5.17.75zm1.1-2.58c-.2.31-.63.41-.94.2-2.5-1.53-6.2-1.99-9.58-1.08-.35.1-.71-.1-.81-.45s.1-.71.45-.81c3.78-.99 7.89-.47 10.74 1.25.31.2.41.63.2.94zm.13-2.68c-2.93-1.75-7.74-2.02-11.08-1.11-.41.11-.83-.14-.94-.54s.14-.83.54-.94c3.78-1 8.99-.7 12.37 1.27.38.22.5.71.28.93-.22.38-.71.5-.93.28z" />
  </svg>
);

export default SpotifyIcon;
