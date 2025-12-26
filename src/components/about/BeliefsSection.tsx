"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { Cross, Globe, Shield, Star, Heart, Target, Zap, Users, BookOpen, Eye } from "lucide-react";

const beliefs = [
  {
    text: "We believe in the Triune God—God the Father, God the Son, and God the Holy Spirit—one God in three persons.",
    icon: Cross,
    color: "from-amber-400 to-amber-500",
    theme: "amber"
  },
  {
    text: "We believe God is the final authority over all creation, salvation of mankind, and the coming final judgment.",
    icon: Globe,
    color: "from-amber-500 to-amber-600",
    theme: "amber"
  },
  {
    text: "We believe Scripture is God-breathed and written through the divine leading of the Holy Spirit. It gives the final authority pertaining to all Christian faith and life matters.",
    icon: Cross,
    color: "from-amber-500 to-amber-600",
    theme: "amber"
  },
  {
    text: "We believe, since Adam, all humankind has sinned and therefore falls under God's judgment.",
    icon: Shield,
    color: "from-amber-500 to-amber-600",
    theme: "amber"
  },
  {
    text: "We believe salvation from sin is only obtained through faith in Jesus Christ, who atoned for our sin through His substitutionary death on the cross.",
    icon: Heart,
    color: "from-amber-500 to-amber-600",
    theme: "amber"
  },
  {
    text: "We believe in the resurrection and bodily ascension of Jesus Christ, who is now at the right hand of God the Father.",
    icon: Star,
    color: "from-amber-500 to-amber-600",
    theme: "amber"
  },
  {
    text: "We believe in the Church of Christ, His body, in which true believers are members.",
    icon: Users,
    color: "from-amber-500 to-amber-600",
    theme: "amber"
  },
  {
    text: "We believe it is the Holy Spirit who convicts, leads to repentance, and regenerates sinners into a new life. He also empowers believers to carry out God's mission.",
    icon: Zap,
    color: "from-amber-500 to-amber-600",
    theme: "amber"
  },
  {
    text: "We believe that righteousness is obtained through the grace that comes only from faith in Jesus Christ.",
    icon: Target,
    color: "from-amber-500 to-amber-600",
    theme: "amber"
  },
  {
    text: "We believe the Holy Spirit dwells in believers' lives and effects the work of salvation.",
    icon: BookOpen,
    color: "from-amber-500 to-amber-600",
    theme: "amber"
  },
  {
    text: "We believe in the resurrection of the dead, the judgment of the world, and the existence of eternal life.",
    icon: Eye,
    color: "from-amber-500 to-amber-600",
    theme: "amber"
  },
  {
    text: "We believe in the bodily, second coming of Jesus Christ.",
    icon: Cross,
    color: "from-amber-500 to-amber-600",
    theme: "amber"
  }
];

export default function BeliefsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const headerScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  const getThemeClasses = (theme: string) => {
    const classes = {
      
      amber: {
        bg: "bg-amber-50",
        text: "text-amber-700",
        border: "border-amber-200",
        hover: "hover:bg-amber-100",
        gradient: "from-amber-400 to-amber-500"
      }
    };
    return classes[theme as keyof typeof classes];
  };

  return (
    <section 
      ref={containerRef}
      className="relative w-full overflow-hidden bg-gradient-to-b from-white via-sky-50/20 to-white py-24 md:py-32"
    >

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">     

        {/* Enhanced Beliefs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beliefs.map((belief, index) => {
            const themeClasses = getThemeClasses(belief.theme);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 100,
                }}
                className="relative"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <motion.div
                  animate={{
                    y: hoveredCard === index ? -10 : 0,
                    scale: hoveredCard === index ? 1.03 : 1,
                    rotateY: hoveredCard === index ? 5 : 0,
                    rotateX: hoveredCard === index ? -2 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className={`relative h-full rounded-2xl border-2 ${themeClasses.border} ${themeClasses.bg} ${themeClasses.hover} backdrop-blur-sm overflow-hidden group cursor-pointer`}
                  style={{
                    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(255, 255, 255, 0.8)",
                  }}
                >
                  {/* Animated Background Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${belief.color} opacity-0 group-hover:opacity-5`}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Card Content */}
                  <div className="relative p-6">
                    
                    <motion.p
                      animate={{
                        x: hoveredCard === index ? 5 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                      className={`${themeClasses.text} leading-relaxed text-sm md:text-base`}
                    >
                      {belief.text}
                    </motion.p>

                   
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