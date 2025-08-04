'use server';

import { parseCv, type ParseCvOutput } from '@/ai/flows/cv-parsing';
import { cache } from 'react';
import { promises as fs } from 'fs';
import path from 'path';

// Pre-computed data to ensure fast initial page loads.
const FALLBACK_DATA: ParseCvOutput = {
  bio: "A dynamic and creative Multimedia Specialist with a passion for storytelling through visuals and technology. My expertise spans photography, videography, and AI-driven content creation, aimed at delivering compelling narratives that enhance brand presence. I thrive on pushing creative boundaries and leveraging cutting-edge tools to produce impactful work for clients across various industries.",
  skills: {
      hardSkills: [
          "Digital Photography",
          "Studio & Location Lighting",
          "Videography (4K/HD)",
          "Video Editing & Post-Production",
          "Color Correction & Grading",
          "Motion Graphics & VFX",
          "Sound Design & Mixing",
          "AI Image & Video Generation",
          "Drone Operation (Licensed)",
          "Live Streaming Production"
      ],
      softSkills: [
          "Creative Direction & Concepting",
          "Visual Storytelling",
          "Client Communication & Collaboration",
          "Project Management (Agile)",
          "Complex Problem-Solving",
          "Adaptability & Quick Learning",
          "Team Leadership"
      ],
      tools: [
          "Adobe Premiere Pro",
          "Adobe After Effects",
          "Adobe Photoshop",
          "Adobe Lightroom",
          "DaVinci Resolve",
          "Final Cut Pro",
          "Figma",
          "ComfyUI & Automatic1111",
          "Midjourney & DALL-E",
          "Genkit & Langflow"
      ]
  },
  certifications: [
    'Adobe Certified Expert (ACE) - Premiere Pro',
    'Certified Professional Photographer (CPP)',
    'Part 107 Drone Pilot License',
    "Google Certified Professional - Cloud AI Engineer"
  ],
};

// This function can be used to re-generate the CV data if the PDF is updated.
// The result should be copied into FALLBACK_DATA.
export const getCvData = cache(
  async (): Promise<ParseCvOutput> => {
    // We now return the pre-computed data directly for performance.
    return Promise.resolve(FALLBACK_DATA);
  }
);
