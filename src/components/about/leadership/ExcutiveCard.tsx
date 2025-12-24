"use client";

import Image from "next/image";
import { Executive } from "./leadershipData";
import { Mail } from "lucide-react";

interface Props {
  executive: Executive;
}

export default function ExecutiveCard({ executive }: Props) {
  return (
    <div className="group rounded-2xl bg-white shadow-md hover:shadow-xl transition overflow-hidden border">
      <div className="relative aspect-square">
        <Image
          src={executive.image}
          alt={executive.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 100vw"
        />
      </div>

      <div className="p-4 text-center">
        <h3 className="font-semibold text-lg text-gray-900">
          {executive.name}
        </h3>

        <p className="text-sm text-gray-600 mt-1">
          {executive.role}
        </p>

        <a
          href={`mailto:${executive.email}`}
          className="inline-flex items-center gap-2 mt-3 text-sm text-sky-600 hover:text-sky-700 font-medium"
        >
          <Mail className="w-4 h-4" />
          Contact
        </a>
      </div>
    </div>
  );
}
