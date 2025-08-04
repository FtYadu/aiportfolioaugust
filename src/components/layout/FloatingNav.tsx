'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
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

  if (isMobile) {
    return (
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30, delay: 0.5 }}
        className="fixed bottom-4 inset-x-0 w-[90%] md:w-1/2 mx-auto z-50"
      >
        <nav className="relative flex items-center justify-around w-full h-16 bg-black/50 backdrop-blur-lg border border-primary/30 rounded-full shadow-lg">
          {navItems.map((item) => {
            const isActive = pathname === item.link;
            return (
              <Link 
                key={item.link} 
                href={item.link} 
                className="flex flex-col items-center justify-center text-white transition-colors hover:text-primary h-full w-full relative"
              >
                <motion.div
                  className={cn("p-2 rounded-full transition-all duration-300", isActive ? 'bg-primary/20' : 'bg-transparent')}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {item.icon}
                </motion.div>
                <span className={cn("text-xs mt-1", isActive ? 'text-primary' : 'text-neutral-400')}>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </motion.div>
    );
  }

  return (
    <motion.nav 
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30, delay: 0.5 }}
      className="fixed top-1/2 -translate-y-1/2 left-4 z-50">
      <div className="flex flex-col items-center space-y-2 p-2 bg-black/50 backdrop-blur-lg border border-primary/30 rounded-full">
        {navItems.map((item) => {
          const isActive = pathname === item.link;
          return (
            <Link key={item.link} href={item.link}>
              <div
                className={cn(
                  'h-10 w-10 flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer group/nav relative',
                  isActive ? 'bg-primary text-white' : 'text-neutral-400 hover:bg-primary/50 hover:text-white'
                )}
              >
                {item.icon}
                <div className="absolute left-14 bg-card px-3 py-1 rounded-md text-sm text-foreground whitespace-nowrap opacity-0 group-hover/nav:opacity-100 transition-opacity duration-300 pointer-events-none transform group-hover/nav:translate-x-0 -translate-x-2">
                  {item.name}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}
