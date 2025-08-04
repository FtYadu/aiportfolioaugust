import type { ParseCvOutput } from '@/ai/flows/cv-parsing';
import { cache } from 'react';

// This is a mock implementation of the CV parsing flow.
// In a real application, you would:
// 1. Place the `Yadu Krishnan - Multimedia Specialist -01_12_2025-3.pdf` file in the `public` directory (renamed to `cv.pdf`).
// 2. Use Node.js `fs` module to read the file as a buffer on the server.
// 3. Convert the buffer to a Base64 data URI.
// 4. Call the `parseCv` function from `@/ai/flows/cv-parsing` with the data URI.
//
// Example:
// import { promises as fs } from 'fs';
// import path from 'path';
// const filePath = path.join(process.cwd(), 'public', 'cv.pdf');
// const fileBuffer = await fs.readFile(filePath);
// const cvDataUri = `data:application/pdf;base64,${fileBuffer.toString('base64')}`;
// const parsedData = await parseCv({ cvDataUri });
//
// Since we cannot include the PDF file in this environment, we are returning hardcoded data.

export const getCvData = cache(async (): Promise<ParseCvOutput> => {
  return Promise.resolve({
    bio: "A dynamic and creative Multimedia Specialist with a passion for storytelling through visuals. My expertise spans photography, videography, and AI-driven content creation, aimed at delivering compelling narratives and enhancing brand presence.",
    skills: {
      hardSkills: [
        "Digital Photography", "Studio Lighting", "Videography (4K/HD)", "Video Editing", "Color Correction & Grading",
        "Motion Graphics", "Sound Design", "AI Art Generation", "Drone Piloting", "Live Streaming",
      ],
      softSkills: [
        "Creative Direction", "Storytelling", "Client Communication", "Project Management",
        "Problem-Solving", "Adaptability", "Team Collaboration",
      ],
      tools: [
        "Adobe Premiere Pro", "Adobe After Effects", "Adobe Photoshop", "Adobe Lightroom",
        "DaVinci Resolve", "Final Cut Pro", "Midjourney", "Stable Diffusion",
      ],
    },
    certifications: [
      "Adobe Certified Expert (ACE) - Premiere Pro",
      "Certified Professional Photographer (CPP)",
      "Part 107 Drone Pilot License"
    ],
  });
});
