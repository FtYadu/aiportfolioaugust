import { BentoGrid, BentoGridItem } from '@/components/BentoGrid';
import ContactForm from '@/components/ContactForm';
import { services } from '@/lib/data';
import { Camera, Clapperboard, BrainCircuit, ArrowRight } from 'lucide-react';

const icons = {
  Photography: <Camera className="h-12 w-12 text-primary" />,
  Videography: <Clapperboard className="h-12 w-12 text-primary" />,
  'AI Consulting': <BrainCircuit className="h-12 w-12 text-primary" />,
};

export default function ServicesPage() {
  return (
    <main className="container mx-auto px-4 py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold font-headline bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Services
        </h1>
        <p className="mt-4 text-lg text-neutral-300 max-w-2xl mx-auto">
          Leveraging creativity and technology to bring your ideas to life. Explore my professional services tailored to meet your multimedia needs.
        </p>
      </div>

      <BentoGrid className="mx-auto md:w-full">
        {services.map((service, i) => (
          <BentoGridItem
            key={i}
            title={service.title}
            description={service.description}
            header={<div className="flex justify-center items-center h-full">{icons[service.title as keyof typeof icons]}</div>}
            className="md:col-span-1"
            icon={
              <ul className="mt-2 space-y-1">
                {service.offerings.map((offering, j) => (
                  <li key={j} className="flex items-center text-xs text-neutral-300">
                    <ArrowRight className="h-3 w-3 mr-2 text-accent" />
                    {offering}
                  </li>
                ))}
              </ul>
            }
          />
        ))}
      </BentoGrid>
      
      <div className="mt-20">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold font-headline">Have a Project in Mind?</h2>
            <p className="mt-2 text-neutral-300">Fill out the form below to get in touch. I'll get back to you as soon as possible.</p>
          </div>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
