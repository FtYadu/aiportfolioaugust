import { parseCv, type ParseCvOutput } from '@/ai/flows/cv-parsing';
import { cache } from 'react';
import { promises as fs } from 'fs';
import path from 'path';


export const getCvData = cache(async (): Promise<ParseCvOutput> => {
  try {
    const filePath = path.join(process.cwd(), 'public', 'Yadu Krishnan - Multimedia Specialist -01_12_2025-3.pdf');
    const fileBuffer = await fs.readFile(filePath);
    const cvDataUri = `data:application/pdf;base64,${fileBuffer.toString('base64')}`;
    const parsedData = await parseCv({ cvDataUri });
    return parsedData;
  } catch(e) {
    console.error("Error parsing CV, returning fallback data.", e)
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
  }
});
