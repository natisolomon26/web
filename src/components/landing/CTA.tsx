"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ArrowRight,
} from "lucide-react";

export default function CTA() {
  return (
    <section className="relative bg-sky-900 overflow-hidden shadow-sm">
      {/* Decorative Background Elements */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-sky-200/40 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-rose-200/40 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto px-8 py-10 md:px-14 md:py-15 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold tracking-tight text-white"
        >
          Stay Connected With Us
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-lg text-white"
        >
          Follow our journey, connect with our community, and stay updated with
          leadership initiatives and campus impact.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/donate"
            className="inline-flex items-center justify-center gap-2 bg-red-600 px-8 py-3 text-sm font-semibold text-white hover:bg-red-700 transition"
          >
            Donate
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/page/contact"
            className="inline-flex items-center justify-center border border-white px-8 py-3 text-sm font-medium text-white hover:bg-sky-50 hover:text-sky-600 transition"
          >
            Contact Us
          </Link>
        </motion.div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex justify-center gap-5"
        >
          {[
            { Icon: Facebook, href: "#" },
            { Icon: Instagram, href: "#" },
            { Icon: Twitter, href: "#" },
            { Icon: Linkedin, href: "#" },
          ].map(({ Icon, href }, index) => (
            <Link
              key={index}
              href={href}
              className="p-3 rounded-full bg-sky-100 text-sky-600 hover:bg-sky-100 hover:text-sky-600 transition"
            >
              <Icon className="w-5 h-5" />
            </Link>
          ))}
        </motion.div>
      </div>

      {/* Decorative Border Line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full" />
    </section>
  );
}
