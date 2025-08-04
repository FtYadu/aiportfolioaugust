import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import Link from 'next/link';

export default function CVPage() {
  const cvLink = "https://scanned.page/p/CH0smg";

  return (
    <main className="container mx-auto px-4 py-24 min-h-screen flex flex-col items-center">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold font-headline bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Curriculum Vitae
        </h1>
        <p className="mt-4 text-lg text-neutral-300 max-w-2xl mx-auto">
          Here is a detailed overview of my skills, experience, and qualifications. Click the preview to download.
        </p>
      </div>

      <a 
        href={cvLink}
        target="_blank"
        rel="noopener noreferrer"
        download="Yadu_Krishnan_CV.pdf"
        className="w-full max-w-4xl p-4 md:p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl group cursor-pointer"
      >
        <div className="aspect-[8.5/11] w-full relative">
          <iframe
            src={cvLink}
            title="Yadu Krishnan CV"
            className="w-full h-full rounded-lg border-2 border-white/20"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center text-white text-lg font-semibold bg-black/70 px-6 py-3 rounded-lg">
                <Download className="mr-2 h-5 w-5" />
                Download CV
            </div>
          </div>
        </div>
      </a>
      
      <div className="text-center mt-16">
        <h2 className="text-3xl font-bold font-headline mb-4">Ready to take the next step?</h2>
        <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">If my qualifications align with your needs, I would be delighted to discuss potential opportunities.</p>
        <Button asChild size="lg">
            <Link href="/contact">
                Contact Me <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
        </Button>
      </div>
    </main>
  );
}
