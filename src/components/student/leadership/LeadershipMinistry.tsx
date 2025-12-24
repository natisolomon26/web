"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Target,
  Crown
} from "lucide-react";

type LeadershipColor = "amber" | "orange" | "yellow" | "red" | "rose";

interface LeadershipCardProps {
  title: string;
  description: string;
  extendedDescription?: string;
  color: LeadershipColor;
  stats?: { value: string; label: string };
  delay: number;
}

interface LeadershipStrategy {
  title: string;
  description: string;
  extendedDescription?: string;
  color: LeadershipColor;
}


const LeadershipCard = ({ 
  title, 
  description, 
  extendedDescription,
  color,
  stats,
  delay 
}: LeadershipCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const COLORS = {
    amber: {
      text: "text-sky-600",
      hover: "text-sky-700",
      bg: "bg-sky-500",
      light: "bg-sky-500/10",
      border: "border-sky-500/20",
    },
    orange: {
      text: "text-orange-600",
      hover: "text-orange-700",
      bg: "bg-orange-500",
      light: "bg-orange-500/10",
      border: "border-orange-500/20",
    },
    yellow: {
      text: "text-yellow-600",
      hover: "text-yellow-700",
      bg: "bg-yellow-500",
      light: "bg-yellow-500/10",
      border: "border-yellow-500/20",
    },
    red: {
      text: "text-red-600",
      hover: "text-red-700",
      bg: "bg-red-500",
      light: "bg-red-500/10",
      border: "border-red-500/20",
    },
    rose: {
      text: "text-rose-600",
      hover: "text-rose-700",
      bg: "bg-rose-500",
      light: "bg-rose-500/10",
      border: "border-rose-500/20",
    }
  } as const;

  const colorClasses = COLORS[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, type: "spring" }}
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={{
          y: isHovered ? -10 : 0,
          scale: isHovered ? 1.03 : 1,
          rotateY: isHovered ? 3 : 0,
          rotateX: isHovered ? -2 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="relative h-full bg-white/95 backdrop-blur-sm rounded-2xl border border-white/30 shadow-xl overflow-hidden group cursor-pointer"
        style={{
          boxShadow: "0 10px 40px rgba(245, 158, 11, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.8)",
        }}
      >
        {/* Animated Background Gradient */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br `}
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
                color: colorClasses.bg,
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
          {/* Icon and Stats */}
          <div className="flex items-start justify-between mb-5">
            <motion.div
              animate={{
                rotateY: isHovered ? 360 : 0,
                scale: isHovered ? 1.2 : 1,
              }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Icon Background Glow */}
              <motion.div
                className={`absolute inset-0 rounded-xl ${colorClasses.bg} opacity-0 group-hover:opacity-20 blur-xl`}
                animate={{ scale: isHovered ? 1.5 : 1 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
            
            {/* Stats Badge */}
            {stats && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: delay + 0.2 }}
                className="text-right"
              >
                <div className={`text-2xl font-bold ${colorClasses.text}`}>{stats.value}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">{stats.label}</div>
              </motion.div>
            )}
          </div>

          {/* Title */}
          <motion.h3
            animate={{
              x: isHovered ? 3 : 0,
            }}
            transition={{ duration: 0.2 }}
            className={`text-xl font-bold ${colorClasses.text} mb-4`}
          >
            {title}
          </motion.h3>

          {/* Description */}
          <motion.p
            animate={{
              height: isHovered ? "auto" : "4.8rem",
            }}
            transition={{ duration: 0.3 }}
            className="text-gray-600 leading-relaxed mb-6 overflow-hidden"
          >
            {description}
          </motion.p>

          {/* Extended Description on Hover */}
          <AnimatePresence>
            {isHovered && extendedDescription && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 pt-6 border-t border-gray-100"
              >
                <p className="text-sm text-gray-500 mb-4">
                  {extendedDescription}
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
            transition={{ delay: delay + 0.3, duration: 0.8 }}
          >
            <motion.div
              className={`h-full ${colorClasses.bg}`}
              animate={{
                x: isHovered ? ["0%", "100%", "0%"] : "0%",
              }}
              transition={{
                duration: 2,
                repeat: isHovered ? Infinity : 0,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Card Number */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.4 }}
        className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-red-500 text-white flex items-center justify-center text-xs font-bold shadow-lg z-10"
      >
        <Crown className="w-3 h-3" />
      </motion.div>
    </motion.div>
  );
};

export default function LeadershipMinistry() {
  const strategies: LeadershipStrategy[] =[
    {
      title: "Train Student Leaders",
      description: "We equip student leaders through targeted training on biblical leadership, character, and practical ministry skills to serve effectively on campus.",
      extendedDescription: "Our comprehensive leadership training program includes workshops on servant leadership, conflict resolution, team building, and spiritual disciplines, preparing students to lead with integrity and wisdom.",
      color: "amber",
     
    },
    {
      title: "Small Group Ministry Training",
      description: "We train leaders to launch and shepherd small groups — spaces for discipleship, prayer, and authentic fellowship among students.",
      extendedDescription: "Specialized training in small group dynamics, facilitation skills, pastoral care, and creating environments where authentic community and spiritual growth can flourish.",
      color: "orange",
    },
    {
      title: "Model Leadership in Service",
      description: "Our Campus Staff Workers walk alongside student leaders, modeling Christ-like service and leadership in real campus ministry contexts.",
      extendedDescription: "Staff members provide hands-on coaching, demonstrating servant leadership through practical ministry involvement and sharing life-on-life discipleship experiences.",
      color: "yellow",
    },
    {
      title: "Build Skills Through Growth",
      description: "We challenge leaders to grow through reading, discussions, and new responsibilities — developing wisdom, vision, and resilience.",
      extendedDescription: "Development programs that include leadership reading circles, skill-building workshops, and progressive responsibility assignments to build competence and confidence.",
      color: "rose",
    },
    {
      title: "Character Development",
      description: "Focusing on developing Christ-like character, integrity, and emotional intelligence as foundational to effective leadership.",
      extendedDescription: "Character formation programs that emphasize humility, courage, wisdom, and other virtues essential for leading with authenticity and impact.",
      color: "amber",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-sky-50/20 to-white py-24 md:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-amber-400/10 via-transparent to-transparent rounded-full blur-3xl"
          animate={{
            y: [-60, 60, -60],
            x: [-40, 40, -40],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tr from-orange-400/10 via-transparent to-transparent rounded-full blur-3xl"
          animate={{
            y: [60, -60, 60],
            x: [40, -40, 40],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Floating crowns */}
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className="absolute text-amber-400/20"
            style={{
              left: `${5 + i * 20}%`,
              top: `${10 + i * 15}%`,
            }}
            animate={{
              y: [0, -40, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Crown className="w-10 h-10" />
          </motion.div>
        ))}

        {/* Geometric shapes */}
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm"
            style={{
              width: `${30 + i * 10}px`,
              height: `${30 + i * 10}px`,
              left: `${10 + i * 15}%`,
              top: `${15 + i * 10}%`,
            }}
            animate={{
              y: [0, -25, 0],
              x: [0, i % 2 === 0 ? 20 : -20, 0],
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          {/* Animated Badge */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.6 }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-red-500 rounded-full blur-lg opacity-30 animate-pulse" />
              <div className="relative px-6 py-2.5 bg-white/80 backdrop-blur-sm rounded-full border border-white/50">
                <div className="flex items-center gap-2">
                  <motion.div
                    className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                    animate={{ scale: [1, 1.4, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-sm font-semibold text-sky-700 uppercase tracking-wider">
                    Leadership Development
                  </span>
                  <Target className="w-3 h-3 text-red-500" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Heading with Gradient */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-sky-600 via-sky-700 to-sky-600 bg-clip-text text-transparent">
              Leadership
            </span>
            {" "}
            <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-500 bg-clip-text text-transparent">
              Strategies
            </span>
          </motion.h2>

          {/* Animated Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-sky-700/80 max-w-3xl mx-auto leading-relaxed"
          >
            We are committed to raising servant leaders who reflect Christ in character, vision, and action — transforming campuses through empowered leadership.
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "140px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
            className="h-1 bg-gradient-to-r from-sky-400 via-red-400 to-red-700 rounded-full mx-auto mt-8"
          />
        </motion.div>

        {/* Enhanced Strategies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strategies.map((strategy, index) => (
            <LeadershipCard
  key={index}
  title={strategy.title}
  description={strategy.description}
  extendedDescription={strategy.extendedDescription}
  color={strategy.color}
  delay={index * 0.08}
/>

          ))}
        </div>
      </div>
    </section>
  );
}