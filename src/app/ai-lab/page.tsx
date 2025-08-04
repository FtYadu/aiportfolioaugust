import { BentoGrid, BentoGridItem } from '@/components/BentoGrid';
import { Badge } from '@/components/ui/badge';
import { Bot, Cpu, Film, Mic, Workflow, Handshake, BrainCircuit } from 'lucide-react';

const aiProjects = [
  {
    title: "1️⃣ Vibelancers – AI Freelancer OS",
    description: "A next-gen AI-powered operating system for freelancers and agencies.",
    header: <div className="flex h-full w-full items-center justify-center text-primary"><Workflow size={64} /></div>,
    className: "md:col-span-1",
    tags: ["Next.js", "Firebase", "AI Automation"],
    details: "Features: AI scheduling, automated client management, portfolio builder, invoicing. Goal: Streamline every part of a freelancer’s workflow into a single smart platform."
  },
  {
    title: "2️⃣ Langflow AI Automation Hub",
    description: "A powerful AI system that routes messages, processes tasks, and delivers results automatically.",
    header: <div className="flex h-full w-full items-center justify-center text-primary"><Bot size={64} /></div>,
    className: "md:col-span-2",
    tags: ["WhatsApp", "ChatGPT", "Claude", "ComfyUI"],
    details: "Integration: WhatsApp (Meta API) → AI Engines. Capabilities: Image generation, text processing, automated responses. Impact: Cuts turnaround time for creative tasks by 70%."
  },
  {
    title: "3️⃣ AI-Enhanced Portfolio Platform",
    description: "A dynamic portfolio website built with AI categorization and content automation.",
    header: <div className="flex h-full w-full items-center justify-center text-primary"><BrainCircuit size={64} /></div>,
    className: "md:col-span-2",
    tags: ["AI Analysis", "Bento Grid", "Content Automation"],
    details: "Key Features: Auto-tagging of images & videos, Bento grid gallery design, Blog & case study integration. Result: A portfolio that updates itself."
  },
  {
    title: "4️⃣ AI Video Generation Experiments",
    description: "Exploring cinematic storytelling with AI video tools like Gemini Veo 3 and Sora.",
    header: <div className="flex h-full w-full items-center justify-center text-primary"><Film size={64} /></div>,
    className: "md:col-span-1",
    tags: ["Gemini Veo 3", "Sora", "Cinematic AI"],
    details: "Applications: Short films, ad concepts, social media reels. Focus: Smooth transitions, scene consistency, dynamic camera work. Potential: Reducing production costs while maintaining high creative quality."
  },
  {
    title: "5️⃣ AI Voice & Assistant Systems",
    description: "Creating a personalized AI assistant that integrates voice cloning & advanced automation.",
    header: <div className="flex h-full w-full items-center justify-center text-primary"><Mic size={64} /></div>,
    className: "md:col-span-1",
    tags: ["TTS", "Voice Cloning", "Ollama"],
    details: "Tech: Bark, Tortoise TTS, ElevenLabs, Ollama with DeepSeek model. Features: Voice-based commands, real-time responses, integrated task management. Goal: An AI that can act as personal productivity engine."
  },
  {
    title: "6️⃣ Self-Hosted AI Environment",
    description: "Running powerful AI workflows locally to reduce cloud costs and increase control.",
    header: <div className="flex h-full w-full items-center justify-center text-primary"><Cpu size={64} /></div>,
    className: "md:col-span-1",
    tags: ["Local AI", "Ollama", "ComfyUI"],
    details: "Setup: Windows Mini PC (Ryzen 7 + 32GB RAM) + Ollama + ComfyUI. Experiments: Local text, image, and automation pipelines. Result: Full AI lab under my own control."
  },
  {
    title: "7️⃣ AI Branding & Content Tools",
    description: "Automating the creation of branding assets and marketing visuals.",
    header: <div className="flex h-full w-full items-center justify-center text-primary"><Handshake size={64} /></div>,
    className: "md:col-span-1",
    tags: ["Branding", "Automation", "Social Media"],
    details: "Outputs: Posters, typography, ad creatives, product mockups. Integration: Automated social media scheduling with AI-generated visuals. Impact: Faster content delivery for clients & campaigns."
  },
];

export default function AILabPage() {
  return (
    <main className="container mx-auto px-4 py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold font-headline bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Welcome to my AI Lab
        </h1>
        <p className="mt-4 text-lg text-neutral-300 max-w-3xl mx-auto">
          where I experiment with automation, multimedia creativity, and intelligent workflows that push the boundaries of what’s possible for content creators, brands, and businesses.
        </p>
      </div>

      <BentoGrid className="mx-auto md:w-full" autoRows>
        {aiProjects.map((project, i) => (
          <BentoGridItem
            key={i}
            title={project.title}
            description={project.description}
            header={project.header}
            className={project.className}
            icon={
              <div>
                <p className="font-sans text-xs font-normal text-neutral-400 mb-2">{project.details}</p>
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag, j) => (
                    <Badge key={j} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </div>
            }
          />
        ))}
      </BentoGrid>
      
      <div className="text-center mt-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold font-headline mb-4 text-primary">💡 Future Vision</h2>
        <p className="text-lg text-neutral-300">
          These AI projects are building towards a fully connected creative ecosystem — where brands, creators, and businesses can automate their workflows, generate high-quality content, and scale faster without losing their creative direction.
        </p>
      </div>
    </main>
  );
}
