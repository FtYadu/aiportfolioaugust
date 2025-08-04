import React from 'react';

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
    <path d="M16.5 6.5a4.5 4.5 0 1 0 4.5 4.5V11" />
    <path d="M12 2v14" />
    <path d="M8 10a4 4 0 1 0 4 4V2" />
  </svg>
);

export default TikTokIcon;
