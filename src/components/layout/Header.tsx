"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 30);
      setHidden(currentY > lastScrollY && currentY > 100);
      setLastScrollY(currentY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { label: "Home", link: "/" },
    {
      label: "About",
      subMenu: [
        { label: "What we believe", link: "/page/about/believe" },
        { label: "Who we are", link: "/page/about/who-we-are" },
        { label: "Leadership", link: "/page/about/leadership" },
        { label: "General Secretary", link: "/page/about/general-secretary" }
      ],
    },
    {
      label: "Student Ministry",
      subMenu: [
        { label: "Discipleship", link: "/page/student/discipleship" },
        { label: "Leadership Dev't", link: "/page/student/leadership" },
        { label: "Evangelism and Mission", link: "/student/evangelism" },
      ],
    },
    
    {
      label: "Resource",
      subMenu: [
        { label: "Videos", link: "/page/videos" },
      ],
    },
    { label: "Contact", link: "/contact" }
  ];

  // Color themes for hover effects
  const colorThemes = {
    "Home": { primary: "from-sky-500 to-sky-400", secondary: "from-sky-100 to-sky-50" },
    "About": { primary: "from-sky-500 to-sky-600", secondary: "from-sky-100 to-sky-50" },
    "Student Ministry": { primary: "from-sky-500 to-sky-600", secondary: "from-sky-100 to-sky-50" },
    "Resource": { primary: "from-sky-500 to-sky-600", secondary: "from-sky-100 to-sky-50" },
    "Contact": { primary: "from-sky-500 to-sky-600", secondary: "from-sky-100 to-sky-50" },
    "default": { primary: "from-sky-500 to-blue-500", secondary: "from-sky-100 to-blue-50" }
  };

  const getTheme = (label: string) => {
    return colorThemes[label as keyof typeof colorThemes] || colorThemes.default;
  };

  // Framer Motion variants for dropdown
  const dropdownVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: -15,
      scale: 0.95,
      filter: "blur(10px)"
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      filter: "blur(0px)",
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 25,
        mass: 0.8,
        duration: 0.2
      }
    },
    exit: { 
      opacity: 0, 
      y: -10,
      filter: "blur(5px)",
      transition: { duration: 0.15 }
    },
  };

  // Framer Motion variants for mobile menu
  const mobileMenuVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: -20,
      scale: 0.98
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 25,
        duration: 0.3
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      scale: 0.98,
      transition: { duration: 0.2 }
    },
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Background with glass morphism effect */}
      <motion.div 
        className={`absolute inset-0 backdrop-blur-md transition-all duration-500 ${
          scrolled 
            ? "bg-white/90 border-b border-white/20 shadow-lg shadow-black/5" 
            : "bg-white/80"
        }`}
        initial={false}
        animate={{
          backdropFilter: scrolled ? "blur(10px)" : "blur(6px)",
        }}
      />
      
      {/* Animated gradient border bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px"
        animate={{
          scaleX: scrolled ? [0, 1, 0] : 0,
          background: hoveredItem 
            ? `linear-gradient(90deg, transparent, var(--hover-color), transparent)`
            : "linear-gradient(90deg, transparent, #38bdf8, transparent)",
        }}
        transition={{
          duration: 2,
          repeat: scrolled ? Infinity : 0,
          ease: "easeInOut",
        }}
        style={{
          '--hover-color': hoveredItem 
            ? getTheme(hoveredItem).primary.split(' ')[0].replace('from-', '#') 
            : '#38bdf8'
        } as React.CSSProperties}
      />

      {/* Floating particles in header background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${10 + i * 25}%`,
              top: "50%",
              backgroundColor: hoveredItem 
                ? getTheme(hoveredItem).primary.split(' ')[0].replace('from-', '#') + '80'
                : '#38bdf8cc',
            }}
            animate={{
              y: [0, -5, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2 + i,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo with enhanced animation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <Link href="/" className="relative group">
            {/* Logo container with hover effects */}
            <motion.div
              className="relative flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Logo Image */}
              <div className="relative w-32 h-10 md:w-32 md:h-10">
                <Image
                  src="/images.png" // Update this path to your logo file
                  alt="EvaSUE Logo"
                  fill
                  className="object-contain drop-shadow-md"
                  sizes="(max-width: 768px) 10px, 108px"
                  priority
                />
                
                {/* Logo glow effect on hover */}
                <div className="absolute -inset-2 bg-gradient-to-r from-sky-400/20 via-blue-400/20 to-purple-400/20 blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500 rounded-full" />
              </div>
              
              {/* Logo text */}
              
            </motion.div>
            
            {/* Animated highlight effect */}
            <motion.div
              className="absolute -inset-2 bg-gradient-to-r from-sky-100/0 via-blue-100/50 to-sky-100/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
              initial={false}
            />
          </Link>
          
          {/* Mobile logo text */}
          <div className="md:hidden">
            <div className="flex flex-col ml-2">
              <span className="text-lg font-bold bg-gradient-to-r from-sky-700 to-sky-900 bg-clip-text text-transparent">
                EvaSUE
              </span>
            </div>
          </div>
        </motion.div>

        {/* Desktop Navigation and Give button */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          {/* Enhanced Navigation bar */}
          <motion.div 
            className="flex items-center rounded-3xl border border-white/40 bg-white/95 backdrop-blur-sm px-2 py-0.5 gap-2 lg:gap-3 shadow-sm shadow-black/5"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {navItems.map((item, index) => {
              const theme = getTheme(item.label);
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => {
                    setHoveredItem(item.label);
                    setOpenDropdown(item.label);
                  }}
                  onMouseLeave={() => {
                    setHoveredItem(null);
                    setOpenDropdown(null);
                  }}
                >
                  {/* Animated hover indicator line */}
                  <motion.div
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r ${theme.primary} rounded-full`}
                    initial={false}
                    animate={{
                      width: hoveredItem === item.label ? "100%" : "0%",
                      opacity: hoveredItem === item.label ? 1 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  />

                  {item.subMenu ? (
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === item.label ? null : item.label)
                      }
                      className="relative px-4 py-2.5 text-sm font-semibold text-sky-900 rounded-lg whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 group"
                    >
                      {/* Text with gradient hover */}
                      <motion.span
                        className={`relative z-10 bg-gradient-to-r ${hoveredItem === item.label ? `${theme.primary} bg-clip-text text-transparent` : 'text-sky-900'}`}
                        animate={{
                          backgroundPosition: hoveredItem === item.label ? ["0% 50%", "100% 50%", "0% 50%"] : "0% 50%",
                        }}
                        transition={{
                          duration: hoveredItem === item.label ? 3 : 0.2,
                          repeat: hoveredItem === item.label ? Infinity : 0,
                          ease: "linear",
                        }}
                        style={{
                          backgroundSize: hoveredItem === item.label ? "200% 200%" : "100% 200%",
                        }}
                      >
                        {item.label}
                      </motion.span>
                      
                      <motion.svg 
                        className={`w-3 h-3 ${hoveredItem === item.label ? `text-gradient ${theme.primary}` : 'text-sky-600'}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        animate={{ rotate: openDropdown === item.label ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </motion.svg>
                      
                      {/* Subtle background on hover */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${theme.secondary} rounded-lg`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredItem === item.label ? 0.8 : 0 }}
                        transition={{ duration: 0.2 }}
                      />
                      
                      {/* Pulsing dot for active */}
                      {openDropdown === item.label && (
                        <motion.div
                          className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500"
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                      )}
                    </button>
                  ) : (
                    <Link
                      href={item.link!}
                      className="relative px-4 py-2.5 text-sm font-semibold rounded-lg whitespace-nowrap transition-all duration-200 block group"
                    >
                      {/* Text with gradient hover */}
                      <motion.span
                        className={`relative z-10 bg-gradient-to-r ${hoveredItem === item.label ? `${theme.primary} bg-clip-text text-transparent` : 'text-sky-900'}`}
                        animate={{
                          backgroundPosition: hoveredItem === item.label ? ["0% 50%", "100% 50%", "0% 50%"] : "0% 50%",
                        }}
                        transition={{
                          duration: hoveredItem === item.label ? 3 : 0.2,
                          repeat: hoveredItem === item.label ? Infinity : 0,
                          ease: "linear",
                        }}
                        style={{
                          backgroundSize: hoveredItem === item.label ? "200% 200%" : "100% 200%",
                        }}
                      >
                        {item.label}
                      </motion.span>
                      
                      {/* Subtle background on hover */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${theme.secondary} rounded-lg`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredItem === item.label ? 0.8 : 0 }}
                        transition={{ duration: 0.2 }}
                      />
                      
                      {/* Glow effect */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                    </Link>
                  )}

                  {/* Enhanced Dropdown with matching theme */}
                  <AnimatePresence>
                    {item.subMenu && openDropdown === item.label && (
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={dropdownVariants}
                        className="absolute top-full left-0 mt-3 w-64 bg-white/95 backdrop-blur-xl border border-white/30 rounded-2xl shadow-2xl z-50 overflow-hidden"
                        style={{ 
                          boxShadow: "0 20px 60px rgba(14, 165, 233, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.8)",
                        }}
                      >
                        {/* Dropdown header with gradient */}
                        <div className={`px-5 py-3 bg-gradient-to-r ${theme.secondary} border-b border-white/30`}>
                          <span className={`text-sm font-bold bg-gradient-to-r ${theme.primary} bg-clip-text text-transparent`}>
                            {item.label}
                          </span>
                        </div>
                        
                        {/* Dropdown items */}
                        <div className="py-2">
                          {item.subMenu.map((sub, subIndex) => (
                            <motion.div
                              key={sub.label}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: subIndex * 0.05 }}
                            >
                              <Link
                                href={sub.link}
                                className="relative block px-5 py-3 text-sm font-medium text-sky-800 hover:text-sky-700 transition-colors duration-200 group/sub"
                                onMouseEnter={() => setHoveredItem(item.label)}
                              >
                                {/* Hover background with theme */}
                                <motion.div
                                  className={`absolute inset-0 bg-gradient-to-r ${theme.secondary} opacity-0 group-hover/sub:opacity-100`}
                                  initial={false}
                                  transition={{ duration: 0.2 }}
                                />
                                
                                {/* Icon with theme color */}
                                <motion.div
                                  className="absolute left-3 top-1/2 -translate-y-1/2 opacity-0 group-hover/sub:opacity-100"
                                  initial={false}
                                  animate={{ x: hoveredItem === item.label ? 0 : -5 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <svg className={`w-3 h-3 bg-gradient-to-r ${theme.primary} bg-clip-text text-transparent`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </motion.div>
                                
                                <span className="relative z-10 pl-4 group-hover/sub:pl-6 transition-all duration-200">
                                  {sub.label}
                                </span>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                        
                        {/* Dropdown footer with gradient */}
                        <div className={`px-5 py-3 border-t border-white/30 bg-gradient-to-r ${theme.secondary}/30`}>
                          <span className={`text-xs font-medium bg-gradient-to-r ${theme.primary} bg-clip-text text-transparent`}>
                            Explore more →
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>

          {/* Enhanced Give button with gradient */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/give">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden bg-gradient-to-r from-red-500 via-red-700 to-red-600 text-white px-6 py-3 text-sm font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                style={{
                  boxShadow: "0 4px 20px rgba(239, 68, 68, 0.3)",
                }}
              >
                {/* Animated gradient background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-500 to-red-600"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                />
                
                {/* Content */}
                <div className="relative z-10 flex items-center gap-2">
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </motion.svg>
                  <span className="text-sm font-bold tracking-wide">Give</span>
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-400/30 to-orange-400/30 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                
                {/* Border glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-400 via-orange-400 to-transparent rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                
                {/* Sparkles */}
                <motion.div
                  className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-300 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Enhanced Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          {/* Mobile Give Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/give">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 text-xs font-bold rounded-full shadow-md"
              >
                <div className="relative z-10 flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                  <span>Give</span>
                </div>
              </motion.button>
            </Link>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <motion.button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
            className="relative p-2.5 rounded-xl bg-white/80 backdrop-blur-sm border border-white/40 shadow-sm text-sky-800 hover:bg-sky-50 transition-colors duration-200"
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.svg
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </motion.svg>
              ) : (
                <motion.svg
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                </motion.svg>
              )}
            </AnimatePresence>
            
            {/* Notification dot for mobile */}
            <motion.div
              className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.button>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop with blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            />
            
            {/* Menu Panel with gradient border */}
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
              className="md:hidden fixed top-16 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl z-50 py-6 px-4 border-2 border-white/50"
              style={{
                boxShadow: "0 20px 60px rgba(14, 165, 233, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.8)",
                background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)",
              }}
            >
              <div className="flex flex-col gap-1">
                {navItems.map((item, index) => {
                  const theme = getTheme(item.label);
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {item.subMenu ? (
                        <details className="group">
                          <summary className="px-4 py-3.5 text-base font-semibold rounded-xl list-none cursor-pointer flex justify-between items-center bg-white/50 hover:bg-gradient-to-r hover:from-white hover:to-sky-50/50 transition-all duration-200">
                            <span className={`bg-gradient-to-r ${theme.primary} bg-clip-text text-transparent`}>
                              {item.label}
                            </span>
                            <motion.span
                              animate={{ rotate: 0 }}
                              className="group-open:rotate-180 transition-transform duration-200"
                            >
                              <svg className={`w-5 h-5 bg-gradient-to-r ${theme.primary} bg-clip-text text-transparent`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </motion.span>
                          </summary>
                          <div className="mt-2 space-y-1 pl-4 pr-2">
                            {item.subMenu.map((sub, subIndex) => (
                              <motion.div
                                key={sub.label}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: subIndex * 0.03 }}
                              >
                                <Link
                                  href={sub.link}
                                  className={`block px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-2 hover:bg-gradient-to-r ${theme.secondary}`}
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  <svg className={`w-3 h-3 bg-gradient-to-r ${theme.primary} bg-clip-text text-transparent`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                  <span className="text-sky-800">{sub.label}</span>
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </details>
                      ) : (
                        <Link
                          href={item.link!}
                          className={`block px-4 py-3.5 text-base font-semibold rounded-xl transition-all duration-200 hover:bg-gradient-to-r hover:from-white hover:to-sky-50/50`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <span className={`bg-gradient-to-r ${theme.primary} bg-clip-text text-transparent`}>
                            {item.label}
                          </span>
                        </Link>
                      )}
                    </motion.div>
                  );
                })}
                
                {/* Mobile Give Button with enhanced styling */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="pt-4 mt-4 border-t border-sky-100/50"
                >
                  <Link href="/give" onClick={() => setMobileMenuOpen(false)}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full group relative overflow-hidden bg-gradient-to-r from-red-500 via-orange-500 to-red-600 text-white px-6 py-4 text-base font-bold rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-3"
                    >
                      {/* Animated gradient */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-red-600 via-orange-500 to-red-600"
                        animate={{
                          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        style={{
                          backgroundSize: "200% 200%",
                        }}
                      />
                      
                      <span className="relative z-10 flex items-center gap-2">
                        <motion.svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </motion.svg>
                        Give Now
                      </span>
                      
                      {/* Sparkle effects */}
                      <motion.div
                        className="absolute top-2 right-4 w-1.5 h-1.5 bg-yellow-300 rounded-full"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                      />
                      <motion.div
                        className="absolute bottom-2 left-4 w-1 h-1 bg-yellow-400 rounded-full"
                        animate={{
                          scale: [1, 2, 1],
                          opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{ duration: 1.2, repeat: Infinity }}
                      />
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}