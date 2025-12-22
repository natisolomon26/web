"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, AnimatePresence, Variants } from "framer-motion";
import { useEffect, useState, Suspense, useRef } from "react";

// Slide data with content and background images
const slides = [
  {
    id: 1,
    title: "Welcome to EvaSUE",
    subtitle: "Ethiopian Students Union in Ethiopia",
    background: "/images/bg-5.jpg",
    badgeText: "ADVANCING THE KINGDOM OF GOD",
    gradient: "from-red-500/20 via-sky-500/20 to-purple-500/20",
  },
  {
    id: 2,
    title: "Student Today",
    subtitle: "Leaders Tomorrow",
    background: "/images/bg1.jpg",
    badgeText: "SHAPING FUTURE LEADERS",
    gradient: "from-blue-500/20 via-emerald-500/20 to-cyan-500/20",
  },
  {
    id: 3,
    title: "A Wide Network",
    subtitle: "Christian Students & Graduates of Ethiopia",
    background: "/images/bg2.JPG",
    badgeText: "UNITED IN CHRIST",
    gradient: "from-purple-500/20 via-pink-500/20 to-rose-500/20",
  },
  {
    id: 4,
    title: "Since the 1950s",
    subtitle: "Student Movement Making History",
    background: "/images/bg3.JPG",
    badgeText: "LEGACY OF FAITH",
    gradient: "from-amber-500/20 via-orange-500/20 to-yellow-500/20",
  },
  {
    id: 5,
    title: "Making and Multiplying",
    subtitle: "Disciples on Every Campus",
    background: "/images/small.JPG",
    badgeText: "DISCIPLESHIP MOVEMENT",
    gradient: "from-green-500/20 via-teal-500/20 to-emerald-500/20",
  },
];

// Pre-calculate random values to avoid calling Math.random during render
const PARTICLE_DATA = Array.from({ length: 20 }).map((_, i) => ({
  id: i,
  left: `${(i * 5) % 100}%`,
  top: `${(i * 7) % 100}%`,
  rotation: (i * 18) % 360,
  duration: 3 + (i % 3),
  delay: i % 5,
}));

const LINE_DATA = Array.from({ length: 15 }).map((_, i) => ({
  id: i,
  length: 5 + (i % 3),
  speed: 0.5 + (i % 2),
  position: [
    ((i * 13) % 100 - 50) * 0.4,
    ((i * 17) % 100 - 50) * 0.4,
    ((i * 11) % 100 - 50) * 0.2,
  ],
  rotation: [i * 0.6, i * 0.4, 0],
}));

const SHAPE_DATA = [
  { type: 'box', size: [0.5, 0.5, 0.5] as [number, number, number], speed: 1.2 },
  { type: 'sphere', size: [0.3, 32, 32] as [number, number, number], speed: 1.5 },
  { type: 'cone', size: [0.3, 0.6, 8] as [number, number, number], speed: 1.8 },
  { type: 'torus', size: [0.3, 0.1, 16, 32] as [number, number, number, number], speed: 1.3 },
  { type: 'octahedron', size: [0.4, 0] as [number, number], speed: 1.6 },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Smooth mouse position tracking for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  // Auto slide effect with smooth transitions
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setTimeout(() => setIsTransitioning(false), 500);
      }, 300);
    }, 7000); // 7 seconds total with transition delays

    return () => clearInterval(interval);
  }, []);

  // Mouse tracking effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isTransitioning) return;
      
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 15;
      
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, isTransitioning]);

  // Enhanced slide animation variants
  const backgroundVariants: Variants = {
    enter: {
      opacity: 0,
      scale: 1.1,
      filter: "blur(10px)",
    },
    center: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        opacity: { duration: 2, ease: "easeOut" },
        scale: { duration: 3, ease: "easeOut" },
        filter: { duration: 2, ease: "easeOut" },
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      filter: "blur(5px)",
      transition: {
        opacity: { duration: 1.5, ease: "easeIn" },
        scale: { duration: 2, ease: "easeIn" },
        filter: { duration: 1.5, ease: "easeIn" },
      }
    }
  };

  const contentVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      y: 20,
      opacity: 0,
      rotateY: direction > 0 ? 10 : -10,
    }),
    center: {
      x: 0,
      y: 0,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      }
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      y: -20,
      opacity: 0,
      rotateY: direction > 0 ? -10 : 10,
      transition: {
        duration: 1,
        ease: "easeInOut",
      }
    })
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-sky-950 via-sky-900 to-sky-950">
      
      {/* 3D Canvas for Floating Lines and Shapes - Removed for simplicity */}
      {/* You can re-enable this later when you've installed and configured @react-three/fiber properly */}
      
      {/* Background Images with Enhanced Slow Transitions */}
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
            {/* Dynamic gradient overlay based on slide */}
            <div className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].gradient}`} />
          </motion.div>
        </AnimatePresence>
        
        {/* Static gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-900/90 via-sky-800/80 to-sky-900/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-sky-950/80 via-transparent to-transparent" />
        
        {/* Enhanced floating lines (2D) */}
        <div className="absolute inset-0">
          {/* Vertical Lines */}
          {[1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={`vertical-${i}`}
              className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent"
              style={{
                left: `${10 + i * 15}%`,
              }}
              animate={{
                height: ["0%", "100%", "0%"],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 8 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}
          
          {/* Horizontal Lines */}
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={`horizontal-${i}`}
              className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
              style={{
                top: `${20 + i * 15}%`,
              }}
              animate={{
                width: ["0%", "100%", "0%"],
                opacity: [0, 0.4, 0],
              }}
              transition={{
                duration: 6 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}
          
          {/* Diagonal Lines */}
          {[1, 2, 3].map((i) => (
            <motion.div
              key={`diagonal-${i}`}
              className="absolute w-64 h-px bg-gradient-to-r from-transparent via-sky-400/30 to-transparent"
              style={{
                left: `${i * 20}%`,
                top: `${i * 15}%`,
                transform: `rotate(${45 + i * 15}deg)`,
              }}
              animate={{
                opacity: [0, 0.3, 0],
                width: ["0px", "300px", "0px"],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        {/* Geometric Shapes */}
        <div className="absolute inset-0">
          {/* Rotating Triangles */}
          {[1, 2, 3].map((i) => (
            <motion.div
              key={`triangle-${i}`}
              className="absolute w-16 h-16"
              style={{
                left: `${15 + i * 25}%`,
                top: `${70 + i * 5}%`,
              }}
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                rotate: {
                  duration: 20 + i * 5,
                  repeat: Infinity,
                  ease: "linear",
                },
                scale: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              <div className="w-full h-full border-t-2 border-r-2 border-white/20 transform rotate-45" />
            </motion.div>
          ))}
          
          {/* Pulsing Circles */}
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={`pulse-${i}`}
              className="absolute rounded-full border border-white/10"
              style={{
                width: `${40 + i * 20}px`,
                height: `${40 + i * 20}px`,
                left: `${80 - i * 10}%`,
                top: `${10 + i * 15}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.1, 0.3],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}
        </div>

        {/* Particle effects with lines - using pre-calculated data */}
        <div className="absolute inset-0">
          {PARTICLE_DATA.map((particle) => (
            <motion.div
              key={`particle-${particle.id}`}
              className="absolute w-px h-4 bg-gradient-to-b from-transparent via-white/40 to-transparent"
              style={{
                left: particle.left,
                top: particle.top,
                transform: `rotate(${particle.rotation}deg)`,
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0, 0.8, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        
        {/* Dynamic gradient lights based on current slide */}
        <motion.div
          className={`absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r ${slides[currentSlide].gradient} rounded-full blur-3xl`}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            rotate: {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        />
      </div>

      {/* Main Content with Enhanced Transitions */}
      <div className="relative z-30 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-10 md:space-y-12 pt-16">
          
          <div className="h-8 md:h-12" />
          
          {/* Animated Badge */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`badge-${slides[currentSlide].id}`}
              custom={direction}
              variants={contentVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="mb-4"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 shadow-2xl">
                <motion.div
                  className="w-2 h-2 rounded-full"
                  animate={{
                    scale: [1, 1.6, 1],
                    backgroundColor: ["#f97316", "#3b82f6", "#f97316"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <span className="text-sm font-semibold text-white tracking-wider">
                  {slides[currentSlide].badgeText}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Main Headline */}
          <div className="space-y-8">
            <AnimatePresence mode="wait">
              <motion.h1
                key={`title-${slides[currentSlide].id}`}
                custom={direction}
                variants={contentVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] tracking-tight"
              >
                <div className="space-y-6">
                  <motion.div
                    className="flex flex-wrap justify-center gap-x-4 gap-y-3"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 1 }}
                  >
                    <span className="bg-gradient-to-r from-white via-sky-100 to-white bg-clip-text text-transparent animate-gradient">
                      {slides[currentSlide].title}
                    </span>
                  </motion.div>
                  <motion.div
                    className="flex flex-wrap justify-center gap-x-4 gap-y-3"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                  >
                    <span className="text-white/90 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-wide">
                      {slides[currentSlide].subtitle}
                    </span>
                  </motion.div>
                </div>
              </motion.h1>
            </AnimatePresence>

            {/* Dynamic underline that changes color */}
            <motion.div
              key={`underline-${slides[currentSlide].id}`}
              initial={{ width: 0, opacity: 0 }}
              animate={{ 
                width: "300px",
                opacity: 1,
              }}
              transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
              className="h-1 mx-auto rounded-full bg-gradient-to-r from-transparent via-current to-transparent"
              style={{
                color: slides[currentSlide].gradient.split(' ')[1].split('-')[0] === 'red' ? '#ef4444' :
                       slides[currentSlide].gradient.split(' ')[1].split('-')[0] === 'blue' ? '#3b82f6' :
                       slides[currentSlide].gradient.split(' ')[1].split('-')[0] === 'purple' ? '#8b5cf6' :
                       slides[currentSlide].gradient.split(' ')[1].split('-')[0] === 'amber' ? '#f59e0b' :
                       '#10b981',
              }}
            />
          </div>

          {/* Stats with floating animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="grid grid-cols-3 gap-6 sm:gap-8 pt-12"
          >
            {[
              { value: "180+", label: "Campuses", color: "text-white" },
              { value: "50,000+", label: "Students", color: "text-white" },
              { value: "60+", label: "Years", color: "text-white" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/5 shadow-xl"
              >
                <div className={`text-3xl sm:text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-white/70 uppercase tracking-widest font-light">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Slide Navigation */}
          <div className="flex flex-col items-center gap-6 mt-12">
            {/* Slide Dots with Preview */}
            <div className="flex items-center justify-center gap-4">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => {
                    if (isTransitioning) return;
                    setIsTransitioning(true);
                    setDirection(index > currentSlide ? 1 : -1);
                    setTimeout(() => {
                      setCurrentSlide(index);
                      setTimeout(() => setIsTransitioning(false), 500);
                    }, 300);
                  }}
                  className="relative group"
                  disabled={isTransitioning}
                >
                  <motion.div
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-white scale-125'
                        : 'bg-white/40 hover:bg-white/60'
                    }`}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                  />
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="bg-black/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                      {slide.title}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Enhanced Progress Bar */}
            <div className="w-full max-w-md mx-auto">
              <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="absolute h-full rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${slides[currentSlide].gradient.split(' ')[1].split('-')[0] === 'red' ? '#ef4444' :
                      slides[currentSlide].gradient.split(' ')[1].split('-')[0] === 'blue' ? '#3b82f6' :
                      slides[currentSlide].gradient.split(' ')[1].split('-')[0] === 'purple' ? '#8b5cf6' :
                      slides[currentSlide].gradient.split(' ')[1].split('-')[0] === 'amber' ? '#f59e0b' :
                      '#10b981'}, ${slides[currentSlide].gradient.split(' ')[1].split('-')[0] === 'red' ? '#f87171' :
                      slides[currentSlide].gradient.split(' ')[1].split('-')[0] === 'blue' ? '#60a5fa' :
                      slides[currentSlide].gradient.split(' ')[1].split('-')[0] === 'purple' ? '#a78bfa' :
                      slides[currentSlide].gradient.split(' ')[1].split('-')[0] === 'amber' ? '#fbbf24' :
                      '#34d399'})`,
                  }}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 7, ease: "linear" }}
                  key={currentSlide}
                />
                {/* Progress ticks */}
                {[1, 2, 3, 4].map((tick) => (
                  <div
                    key={tick}
                    className="absolute top-1/2 -translate-y-1/2 w-px h-3 bg-white/30"
                    style={{ left: `${tick * 20}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Slide Counter */}
            <div className="text-white/60 text-sm font-light tracking-widest">
              <span className="text-white">{currentSlide + 1}</span>
              <span className="mx-2">/</span>
              <span>{slides.length}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Text Elements */}
      <div className="absolute inset-0 pointer-events-none z-20">
        {["EvaSUE", "Revival", "Faith", "Hope", "Love"].map((text, i) => (
          <motion.div
            key={text}
            className="absolute text-white/5 font-bold text-6xl md:text-8xl"
            style={{
              left: `${10 + i * 20}%`,
              top: `${15 + i * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
              opacity: [0.03, 0.05, 0.03],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          >
            {text}
          </motion.div>
        ))}
      </div>

      {/* Transition Overlay */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black z-40 pointer-events-none"
          />
        )}
      </AnimatePresence>
    </section>
  );
}