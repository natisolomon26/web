"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Users, Target } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Purpose-Driven",
    description: "Leadership rooted in clarity, values, and long-term vision.",
  },
  {
    icon: Users,
    title: "Community-Focused",
    description: "Built on mentorship, trust, and shared responsibility.",
  },
  {
    icon: Sparkles,
    title: "Transformational",
    description: "Equipping leaders to create meaningful, lasting impact.",
  },
];

export default function About() {
  return (
    <section className="relative bg-white py-24 overflow-hidden">
      {/* Decorative Background Orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-sky-100 rounded-full blur-3xl opacity-60" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-semibold tracking-wide text-sky-600 uppercase mb-3">
              About Us
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              We are a fellowship
            </h2>

            <p className="text-lg text-justify text-slate-600 leading-relaxed mb-6">
              We are a Fellowship of Students and Graduates who are dedicated to Follow and Witness Jesus Christ as Lord and Savior. We have fellowship with each other since we have “fellowship with the Father and His Son Jesus Christ”, both individually and communally.
            </p>
            <p className="text-lg text-justify text-slate-600 leading-relaxed mb-6">
              Our individual fellowship with Christ, which has begun with our faith in Jesus Christ as our Lord and Savior, has made us part and parcel of the universal, time-transcending Christ-community, bound to the Triune God in communion.
            </p>
             <p className="text-lg text-justify text-slate-600 leading-relaxed mb-6">
              “Students” in EvaSUE, refers to the evangelical students who are in Secondary Education Institutes (High Schools) and Tertiary Education Institutes (Colleges and Universities) in both private and government owned institutes.
            </p>
            {/* Feature List */}
            
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative w-full h-[440px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/bg3.JPG"
                alt="Leadership and community"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Image Decoration */}
            <div className="absolute -bottom-8 -left-8 w-40 h-40 border-2 border-sky-200 rounded-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
