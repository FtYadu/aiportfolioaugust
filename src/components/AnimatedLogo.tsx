'use client';
import React from 'react';
import { gsap } from 'gsap';

const AnimatedLogo = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => (
  <svg
    ref={ref}
    viewBox="0 0 100 100"
    width="100"
    height="100"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path
      id="logo-path"
      fill="url(#grad)"
      d="M 50,10 L 90,90 L 10,90 Z" // Initial shape: Triangle
    />
  </svg>
));

AnimatedLogo.displayName = "AnimatedLogo";
export default AnimatedLogo;
