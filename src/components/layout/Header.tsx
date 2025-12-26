'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const aboutLinks = [
  { label: 'What We Believe', href: '/about/what-we-believe' },
  { label: 'Who We Are', href: '/about/who-we-are' },
  { label: 'Why We Exist', href: '/about/why-we-exist' },
  { label: 'Leadership', href: '/about/leadership' },
  { label: 'General Secretary', href: '/about/general-secretary' },
  { label: 'Our Core Values', href: '/about/core-values' },
];

const ministryLinks = [
  { label: 'Discipleship & Leadership Strategy', href: '/ministry/discipleship' },
  { label: 'Evangelism & Mission Mobilization', href: '/ministry/evangelism' },
];

export default function Header() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const isActive = (href: string) => pathname === href;

  return (
    <header className="w-full border-b bg-white">

      {/* TOP HEADER */}
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center gap-4">

          {/* Logo */}
          <div className="relative h-14 w-44">
            <Image
              src="/images.png"
              alt="EvaSUE Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Title + Description */}
          <div>
            <p className="text-sm text-gray-600 max-w-md">
              የኢትዮጵያ ወንጌላዊያን ተማሪዎችና ምሩቃን ማህበር (ኢቫሱ)
            </p>
            <p className="text-sm text-gray-600 max-w-md">
              Evangelical Students’ and Graduates’ Union of Ethiopia
            </p>
            
          </div>

        </div>
      </div>

      {/* NAVIGATION BAR */}
      <nav className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between">

            {/* LEFT NAV */}
            <ul className="flex items-center gap-8 py-3 text-sm font-medium">

              {/* Home */}
              <li>
                <Link
                  href="/"
                  className={`transition ${
                    isActive('/') ? 'text-red-600' : 'text-gray-700 hover:text-sky-500'
                  }`}
                >
                  Home
                </Link>
              </li>

              {/* About Us Dropdown */}
              <li
                className="relative"
                onMouseEnter={() => setOpenMenu('about')}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <span className="cursor-pointer text-gray-700 hover:text-sky-500 transition">
                  About Us
                </span>

                {openMenu === 'about' && (
                  <ul className="absolute left-0 top-full z-50 mt-2 w-64 rounded-lg bg-white shadow-lg border py-2">
                    {aboutLinks.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={`block px-4 py-2 text-sm transition ${
                            isActive(item.href)
                              ? 'text-red-600 font-semibold'
                              : 'text-gray-700 hover:bg-sky-50 hover:text-sky-600'
                          }`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {/* Student Ministry Dropdown */}
              <li
                className="relative"
                onMouseEnter={() => setOpenMenu('ministry')}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <span className="cursor-pointer text-gray-700 hover:text-sky-500 transition">
                  Student Ministry
                </span>

                {openMenu === 'ministry' && (
                  <ul className="absolute left-0 top-full z-50 mt-2 w-72 rounded-lg bg-white shadow-lg border py-2">
                    {ministryLinks.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={`block px-4 py-2 text-sm transition ${
                            isActive(item.href)
                              ? 'text-red-600 font-semibold'
                              : 'text-gray-700 hover:bg-sky-50 hover:text-sky-600'
                          }`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {/* Contact */}
              <li>
                <Link
                  href="/contact"
                  className={`transition ${
                    isActive('/contact')
                      ? 'text-red-600'
                      : 'text-gray-700 hover:text-sky-500'
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* RIGHT CTA */}
            <Link
              href="/give"
              className="rounded-lg bg-red-600 px-5 py-2 text-sm font-semibold text-white hover:bg-red-700 transition"
            >
              Give
            </Link>

          </div>
        </div>
      </nav>

    </header>
  );
}
