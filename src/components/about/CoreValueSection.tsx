"use client";

import Image from "next/image";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState } from "react";

interface CoreValue {
  title: string;
  description: string;
  image: string;
  overlayColor: string;
  accentColor: string;
}

export default function CoreValuesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const cardScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  const coreValues: CoreValue[] = [
    {
      title: "Centrality of God's Word",
      description: "We affirm Scripture as the revelation of God's person and will, culminating in Jesus Christ. The Bible is our foundation for life, transformation, and ministry.",
      image: "/images/bg1.jpg",
      overlayColor: "from-amber-600/55 via-amber-700/50 to-amber-500/50",
      accentColor: "text-sky-400",
    },
    {
      title: "Student Focused",
      description: "EvaSUE exists for students. Our mission is to serve and equip them to advance God's Kingdom in their campuses, communities, and future careers.",
      image: "/images/bg2.JPG",
      overlayColor: "from-amber-600/55 via-amber-700/50 to-amber-500/50",
      accentColor: "text-emerald-400",
    },
    {
      title: "Unity in Diversity",
      description: "We believe Christ unites us across denomination, ethnicity, language, and economy. In Him, we are one body, celebrating our diversity in unity.",
      image: "/images/bg3.JPG",
      overlayColor: "from-amber-600/55 via-amber-700/50 to-amber-500/50",
      accentColor: "text-red-400",
    },
  ];

  return (
    <section 
      ref={containerRef}
      className="relative w-full overflow-hidden bg-gradient-to-b from-white via-sky-50/20 to-white py-20 md:py-28"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <motion.div 
          className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-sky-400/5 via-transparent to-transparent rounded-full blur-3xl"
          animate={{
            y: [-40, 40, -40],
            x: [-20, 20, -20],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tr from-red-400/5 via-transparent to-transparent rounded-full blur-3xl"
          animate={{
            y: [40, -40, 40],
            x: [20, -20, 20],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Floating geometric shapes */}
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm"
            style={{
              width: `${30 + i * 10}px`,
              height: `${30 + i * 10}px`,
              left: `${5 + i * 15}%`,
              top: `${10 + i * 12}%`,
            }}
            animate={{
              y: [0, -25, 0],
              x: [0, i % 2 === 0 ? 20 : -20, 0],
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">


        {/* Enhanced Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {coreValues.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              className="relative"
              onMouseEnter={() => {
                setHoveredCard(index);
                setActiveCard(index);
              }}
              onMouseLeave={() => {
                setHoveredCard(null);
                setActiveCard(null);
              }}
            >
              {/* Main Card Container */}
              <motion.div
                style={{ scale: cardScale }}
                animate={{
                  y: hoveredCard === index ? -10 : 0,
                  scale: hoveredCard === index ? 1.03 : 1,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="relative h-[420px] rounded-3xl overflow-hidden group cursor-pointer"
              >
                {/* Background Image with Parallax */}
                <div className="absolute inset-0 overflow-hidden">
                  <motion.div
                    animate={{
                      scale: hoveredCard === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </motion.div>
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.overlayColor}`} />
                  
                  {/* Animated Light Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: hoveredCard === index ? "100%" : "-100%" }}
                    transition={{ duration: 0.8 }}
                  />
                </div>

                {/* Content Container */}
                <div className="relative h-full flex flex-col justify-between p-6 md:p-8">
                  <div className="flex items-start justify-between">
                  </div>

                  {/* Middle Section - Content */}
                  <div className="space-y-4">
                    <motion.h3
                      animate={{ 
                        x: hoveredCard === index ? 5 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                      className="text-2xl md:text-3xl font-bold text-white leading-tight"
                    >
                      {card.title}
                    </motion.h3>
                    
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ 
                        opacity: hoveredCard === index ? 1 : 0,
                        height: hoveredCard === index ? "auto" : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-white/90 leading-relaxed text-sm md:text-base">
                        {card.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Bottom Section - Interactive Element */}
                  <motion.div
                    animate={{ 
                      opacity: hoveredCard === index ? 1 : 0.5,
                      scale: hoveredCard === index ? 1 : 0.95,
                    }}
                    className="flex items-center justify-between pt-4 border-t border-white/20"
                  >
                    
                    
                    {/* Progress indicator */}
                    <div className="w-8 h-0.5 bg-white/30 overflow-hidden rounded-full">
                      <motion.div
                        className="h-full bg-white"
                        initial={{ width: "0%" }}
                        animate={{ width: hoveredCard === index ? "100%" : "0%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Border Glow Effect */}
                <div className={`absolute inset-0 rounded-3xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${card.accentColor.replace('text-', 'border-')}/30`} />
                
                {/* Corner Accents */}
                
                <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-white/30 rounded-bl-lg" />
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-white/30 rounded-br-lg" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
      
      </div>
    </section>
  );
}