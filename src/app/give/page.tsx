// app/give/page.tsx
'use client';

import Image from 'next/image';
import PageBanner from '@/src/components/ui/PageBanner';

export default function GivePage() {
  return (
    <section className="bg-gray-50">
      {/* Page Banner */}
      <PageBanner 
        title="Support EvaSUE"
        subtitle="Invest in students, invest in the kingdom of God"
        image="/images/give-bg.jpg"
      />

      {/* Content Container */}
      <div className="mx-auto max-w-7xl px-6 py-16 space-y-16">

        {/* Introduction */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-gray-900">
            Give and Make an Impact
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Your generous support empowers students across Ethiopia to grow in faith, leadership, and service. Every donation helps us reach more campuses and transform more lives.
          </p>
        </div>

        {/* Donation Options */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: '$25', desc: 'Supports one student for a month' },
            { title: '$50', desc: 'Supports one student for two months' },
            { title: '$100', desc: 'Supports a student for a semester' },
          ].map((tier) => (
            <div key={tier.title} className="relative rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              {/* Decorative circle */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-emerald-200 rounded-full opacity-50 animate-pulse"></div>
              
              <h3 className="text-2xl font-bold text-gray-900">{tier.title}</h3>
              <p className="mt-4 text-gray-600">{tier.desc}</p>
              <button className="mt-6 w-full rounded-lg bg-emerald-600 text-white py-3 font-semibold hover:bg-emerald-700 transition-colors">
                Give Now
              </button>
            </div>
          ))}
        </div>

        {/* Impact / Testimonial */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/3 relative h-64 w-full rounded-lg overflow-hidden">
            <Image
              src="/images/student-impact.jpg"
              alt="Student Impact"
              fill
              className="object-cover"
            />
          </div>
          <div className="lg:w-2/3 space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">
              Your Support Changes Lives
            </h3>
            <p className="text-gray-700">
              "Thanks to EvaSUE, I grew in my faith and leadership skills. The support from donors empowered me to serve my campus and community. Every gift truly makes a difference." – Student Leader
            </p>
          </div>
        </div>

        {/* Call-to-action Section */}
        <div className="bg-emerald-600 rounded-2xl text-white p-12 text-center relative overflow-hidden">
          <div className="absolute -top-16 -left-16 w-64 h-64 bg-white/10 rounded-full"></div>
          <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-white/10 rounded-full"></div>
          <h2 className="text-3xl font-bold">Ready to Give?</h2>
          <p className="mt-4 text-lg">Join us in investing in students and the next generation of Christian leaders.</p>
          <button className="mt-6 rounded-lg bg-white text-emerald-600 font-semibold px-8 py-3 hover:bg-gray-100 transition-colors">
            Give Now
          </button>
        </div>

      </div>
    </section>
  );
}
