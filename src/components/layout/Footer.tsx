'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Mail, ArrowUpRight, Cross, Send, ChevronRight
} from 'lucide-react';
import Image from 'next/image';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <motion.footer 
      className="relative bg-white text-gray-200 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_95%,rgba(255,255,255,0.1)_100%)] bg-[size:60px]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_95%,rgba(255,255,255,0.1)_100%)] bg-[size:60px]" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-15">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              
                <div className="relative flex items-center justify-center">
        <Image
          src="/images.png" // update path if needed
          alt="EvaSUE Logo"
          width={136}
          height={76}
          className="object-contain"
          priority
        />
      </div>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Advancing The Kingdom Of God By Serving Students
            </p>        
          </motion.div>

          {/* Quick Links Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            
            <ul className="space-y-3">
              {[
                { label: "Who We Are", href: "/page/about/who-we-are" },
                { label: "Our Beliefs", href: "/page/about/believe" },
                { label: "Core Values", href: "/page/about/core-values" },
                { label: "Commitment", href: "/page/about/commitments" }
              ].map((link) => {
                
                return (
                  <motion.li
                    key={link.href}
                    onMouseEnter={() => setHoveredLink(link.label)}
                    onMouseLeave={() => setHoveredLink(null)}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link 
                      href={link.href} 
                      className="flex items-center gap-3 text-slate-700 hover:text-sky-400 transition-colors duration-300 group"
                    >
                      <motion.div
                        animate={{ 
                          rotate: hoveredLink === link.label ? 360 : 0,
                          scale: hoveredLink === link.label ? 1.2 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                        className="w-5 h-5"
                      >
                      </motion.div>
                      <span className="flex-1">{link.label}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>

          {/* Get Involved Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            
            <ul className="space-y-3">
              {[
                { label: "Why We Exist", href: "/page/about/why-we-exist" },
                { label: "Discipleship & Leadership", href: "/page/student/discipleship" },
                { label: "Evangelism & Mission", href: "/page/student/evangelisms" },
                { label: "Make Donation", href: "/give" }
              ].map((link) => (
                <motion.li
                  key={link.href}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    href={link.href} 
                    className={`flex items-center gap-2 text-slate-700 transition-colors duration-300 group`}
                  >
                    <div className={`w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    <span className="flex-1">{link.label}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
           
            <p className="text-slate-700 text-sm">
              Subscribe to our newsletter for updates, events, and spiritual insights.
            </p>
            
            <AnimatePresence mode="wait">
              {subscribed ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-4 bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 border border-emerald-500/20 rounded-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-emerald-300 font-medium">
                      Thank you for subscribing!
                    </span>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  onSubmit={handleSubscribe}
                  className="space-y-4"
                >
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <input
                      type="email"
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-white/5 backdrop-blur-sm border border-sky-600/20 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition-all duration-300 placeholder-slate-500"
                      required
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full group relative overflow-hidden bg-gradient-to-r from-red-500 to-red-600 text-white py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Subscribe
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.4 }}
                    />
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-red/10 pt-2">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="text-center md:text-left"
            >
              <p className="text-slate-500 text-sm">
                &copy; {currentYear} EvaSUE.
              </p>
              <p className="text-slate-600 text-xs mt-1">
                የኢትዮጵያ ወንጌላዊያን ተማሪዎችና ምሩቃን ማህበር (ኢቫሱ)
              </p>
              <p className="text-slate-600 text-xs">
                Evangelical Students’ and Graduates’ Union of Ethiopia
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};