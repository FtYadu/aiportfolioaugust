import React from 'react';

const ThreadsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.5 13.75c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5c0 .38-.05.75-.14 1.1h-7.72c.31 1.7 1.84 3 3.64 3zm4.5-4.5c0-2.5-2-4.5-4.5-4.5V4c3.86 0 7 3.14 7 7s-3.14 7-7 7v-2.25c2.5 0 4.5-2 4.5-4.75z" />
  </svg>
);

export default ThreadsIcon;
