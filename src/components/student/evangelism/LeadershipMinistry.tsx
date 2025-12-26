"use client";

import { useState } from "react";

export default function Evangelism() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50">

      {/* Content Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Description */}
         

            {/* Cards Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Evangelism Card */}
              <div
                className={`
                  bg-white rounded-2xl shadow-xl border-2 transition-all duration-300
                  hover:shadow-2xl hover:-translate-y-1
                  ${activeCard === 0 ? 'border-amber-500' : 'border-gray-100'}
                  cursor-pointer
                `}
                onMouseEnter={() => setActiveCard(0)}
                onMouseLeave={() => setActiveCard(null)}
                onClick={() => setActiveCard(activeCard === 0 ? null : 0)}
              >
                <div className="p-8">
                  {/* Card Header */}
                  <div className="flex items-center gap-4 mb-6">
                
                    <div>
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-50 rounded-full mb-2">
                        <div className="w-2 h-2 rounded-full bg-amber-500" />
                        <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider">
                          Primary Focus
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-sky-900">
                        EVANGELISM
                      </h3>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="space-y-4">
                    <p className="text-gray-700 text-justify  leading-relaxed">
                      It is assumed that a major focus of student ministry is reaching un-reached campus students through campus Christian students.
                    </p>
                    <p className="text-gray-700 text-justify  leading-relaxed">
                      Campus Evangelism ideal is, for Christian students, to be a living and speaking witness of Jesus Christ in their campuses. It mostly employs strategies of friendship and one-to-one evangelism, inter-campus evangelism, film, literature and other conducive ways to reach unbelievers.
                    </p>
                    <p className="text-gray-700 text-justify  leading-relaxed">
                      Training that is helpful to campus evangelism will also be given to students as well.
                    </p>
                  </div>

           
                </div>
              </div>

              {/* Mission Card */}
              <div
                className={`
                  bg-white rounded-2xl shadow-xl border-2 transition-all duration-300
                  hover:shadow-2xl hover:-translate-y-1
                  ${activeCard === 1 ? 'border-amber-500' : 'border-gray-100'}
                  cursor-pointer
                `}
                onMouseEnter={() => setActiveCard(1)}
                onMouseLeave={() => setActiveCard(null)}
                onClick={() => setActiveCard(activeCard === 1 ? null : 1)}
              >
                <div className="p-8">
                  {/* Card Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div>
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky-50 rounded-full mb-2">
                        <div className="w-2 h-2 rounded-full bg-sky-500" />
                        <span className="text-xs font-semibold text-sky-700 uppercase tracking-wider">
                          Outreach Program
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-sky-900">
                        MISSION
                      </h3>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="space-y-4">
                    <p className="text-gray-700 text-justify  leading-relaxed">
                      This program is designed to reach nearby and distant areas on and off universities and colleges with the gospel of Christ.
                    </p>
                    <p className="text-gray-700 text-justify leading-relaxed">
                      This mission work is usually organized and carried out during students' academic break times.
                    </p>
                    <p className="text-gray-700 text-justify leading-relaxed">
                      Our social involvement has evangelistic consequences in that we bear witness to the transforming grace of Jesus Christ. We integrate our programs with different social issues.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}