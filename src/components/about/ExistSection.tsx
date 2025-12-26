"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function ExistSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const purposes = [
    {
      title: "God's Purpose is Our Core",
      description: "We advance the Kingdom of God by equipping students to influence universities, nations, and the world.",
      extendedDescription: "Our mission flows from God's eternal purpose to reconcile all things to Himself through Christ.",
      color: "amber",
      features: [
        "Kingdom-focused mission",
        "Christ-centered approach",
        "Eternal purpose alignment"
      ]
    },
    {
      title: "Our Focus: Students",
      description: "Changing students today shapes the world tomorrow. University years define the next 40 years of impact.",
      extendedDescription: "Students represent future leaders, innovators, and influencers who will transform societies.",
      color: "amber",
      features: [
        "Future leaders development",
        "Formative years investment",
        "Generational impact"
      ]
    },
    {
      title: "Our Method: Serving",
      description: "We serve with humility and love, following Christ's example of putting others first.",
      extendedDescription: "Service is our identity—embodying Christ's servant leadership in practical, tangible ways.",
      color: "amber",
      features: [
        "Humility in action",
        "Love-driven service",
        "Christ-like leadership"
      ]
    },
    {
      title: "Our Impact: Transformed Society",
      description: "Through evangelism, discipleship, and leadership development, we build cultures of Kingdom values.",
      extendedDescription: "We measure success by societal transformation through changed lives and communities.",
      color: "amber",
      features: [
        "Evangelism & discipleship",
        "Leadership development",
        "Cultural transformation"
      ]
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "amber":
        return {
          text: "text-amber-600",
          bg: "bg-amber-50",
          border: "border-amber-100",
          hover: "bg-amber-100",
          accent: "bg-amber-500"
        };
      default:
        return {
          text: "text-blue-600",
          bg: "bg-blue-50",
          border: "border-blue-100",
          hover: "bg-blue-100",
          accent: "bg-blue-500"
        };
    }
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
      

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {purposes.map((purpose, index) => {
            const colors = getColorClasses(purpose.color);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="relative group"
              >
                {/* Card */}
                <motion.div
                  animate={{
                    y: hoveredCard === index ? -8 : 0,
                    boxShadow: hoveredCard === index 
                      ? "0 20px 40px rgba(0, 0, 0, 0.1)" 
                      : "0 4px 12px rgba(0, 0, 0, 0.05)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className={`relative h-full ${colors.bg} ${colors.border} border-2 rounded-2xl overflow-hidden transition-all duration-300`}
                >
                  {/* Content */}
                  <div className="p-6 md:p-8">
                    {/* Icon Header */}
                    <div className="flex items-start justify-between mb-6">
                      
                      
                      {/* Arrow Indicator */}
                      <motion.div
                        animate={{ x: hoveredCard === index ? 5 : 0 }}
                        transition={{ duration: 0.2 }}
                        className={`${colors.text} opacity-0 group-hover:opacity-100 transition-opacity`}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </div>

                    {/* Title */}
                    <h3 className={`text-xl md:text-2xl font-bold ${colors.text} mb-4`}>
                      {purpose.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {purpose.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-3 mb-8">
                      {purpose.features.map((feature, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + i * 0.05 }}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle className={`w-5 h-5 ${colors.text}`} />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Extended Description (on hover) */}
                    <AnimatePresence>
                      {hoveredCard === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-6 pt-6 border-t border-gray-200"
                        >
                          <p className="text-gray-500 text-sm leading-relaxed">
                            {purpose.extendedDescription}
                          </p>
                          
                          {/* Action Button */}
                          
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Bottom Accent */}
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-1 ${colors.accent} bg-opacity-30`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.8 }}
                  />
                </motion.div>

                {/* Connection Line (for desktop) */}
                {index < purposes.length - 1 && index % 2 === 0 && (
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-300 via-purple-300 to-emerald-300"
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}