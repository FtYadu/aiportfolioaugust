'use client';
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import AnimatedLogo from './AnimatedLogo';

export default function WelcomeIntro() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<SVGSVGElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // This check must be inside useEffect to run only on the client
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    if (!hasSeenIntro) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    if (isVisible && containerRef.current) {
      const tl = gsap.timeline();

      // Initial state
      gsap.set(logoRef.current, { scale: 0, opacity: 0 });
      gsap.set(textRef.current?.children, { y: 30, opacity: 0 });
      gsap.set(buttonRef.current, { y: 20, opacity: 0 });
      
      // Animate Logo
      tl.to(logoRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
      })
      .to("#logo-path", {
        duration: 1.5,
        ease: "power3.inOut",
        attr: { d: "M 10,10 L 90,10 L 90,90 L 10,90 Z" }, // Morph to square
      }, "-=0.5")
      .to("#logo-path", {
        duration: 1.5,
        ease: "power3.inOut",
        attr: { d: "M 50,50 m -40,0 a 40,40 0 1,0 80,0 a 40,40 0 1,0 -80,0" }, // Morph to circle
      }, ">")
      .to(logoRef.current, {
        rotation: 360,
        duration: 3,
        ease: "power1.inOut"
      }, "-=1.5");
      
      // Animate Text
      tl.to(textRef.current?.children, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      }, "-=2.5");
      
      // Animate Button
      tl.to(buttonRef.current, {
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
      scale: 1.05,
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
      <AnimatedLogo ref={logoRef} />

      <h1 ref={textRef} className="text-3xl md:text-5xl font-bold font-headline text-center mt-8">
        {sentence.map((word, index) => (
          <span key={index} className="inline-block mr-3">
            {word}
          </span>
        ))}
      </h1>

      <div ref={buttonRef}>
        <Button onClick={handleEnter} className="mt-12" size="lg">
          Explore <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
