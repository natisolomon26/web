"use client";

import React, { useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

export default function DiscipleshipMinistry() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const strategies = [
    {
      title: "Bible Study",
      description: "Knowing and obeying the Scriptures is core to discipleship. We support the spiritual growth of students by helping them develop a love for the Word of God through group Bible studies.",
      extendedDescription: "Our Bible study programs go beyond surface-level reading to deep theological engagement. We equip students to interpret, apply, and live out God's Word in their daily lives, fostering a transformative relationship with Scripture.",
      color: "amber",
      gradient: "from-amber-500 via-amber-400 to-amber-600",
    },
    {
      title: "Small Group",
      description: "Since community is essential for spiritual development, we encourage small group ministry among students — promoting Mission, Fellowship, Prayer and Nurturing.",
      extendedDescription: "Intimate settings where authentic relationships form. Our small groups create safe spaces for vulnerability, accountability, and spiritual growth through shared experiences and mutual support.",
      color: "amber",
      gradient: "from-amber-500 via-amber-400 to-amber-600",
    },
    {
      title: "Trainings",
      description: "We prepare students for campus life and life after university by offering trainings on key spiritual, academic, and life topics.",
      extendedDescription: "Comprehensive training modules covering spiritual disciplines, leadership skills, and practical life skills. Our workshops and seminars prepare students to navigate both campus life and future careers with wisdom and faith.",
      color: "amber",
      gradient: "from-amber-500 via-amber-400 to-amber-600",
    },
    {
      title: "Local Church Connections",
      description: "We help students stay strongly connected with their local churches before and after graduation.",
      extendedDescription: "Building bridges between campus ministry and local congregations. We facilitate meaningful connections that ensure students remain rooted in church communities throughout their academic journey and beyond.",
      color: "amber",
      gradient: "from-amber-500 via-amber-400 to-amber-600",
    },
    {
      title: "Leadership Development",
      description: "We develop leadership skills through reading, discussions, mentorship, and exposure to ministry opportunities.",
      extendedDescription: "Nurturing servant leaders who lead with Christ-like character. Our leadership development program combines mentorship, practical ministry experience, and character formation to raise the next generation of Christian leaders.",
      color: "amber",
      gradient: "from-amber-500 via-amber-400 to-amber-600",
    },
        {
      title: "Train Student Leaders",
      description: "We equip student leaders through targeted training on biblical leadership, character, and practical ministry skills to serve effectively on campus.",
      extendedDescription: "Our comprehensive leadership training program includes workshops on servant leadership, conflict resolution, team building, and spiritual disciplines, preparing students to lead with integrity and wisdom.",
      color: "amber",
      gradient: "from-amber-500 via-amber-400 to-amber-600",
    },
    {
      title: "Small Group Ministry Training",
      description: "We train leaders to launch and shepherd small groups — spaces for discipleship, prayer, and authentic fellowship among students.",
      extendedDescription: "Specialized training in small group dynamics, facilitation skills, pastoral care, and creating environments where authentic community and spiritual growth can flourish.",
      color: "amber",
      gradient: "from-amber-500 via-amber-400 to-amber-600",
    },
    {
      title: "Model Leadership in Service",
      description: "Our Campus Staff Workers walk alongside student leaders, modeling Christ-like service and leadership in real campus ministry contexts.",
      extendedDescription: "Staff members provide hands-on coaching, demonstrating servant leadership through practical ministry involvement and sharing life-on-life discipleship experiences.",
      color: "amber",
      gradient: "from-amber-500 via-amber-400 to-amber-600",
    },
    {
      title: "Build Skills Through Growth",
      description: "We challenge leaders to grow through reading, discussions, and new responsibilities — developing wisdom, vision, and resilience.",
      extendedDescription: "Development programs that include leadership reading circles, skill-building workshops, and progressive responsibility assignments to build competence and confidence.",
      color: "amber",
      gradient: "from-amber-500 via-amber-400 to-amber-600",
    },
    {
      title: "Character Development",
      description: "Focusing on developing Christ-like character, integrity, and emotional intelligence as foundational to effective leadership.",
      extendedDescription: "Character formation programs that emphasize humility, courage, wisdom, and other virtues essential for leading with authenticity and impact.",
      color: "amber",
      gradient: "from-amber-500 via-amber-400 to-amber-600",
    },
  ];

  const getColorClass = (color: string, type: string) => {
    const classes = {
      amber: {
        text: "text-amber-600",
        hover: "text-amber-700",
        bg: "bg-amber-500",
        light: "bg-amber-500/10",
        border: "border-amber-500/20",
        gradient: "from-amber-500/20 to-amber-600/10"
      }
    };
    return classes[color as keyof typeof classes][type as keyof (typeof classes)[keyof typeof classes]];
  };

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-sky-50/30 to-white py-24 md:py-32">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strategies.map((strategy, index) => {
            const colorClasses = getColorClass(strategy.color, "text");
            const hoverColorClasses = getColorClass(strategy.color, "hover");
            const bgColorClasses = getColorClass(strategy.color, "bg");
            const lightColorClasses = getColorClass(strategy.color, "light");
            const borderColorClasses = getColorClass(strategy.color, "border");
            const gradientClasses = getColorClass(strategy.color, "gradient");

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.08,
                  type: "spring",
                  stiffness: 100,
                }}
                className="relative"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setActiveCard(activeCard === index ? null : index)}
              >
                {/* Main Card */}
                <motion.div
                  animate={{
                    y: hoveredCard === index ? -10 : 0,
                    scale: hoveredCard === index ? 1.03 : 1,
                    rotateY: hoveredCard === index ? 3 : 0,
                    rotateX: hoveredCard === index ? -2 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="relative h-full bg-white/95 backdrop-blur-sm rounded-2xl border border-white/30 shadow-xl overflow-hidden group cursor-pointer"
                  style={{
                    boxShadow: "0 10px 40px rgba(14, 165, 233, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.8)",
                  }}
                >
                  {/* Animated Background Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${gradientClasses} opacity-0 group-hover:opacity-100`}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Floating Particles */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[1, 2, 3].map((particle) => (
                      <motion.div
                        key={particle}
                        className="absolute w-1 h-1 rounded-full bg-current"
                        style={{
                          left: `${20 + particle * 15}%`,
                          top: `${30 + particle * 10}%`,
                          color: bgColorClasses,
                        }}
                        animate={{
                          y: [0, -20, 0],
                          opacity: [0, 0.8, 0],
                        }}
                        transition={{
                          duration: 2 + particle,
                          repeat: Infinity,
                          delay: particle * 0.3,
                        }}
                      />
                    ))}
                  </div>

                  {/* Card Content */}
                  <div className="relative p-6 md:p-7">
                    {/* Icon and Header */}
                    <div className="flex items-start justify-between mb-5">
                      <motion.div
                        animate={{
                          rotateY: hoveredCard === index ? 360 : 0,
                          scale: hoveredCard === index ? 1.2 : 1,
                        }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                      >
                        {/* Icon Background Glow */}
                        <motion.div
                          className={`absolute inset-0 rounded-xl ${bgColorClasses} opacity-0 group-hover:opacity-20 blur-xl`}
                          animate={{ scale: hoveredCard === index ? 1.5 : 1 }}
                          transition={{ duration: 0.4 }}
                        />
                        {/* Corner Accents */}
                      </motion.div>
                      
                      {/* Stats Badge */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-right"
                      >
                      </motion.div>
                    </div>

                    {/* Title */}
                    <motion.h3
                      animate={{
                        x: hoveredCard === index ? 3 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                      className={`text-xl font-bold ${colorClasses} mb-4`}
                    >
                      {strategy.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      animate={{
                        height: hoveredCard === index ? "auto" : "4.8rem",
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-600 leading-relaxed mb-6 overflow-hidden"
                    >
                      {strategy.description}
                    </motion.p>

                    {/* Extended Description on Hover */}
                    <AnimatePresence>
                      {hoveredCard === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-6 pt-6 border-t border-gray-100"
                        >
                          <p className="text-sm text-gray-500 mb-4">
                            {strategy.extendedDescription}
                          </p>
                          
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Progress Indicator */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden rounded-b-2xl"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.05, duration: 0.8 }}
                    >
                      <motion.div
                        className={`h-full ${bgColorClasses}`}
                        animate={{
                          x: hoveredCard === index ? ["0%", "100%", "0%"] : "0%",
                        }}
                        transition={{
                          duration: 2,
                          repeat: hoveredCard === index ? Infinity : 0,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.div>
                  </div>
                </motion.div>                
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}