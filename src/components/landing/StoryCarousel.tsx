"use client";

import { useState, useEffect, useRef } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, 
  Pause, 
  ChevronLeft, 
  ChevronRight, 
  Heart, 
  BookOpen,
  User,
  Sparkles
} from "lucide-react";
import Image from "next/image";
import "@splidejs/react-splide/css";

const slides = [
  {
    id: 1,
    title: "Every Tribe, Every Tongue: Andy's Story",
    subtitle: "Finding purpose across cultures",
    link: "/every-tribe-every-tongue-andys-story",
    image: "/leaders/kiko.jpeg",
    type: "Campus Story"
  },
  {
    id: 2,
    title: "The God of the Unexpected: Lucas' Story",
    subtitle: "When plans change, purpose remains",
    link: "/node/10548",
    image: "/images/lucas-3.jpg",
    type: "Campus Story"
  },
  {
    id: 3,
    title: "The Intentionality of God: Jordan's Story",
    subtitle: "Divine timing in student ministry",
    link: "/intentionality-god-jordan-s-story",
    image: "/images/Jordan-Matt-Kirk-2179-copy.jpg",
    type: "Campus Story"
  },
  {
    id: 4,
    title: "A Call to Sit in the Mud with Gen Z: Sarah's Story",
    subtitle: "Meeting students where they are",
    link: "/node/10549",
    image: "/images/sarah-new.png",
    type: "Staff Story"
  },
  {
    id: 5,
    title: "From Loss to Life Change: Elijah's Story",
    subtitle: "Finding hope in difficult seasons",
    link: "/loss-life-change-elijahs-story",
    image: "/images/loss-to-life-change.jpg",
    type: "Campus Story"
  },
];

export default function StoryCarousel() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const splideRef = useRef<any>(null);

  // Auto-play functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        if (splideRef.current) {
          splideRef.current.go(">");
        }
      }, 4000); // Change slide every 4 seconds
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSlideChange = (splide: any) => {
    setCurrentIndex(splide.index);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const goToSlide = (index: number) => {
    if (splideRef.current) {
      splideRef.current.go(index);
    }
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-12 md:py-20">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center"
            >
              <BookOpen className="w-6 h-6 text-white" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Featured <span className="text-red-600">Stories</span>
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl">
            Inspiring stories of faith, transformation, and impact from our community
          </p>
        </div>
        
        {/* Controls */}
        <div className="flex items-center gap-4 mt-6 md:mt-0">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={togglePlay}
            className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </motion.button>
          <div className="flex gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => splideRef.current?.go("<")}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => splideRef.current?.go(">")}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Main Carousel */}
      <div className="relative">
        <Splide
          ref={splideRef}
          hasTrack={false}
          options={{
            type: "loop",
            perPage: 3,
            gap: "2rem",
            arrows: false,
            pagination: false,
            autoplay: isPlaying,
            interval: 4000,
            pauseOnHover: true,
            pauseOnFocus: false,
            speed: 800,
            easing: "cubic-bezier(0.25, 1, 0.5, 1)",
            breakpoints: {
              1024: { perPage: 2 },
              768: { perPage: 1 },
            },
          }}
          onMoved={handleSlideChange}
          className="splide"
        >
          <SplideTrack>
            {slides.map((slide) => (
              <SplideSlide key={slide.id}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
                >
                  {/* Image Container */}
                  <div className="relative h-[500px] overflow-hidden">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    
                    {/* Top Badges */}
                    <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="px-4 py-2 bg-gradient-to-r from-red-500/90 to-orange-500/90 backdrop-blur-sm rounded-full"
                      >
                        <span className="text-white text-sm font-semibold">{slide.type}</span>
                      </motion.div>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <Heart className="w-5 h-5 text-white" />
                      </motion.button>
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      {/* Category Tag */}
                      

                      {/* Title */}
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-red-300 transition-colors">
                        {slide.title}
                      </h3>

                      {/* Subtitle */}
                      <p className="text-lg text-gray-200 mb-4">{slide.subtitle}</p>

                      {/* Excerpt */}

                      {/* Metadata */}
                      <div className="flex items-center gap-6 text-sm text-gray-300 mb-6">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>Student Story</span>
                        </div>
                        
                        
                      </div>

                      {/* Stats & Actions */}
                      <div className="flex items-center justify-between pt-6 border-t border-white/20">
                          
                        
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-6 py-2.5 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full font-semibold flex items-center gap-2 hover:shadow-lg transition-shadow"
                        >
                          Read Story
                          <Sparkles className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-orange-500/0 to-yellow-500/0 group-hover:from-red-500/5 group-hover:via-orange-500/5 group-hover:to-yellow-500/5 transition-all duration-500 rounded-2xl -m-1" />
                </motion.div>
              </SplideSlide>
            ))}
          </SplideTrack>
        </Splide>

        {/* Progress Indicator */}
        <div className="mt-12">
          <div className="flex justify-center items-center gap-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="relative group"
              >
                <div
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? "bg-gradient-to-r from-red-500 to-orange-500 scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
                {currentIndex === index && (
                  <motion.div
                    layoutId="activeProgress"
                    className="absolute -inset-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full blur-sm"
                  />
                )}
              </button>
            ))}
          </div>
          
          {/* Auto-play Indicator */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500 animate-pulse" />
            <span className="text-sm text-gray-600">
              {isPlaying ? "Auto-playing stories" : "Click to play"}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Stats */}
      

      {/* Add Globe icon component if not imported */}
      {!Globe && (
        <style jsx>{`
          .globe-icon {
            width: 24px;
            height: 24px;
            stroke: currentColor;
            stroke-width: 2;
            stroke-linecap: round;
            stroke-linejoin: round;
            fill: none;
          }
        `}</style>
      )}
    </div>
  );
}

// Add Globe icon if not available
const Globe = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);