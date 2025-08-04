'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface NavItem {
  name: string;
  link: string;
  icon?: React.ReactNode;
}

export default function FloatingNav({ navItems }: { navItems: NavItem[] }) {
  const pathname = usePathname();
  const isMobile = useIsMobile();
  
  // As framer-motion is not a dependency, we'll use simple components
  const MotionDiv = ({ children, ...props }: any) => <div {...props}>{children}</div>;


  if (isMobile) {
    return (
      <MotionDiv
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed bottom-4 inset-x-0 w-[90%] md:w-1/2 mx-auto z-50"
      >
        <nav className="relative flex items-center justify-around w-full h-16 bg-black/50 backdrop-blur-lg border border-primary/30 rounded-full shadow-lg">
          {navItems.map((item) => {
            const isActive = pathname === item.link;
            return (
              <Link key={item.link} href={item.link} passHref>
                <div className="flex flex-col items-center justify-center text-white transition-colors hover:text-primary">
                  <div className={cn("p-2 rounded-full transition-all duration-300", isActive ? 'bg-primary/20' : 'bg-transparent')}>
                    {item.icon}
                  </div>
                  <span className={cn("text-xs mt-1", isActive ? 'text-primary' : 'text-neutral-400')}>{item.name}</span>
                </div>
              </Link>
            );
          })}
        </nav>
      </MotionDiv>
    );
  }

  return (
    <nav className="fixed top-1/2 -translate-y-1/2 left-4 z-50">
      <div className="flex flex-col items-center space-y-2 p-2 bg-black/50 backdrop-blur-lg border border-primary/30 rounded-full">
        {navItems.map((item) => {
          const isActive = pathname === item.link;
          return (
            <Link key={item.link} href={item.link}>
              <div
                className={cn(
                  'h-10 w-10 flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer group/nav',
                  isActive ? 'bg-primary text-white' : 'text-neutral-400 hover:bg-primary/50 hover:text-white'
                )}
              >
                {item.icon}
                <div className="absolute left-14 bg-card px-3 py-1 rounded-md text-sm text-foreground whitespace-nowrap opacity-0 group-hover/nav:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {item.name}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}