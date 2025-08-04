import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import FloatingNav from '@/components/layout/FloatingNav';
import { Home, Briefcase, Rss, Handshake, Mail, Download } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Yadu Krishnan | Multimedia Specialist',
  description: 'Portfolio of Yadu Krishnan, a professional photographer, videographer, and AI consultant.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = [
    { name: "Home", link: "/", icon: <Home className="h-4 w-4" /> },
    { name: "Portfolio", link: "/portfolio", icon: <Briefcase className="h-4 w-4" /> },
    { name: "Blog", link: "/blog", icon: <Rss className="h-4 w-4" /> },
    { name: "Services", link: "/services", icon: <Handshake className="h-4 w-4" /> },
    { name: "CV", link: "/cv", icon: <Download className="h-4 w-4" /> },
    { name: "Contact", link: "/contact", icon: <Mail className="h-4 w-4" /> },
  ];

  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Source+Code+Pro:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <FloatingNav navItems={navItems} />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
