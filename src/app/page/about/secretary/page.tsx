'use client';

import Image from 'next/image';
import PageBanner from '@/src/components/ui/PageBanner';

export default function GeneralSecretaryPage() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white">
      <PageBanner
        title="Leadership"
        subtitle="Our foundational Christian convictions"
        image="/images/bg3.JPG"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        {/* Decorative background blur */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-emerald-100/40 blur-3xl" />

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-3">
          
          {/* LEFT: IMAGE */}
          <div className="lg:col-span-1">
            <div className="relative rounded-3xl bg-white p-2 shadow-xl">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-emerald-500/20 to-transparent" />
              <Image
                src="/leaders/eyosi.jpg"
                alt="Eyosiyas Tsegaye"
                width={800}
                height={800}
                className="relative z-10 rounded-2xl object-cover"
                priority
              />
            </div>
          </div>

          {/* RIGHT: CONTENT */}
          <article className="lg:col-span-2">
            <div className="space-y-8">
              
              {/* Header */}
              <header>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                  Eyosiyas Tsegaye
                </h1>
                <p className="mt-2 text-lg font-medium text-emerald-700">
                  General Secretary
                </p>
                <div className="mt-4 h-1 w-20 rounded-full bg-emerald-500" />
              </header>

              {/* Pull Quote */}
              <blockquote className="relative rounded-2xl bg-white p-6 shadow-md">
                <span className="absolute -top-3 left-6 text-5xl font-serif text-emerald-300">“</span>
                <p className="text-gray-700 leading-relaxed">
                  I am honored to serve as the General Secretary of EvaSUE. My commitment to student
                  ministry comes from a deep-rooted love for students and a firm belief that investing
                  in their lives is one of the most fruitful endeavors in the kingdom of God.
                </p>
              </blockquote>

              {/* Body */}
              <div className="prose prose-gray max-w-none">
                <p>
                  Engaging in this ministry has profoundly impacted my own life, as it was within
                  this fellowship that I embarked on a wholehearted discipleship journey and
                  developed a genuine love for the Word of God.
                </p>

                <p>
                  I am grateful for all the support you have given to EvaSUE and the student
                  ministry thus far, and I urge you to continue investing in this vision. Your
                  support is an investment in the future generation, and together, we can advance
                  the kingdom of God by serving students.
                </p>

                <p>
                  Eyosiyas comes from a background as a General Manager in the business world and
                  joined EvaSUE to serve as General Secretary beginning July 1st, 2024.
                </p>
              </div>

              {/* Education */}
              <section>
                <h2 className="text-xl font-semibold text-gray-900">
                  Education
                </h2>
                <ul className="mt-3 space-y-2 text-gray-700">
                  <li>
                    <strong>Master of Arts, Theology</strong> — Addis Ababa Bible College (2022)
                  </li>
                  <li>
                    <strong>MBA</strong> — Business Unity University (2015)
                  </li>
                  <li>
                    <strong>BSc, Engineering</strong> — Bahir Dar University (2007)
                  </li>
                </ul>
              </section>

              {/* Personal */}
              <section>
                <h2 className="text-xl font-semibold text-gray-900">
                  Personal
                </h2>
                <p className="mt-3 text-gray-700">
                  Eyosiyas is married to Mehader, and they welcomed a baby girl in August 2024.
                  They live in Addis Ababa and have served in Misrak Meserete Kristos Church since
                  graduating from Bahir Dar University. He enjoys playing football—especially
                  with friends, staff, and students in EvaSUE.
                </p>
              </section>

            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
