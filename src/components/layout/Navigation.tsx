'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const aboutLinks = [
  { label: 'What We Believe', href: '/page/about/believe' },
  { label: 'Who We Are', href: '/page/about/who-we-are' },
  { label: 'Why We Exist', href: '/page/about/why-we-exist' },
  { label: 'Leadership', href: '/about/leadership' },
  { label: 'General Secretary', href: '/about/general-secretary' },
  { label: 'Our Core Values', href: '/page/about/core-values' },
  { label: 'Our Core Commitments', href: '/page/about/commitments' }
];

const ministryLinks = [
  { label: 'Discipleship & Leadership Strategy', href: '/page/student/discipleship' },
  { label: 'Evangelism & Mission Mobilization', href: '/page/student/evangelism' },
];

export default function Navigation() {
  const [open, setOpen] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (menu: string) => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setOpen(menu);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setOpen(null);
    }, 200);
    setHoverTimeout(timeout);
  };

  const topLinkClass =
    'relative px-1 py-2 text-white transition-all duration-300 font-medium text-[15px] after:absolute after:-bottom-[2px] after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-amber-400 after:to-amber-300 after:transition-all after:duration-400 hover:after:w-full hover:text-sky-100';

  const dropdownItemClass =
    'block px-6 py-3.5 text-gray-700 transition-all duration-300 hover:pl-8 hover:bg-sky-900 hover:text-white group';

  return (
    <nav className={`
      ${isScrolled ? 'fixed' : 'sticky'} top-0 z-50
      border-t-4 border-amber-400
      bg-gradient-to-b from-sky-900 to-sky-800 backdrop-blur-xl
      shadow-lg shadow-amber-900/30
      transition-all duration-300
      ${isScrolled ? 'w-full' : ''}
    `}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* LEFT NAV */}
          <ul className="flex items-center gap-8 font-medium">

            <li>
              <Link href="/" className={topLinkClass}>
                Home
              </Link>
            </li>

            {/* ABOUT */}
            <li
              className="relative"
              onMouseEnter={() => handleMouseEnter('about')}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center gap-1.5">
                <span className={`${topLinkClass} cursor-pointer flex items-center`}>
                  About Us
                </span>
                <ChevronDown className={`w-4 h-4 text-white/70 transition-transform duration-300 ${open === 'about' ? 'rotate-180' : ''}`} />
              </div>

              <div className={`
                absolute left-0 top-full mt-1
                transition-all duration-300 ease-out
                ${open === 'about' 
                  ? 'opacity-100 translate-y-0 visible' 
                  : 'opacity-0 -translate-y-2 invisible'
                }
              `}>
                <div className="
                  relative mt-3 w-72 rounded-xl
                  bg-white/95 backdrop-blur-sm
                  shadow-2xl shadow-sky-900/30
                  border border-sky-100/50
                  overflow-hidden
                ">
                  {/* Dropdown items */}
                  <ul className="py-1.5">
                    {aboutLinks.map((item) => (
                      <li key={item.href} className="border-b border-sky-50/80 last:border-0">
                        <Link 
                          href={item.href} 
                          className={dropdownItemClass}
                          onClick={() => setOpen(null)}
                        >
                          <span className="flex items-center">
                            <div className="w-2 h-2 rounded-full bg-white/90 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-110" />
                            {item.label}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>

            {/* STUDENT MINISTRY */}
            <li
              className="relative"
              onMouseEnter={() => handleMouseEnter('ministry')}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center gap-1.5">
                <span className={`${topLinkClass} cursor-pointer flex items-center`}>
                  Student Ministry
                </span>
                <ChevronDown className={`w-4 h-4 text-white/70 transition-transform duration-300 ${open === 'ministry' ? 'rotate-180' : ''}`} />
              </div>

              <div className={`
                absolute left-0 top-full mt-1
                transition-all duration-300 ease-out
                ${open === 'ministry' 
                  ? 'opacity-100 translate-y-0 visible' 
                  : 'opacity-0 -translate-y-2 invisible'
                }
              `}>
                <div className="
                  relative mt-3 w-80 rounded-xl
                  bg-white/95 backdrop-blur-sm
                  shadow-2xl shadow-sky-900/30
                  border border-sky-100/50
                  overflow-hidden
                ">
                  {/* Dropdown items */}
                  <ul className="py-1.5">
                    {ministryLinks.map((item) => (
                      <li key={item.href} className="border-b border-sky-50/80 last:border-0">
                        <Link 
                          href={item.href} 
                          className={dropdownItemClass}
                          onClick={() => setOpen(null)}
                        >
                          <span className="flex items-center">
                            <div className="w-2 h-2 rounded-full bg-white/90 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-110" />
                            {item.label}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>

            <li>
              <Link href="/page/contact" className={topLinkClass}>
                Contact
              </Link>
            </li>
          </ul>

          {/* CTA BUTTON */}
          <Link
            href="/give"
            className="
              relative
              bg-gradient-to-r from-red-600 to-red-700
              px-6 py-2.5
              text-sm font-semibold text-white
              transition-all duration-300
              shadow-lg shadow-sky-500/40
              hover:shadow-xl hover:shadow-sky-500/50
              hover:scale-105
              hover:from-red-500 hover:to-red-600
              active:scale-95
              overflow-hidden
              before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/15 before:to-white/0 before:translate-x-[-100%] before:hover:translate-x-[100%] before:transition-transform before:duration-700
            "
          >
            <span className="relative flex items-center gap-2">
              <span className="text-white drop-shadow-sm">Donate</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/90 animate-pulse"></span>
            </span>
          </Link>

        </div>
      </div>
    </nav>
  );
}