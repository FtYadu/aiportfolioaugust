
'use client';
import React from 'react';
import { getCvData } from '@/lib/cv';
import { BentoGrid, BentoGridItem } from '@/components/BentoGrid';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Briefcase, Handshake } from 'lucide-react';
import { portfolioItems } from '@/lib/data';
import Image from 'next/image';
import SocialScroller from '@/components/SocialScroller';
import type { ParseCvOutput } from '@/ai/flows/cv-parsing';
import Link from 'next/link';

export default function Home() {
  const [cvData, setCvData] = React.useState<ParseCvOutput | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const data = await getCvData();
        setCvData(data);
      } catch (error) {
        console.error("Failed to fetch CV data", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const featuredPortfolio = portfolioItems.slice(0, 4);

  const gridItems = [
    {
      title: "Yadu Krishnan",
      description: cvData?.bio || "",
      header: <div className="flex h-full w-full items-center justify-center bg-grid-white/[0.05]"><Image src="https://scanned.page/p/Jdq5Gx" alt="Yadu Krishnan" width={150} height={150} className="rounded-full border-2 border-primary" data-ai-hint="portrait man" /></div>,
      className: "md:col-span-2",
    },
    {
      title: "Hard Skills",
      description: "",
      header: <div className="flex flex-wrap gap-2 p-4">{cvData?.skills.hardSkills.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}</div>,
      className: "md:col-span-1",
    },
    {
      title: "Soft Skills & Tools",
      description: "",
      header: <div className="p-4"><h3 className="text-sm font-semibold mb-2 text-primary">Soft Skills</h3><div className="flex flex-wrap gap-2 mb-4">{cvData?.skills.softSkills.map(skill => <Badge key={skill} variant="default">{skill}</Badge>)}</div><h3 className="text-sm font-semibold mb-2 text-primary">Tools</h3><div className="flex flex-wrap gap-2">{cvData?.skills.tools.map(tool => <Badge key={tool} variant="outline">{tool}</Badge>)}</div></div>,
      className: "md:col-span-1",
    },
    {
      title: "Portfolio Highlights",
      description: "A glimpse into my creative world.",
      header: (
        <div className="grid grid-cols-2 grid-rows-2 gap-2 p-2 h-full">
            {featuredPortfolio.map((item, i) => (
                <Image key={i} src={item.thumbnail} alt={item.title} width={200} height={200} className="object-cover rounded-md w-full h-full" data-ai-hint={item.description} />
            ))}
        </div>
      ),
      className: "md:col-span-2",
      icon: <Briefcase className="h-4 w-4" />,
      link: "/portfolio",
    },
     {
      title: "Services",
      description: "Offering professional photography, videography, and AI consulting services.",
      header: <div className="flex h-full w-full items-center justify-center text-primary"><Handshake size={64}/></div>,
      className: "md:col-span-2",
      icon: <Handshake className="h-4 w-4" />,
      link: "/services",
    },
  ];

  if (loading) {
      return <div className="flex justify-center items-center h-screen"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div></div>
  }

  return (
    <main className="container mx-auto px-4 py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold font-headline bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Yadu Krishnan
        </h1>
        <p className="mt-4 text-lg text-neutral-300 max-w-3xl mx-auto">
          Multimedia Specialist & Creative Technologist
        </p>
      </div>

      <BentoGrid className="mx-auto md:w-full">
        {gridItems.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
            icon={item.icon}
            link={item.link}
          />
        ))}
      </BentoGrid>
      
      <div className="mt-20">
        <SocialScroller />
      </div>

      <div className="text-center mt-20">
        <h2 className="text-3xl font-bold font-headline mb-4">Ready to Collaborate?</h2>
        <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">I'm currently available for freelance projects and collaborations. Let's create something amazing together.</p>
        <Button asChild size="lg">
            <Link href="/contact">
                Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
        </Button>
      </div>
    </main>
  );
}
