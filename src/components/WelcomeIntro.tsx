'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export default function WelcomeIntro() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    if (!hasSeenIntro) {
      setIsVisible(true);
    }
  }, []);

  const handleEnter = () => {
    sessionStorage.setItem('hasSeenIntro', 'true');
    setIsVisible(false);
  };

  const sentence = "Welcome to my creative space.".split("");

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-background z-[100] flex flex-col items-center justify-center"
        >
          <motion.h1
            className="text-3xl md:text-5xl font-bold font-headline text-center"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.05 } },
              hidden: {},
            }}
          >
            {sentence.map((char, index) => (
              <motion.span
                key={index}
                className="inline-block"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <Button onClick={handleEnter} className="mt-8" size="lg">
              Explore <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
