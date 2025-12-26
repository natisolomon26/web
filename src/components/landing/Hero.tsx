"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, AnimatePresence, Variants } from "framer-motion";
import { useEffect, useState } from "react";

// Slide data with content and background images
const slides = [
  {
    id: 1,
    title: "Welcome to EvaSUE",
    subtitle: "Ethiopian Students Union",
    background: "/images/bg-5.jpg",
    gradient: "from-red-600/25 via-sky-600/25 to-purple-600/25",
  },
  {
    id: 2,
    title: "Student Today",
    subtitle: "Leaders Tomorrow",
    background: "/images/bg1.jpg",
    gradient: "from-blue-600/25 via-emerald-600/25 to-cyan-600/25",
  },
  {
    id: 3,
    title: "A Wide Network",
    subtitle: "Christian Students & Graduates of Ethiopia",
    background: "/images/bg2.JPG",
    gradient: "from-purple-600/25 via-pink-600/25 to-rose-600/25",
  },
  {
    id: 4,
    title: "Since the 1950s",
    subtitle: "Student Movement Making History",
    background: "/images/bg3.JPG",
    gradient: "from-amber-600/25 via-orange-600/25 to-yellow-600/25",
  },
  {
    id: 5,
    title: "Making and Multiplying",
    subtitle: "Disciples on Every Campus",
    background: "/images/small.JPG",
    gradient: "from-green-600/25 via-teal-600/25 to-emerald-600/25",
  },
];

// Fixed badge text for all slides
const FIXED_BADGE_TEXT = "ADVANCING THE KINGDOM OF GOD";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Smooth mouse position tracking for subtle parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const smoothX = useSpring(mouseX, { stiffness: 150, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 150, damping: 30 });

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setTimeout(() => setIsTransitioning(false), 400);
      }, 300);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  // Mouse tracking effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isTransitioning) return;
      
      const x = (e.clientX / window.innerWidth - 0.5) * 5; // Very subtle parallax
      const y = (e.clientY / window.innerHeight - 0.5) * 4;
      
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, isTransitioning]);

  // Slide animation variants
  const backgroundVariants: Variants = {
    enter: {
      opacity: 0,
      scale: 1.03,
    },
    center: {
      opacity: 1,
      scale: 1,
      transition: {
        opacity: { duration: 1.2, ease: "easeOut" },
        scale: { duration: 1.5, ease: "easeOut" },
      }
    },
    exit: {
      opacity: 0,
      scale: 0.97,
      transition: {
        opacity: { duration: 1, ease: "easeIn" },
        scale: { duration: 1.2, ease: "easeIn" },
      }
    }
  };

  const contentVariants: Variants = {
    enter: (direction: number) => ({
      y: 20,
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2
      }
    },
    exit: (direction: number) => ({
      y: -20,
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      }
    })
  };

  return (
    <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden bg-sky-950">
      
      {/* Background Images */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[currentSlide].id}
            variants={backgroundVariants}
            initial="enter"
            animate="center"
            exit="exit"
            style={{
              x: smoothX,
              y: smoothY,
            }}
            className="absolute inset-0"
          >
            <Image
              src={slides[currentSlide].background}
              alt="Hero Background"
              fill
              className="object-cover"
              priority
              quality={100}
              sizes="100vw"
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].gradient}`} />
          </motion.div>
        </AnimatePresence>
        
        {/* Subtle overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-900/60 via-sky-800/50 to-sky-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-sky-950/50 via-transparent to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-30 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
          
          {/* Fixed Badge - Not animated with slides */}
          <div className="mb-2">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/15 backdrop-blur-sm rounded-full border border-white/20 shadow-lg">
              <motion.div
                className="w-2 h-2 rounded-full bg-white"
                animate={{
                  scale: [1, 1.4, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <span className="text-xs font-semibold text-white tracking-wider">
                {FIXED_BADGE_TEXT}
              </span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={`title-${slides[currentSlide].id}`}
                custom={direction}
                variants={contentVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="space-y-4"
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1]">
                  <span className="bg-gradient-to-r from-white via-sky-50 to-white bg-clip-text text-transparent">
                    {slides[currentSlide].title}
                  </span>
                </h1>
                <p className="text-white/90 text-xl sm:text-2xl md:text-3xl font-light tracking-wide max-w-4xl mx-auto">
                  {slides[currentSlide].subtitle}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Underline */}
            <motion.div
              key={`underline-${slides[currentSlide].id}`}
              initial={{ width: 0, opacity: 0 }}
              animate={{ 
                width: "200px",
                opacity: 1,
              }}
              transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
              className="h-0.5 mx-auto rounded-full bg-gradient-to-r from-transparent via-white/70 to-transparent"
            />
          </div>

          {/* Compact Stats */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="grid grid-cols-3 gap-3 sm:gap-4 pt-8"
          >
            {[
              { value: "180+", label: "Campuses" },
              { value: "50,000+", label: "Students" },
              { value: "60+", label: "Years" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="text-center bg-white/8 backdrop-blur-sm rounded-lg p-3 border border-white/10"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-white/80 uppercase tracking-wider font-light">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Slide Navigation */}
          <div className="flex flex-col items-center gap-4 mt-8">
            {/* Slide Dots */}
            <div className="flex items-center justify-center gap-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => {
                    if (isTransitioning) return;
                    setIsTransitioning(true);
                    setDirection(index > currentSlide ? 1 : -1);
                    setTimeout(() => {
                      setCurrentSlide(index);
                      setTimeout(() => setIsTransitioning(false), 400);
                    }, 300);
                  }}
                  className="relative"
                  disabled={isTransitioning}
                >
                  <div className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                    index === currentSlide
                      ? 'bg-white'
                      : 'bg-white/30 hover:bg-white/50'
                  }`} />
                </button>
              ))}
            </div>

            {/* Progress Bar */}
            <div className="w-48">
              <div className="relative h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="absolute h-full rounded-full bg-white"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 8, ease: "linear" }}
                  key={currentSlide}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transition Overlay */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black z-40 pointer-events-none"
          />
        )}
      </AnimatePresence>
    </section>
  );
}