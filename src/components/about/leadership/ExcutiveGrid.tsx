"use client";

import Image from "next/image";
import { executives } from "./leadershipData";
import { Mail } from "lucide-react";

export default function ExecutiveGrid() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-16 tracking-tight">
          Executive Leadership
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-14">
          {executives.map((exec) => (
            <div key={exec.email} className="group text-center">
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={exec.image}
                  alt={exec.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                />
              </div>

              {/* Name */}
              <h3 className="mt-5 text-lg font-semibold text-gray-900 text-alignment-left">
                {exec.name}
              </h3>

              {/* Role */}
              <p className="mt-1 text-sm text-gray-600 leading-snug text-alignment-left">
                {exec.role}
              </p>

              {/* Email */}
              <a
                href={`mailto:${exec.email}`}
                className="mt-3 inline-flex items-center gap-1 text-sm text-sky-600 hover:text-sky-700 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
