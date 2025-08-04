'use client';
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import AnimatedLogo from './AnimatedLogo';

export default function WelcomeIntro() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    if (!hasSeenIntro) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    if (isVisible && containerRef.current) {
      const tl = gsap.timeline();
      
      tl.to("#logo-path", {
        duration: 1.2,
        ease: "power3.inOut",
        attr: { d: "M 50,50 m -40,0 a 40,40 0 1,0 80,0 a 40,40 0 1,0 -80,0" }, // Morph to circle
      }, 0.5)
      .to(containerRef.current.querySelector('svg'), {
        rotation: 360,
        duration: 2.5,
        ease: "power1.inOut"
      }, "-=1.2")
      .to(containerRef.current.querySelectorAll('h1 span'), {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
      }, 1)
      .to(containerRef.current.querySelector('button'), {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      }, ">-0.2");
    }
  }, [isVisible]);

  const handleEnter = () => {
    gsap.to(containerRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: 'power2.in',
      onComplete: () => {
        sessionStorage.setItem('hasSeenIntro', 'true');
        setIsVisible(false);
      },
    });
  };

  const sentence = "Welcome to my creative space.".split(" ");

  if (!isVisible) {
    return null;
  }
  
  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-background z-[100] flex flex-col items-center justify-center"
    >
      <AnimatedLogo />

      <h1 className="text-3xl md:text-5xl font-bold font-headline text-center mt-8 overflow-hidden py-2">
        {sentence.map((word, index) => (
          <span key={index} className="inline-block mr-3 translate-y-full opacity-0">
            {word}
          </span>
        ))}
      </h1>

      <div className="opacity-0 translate-y-5">
        <Button onClick={handleEnter} className="mt-12" size="lg">
          Explore <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
