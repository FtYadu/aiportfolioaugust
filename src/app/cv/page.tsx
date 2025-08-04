import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function CVPage() {
  return (
    <main className="container mx-auto px-4 py-24 min-h-screen flex flex-col items-center justify-center">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold font-headline bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Curriculum Vitae
        </h1>
        <p className="mt-4 text-lg text-neutral-300 max-w-2xl mx-auto">
          Here is a detailed overview of my skills, experience, and qualifications. Download for your reference.
        </p>
      </div>

      <div className="w-full max-w-4xl p-4 md:p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
        <div className="aspect-[8.5/11] w-full">
          <iframe
            src="/Yadu Krishnan - Multimedia Specialist -01_12_2025-3.pdf"
            title="Yadu Krishnan CV"
            className="w-full h-full rounded-lg border-2 border-white/20"
          />
        </div>
      </div>
      
      <a href="/Yadu Krishnan - Multimedia Specialist -01_12_2025-3.pdf" download="Yadu_Krishnan_CV.pdf" className="mt-8">
        <Button size="lg">
          <Download className="mr-2 h-5 w-5" />
          Download CV
        </Button>
      </a>
    </main>
  );
}
