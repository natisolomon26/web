"use client";

import { useState } from "react";

export default function CommitmentSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const commitments = [
    {
      title: "Evangelism",
      description: "Reaching campus students with the gospel, the saving message of Jesus Christ.",
      extendedDescription: "We actively share the good news of Jesus Christ on campuses, inviting students into a transformative relationship with God through intentional outreach, personal testimonies, and campus-wide evangelistic events.",
      color: "amber",
    },
    {
      title: "Discipleship",
      description: "Helping Christian students grow into Christ-likeness through the Word.",
      extendedDescription: "Through small group Bible studies, mentorship programs, and spiritual formation workshops, we nurture students to develop deep roots in faith and mature into committed followers of Christ.",
      color: "amber",
    },
    {
      title: "Mission",
      description: "Equipping students to join the global mission of the Church.",
      extendedDescription: "We prepare students for global impact through mission training, cross-cultural experiences, and partnerships with international ministries, empowering them to be Christ's witnesses to the ends of the earth.",
      color: "amber",
    },
    {
      title: "Leadership",
      description: "Training students to lead with Biblical values in church and society.",
      extendedDescription: "Developing servant leaders through leadership training, character development programs, and practical ministry opportunities that prepare students to influence their spheres with godly wisdom and integrity.",
      color: "amber",
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-b from-white to-sky-50 py-20 md:py-28">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-amber-100/20 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tr from-sky-100/20 via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {commitments.map((item, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card Container */}
              <div className={`
                h-full bg-white rounded-xl border-2 border-gray-100
                shadow-lg shadow-sky-100/30
                transition-all duration-300
                hover:shadow-xl hover:shadow-amber-100/40
                hover:border-amber-200
                hover:-translate-y-2
                overflow-hidden
              `}>
                {/* Card Header */}
                <div className="p-6 text-center">
                  {/* Icon */}
                  

                  {/* Title */}
                  <h3 className="
                    text-2xl font-bold text-sky-900 mb-3
                    group-hover:text-amber-700
                    transition-colors duration-300
                  ">
                    {item.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Hover Content */}
                <div className={`
                  px-6 pb-6 border-t border-gray-100
                  transition-all duration-300
                  ${hoveredIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}
                `}>
                  <div className="pt-6">
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {item.extendedDescription}
                    </p>
                    <div className="mt-6 flex items-center justify-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-amber-500" />
                      <span className="text-xs font-medium text-amber-600 uppercase tracking-wider">
                        Learn More
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Indicator */}
                <div className="
                  absolute bottom-0 left-0 right-0 h-1
                  bg-gradient-to-r from-transparent via-amber-400 to-transparent
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                " />
              </div>

              {/* Connecting Line (Desktop) */}
              {index < commitments.length - 1 && (
                <div className="
                  hidden lg:block absolute top-1/2 -right-3
                  w-6 h-0.5 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300
                  group-hover:scale-125 group-hover:bg-amber-500
                  transition-all duration-300
                  transform -translate-y-1/2
                " />
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        
      </div>
    </section>
  );
}