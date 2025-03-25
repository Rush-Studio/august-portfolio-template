'use client';

import { ArrowUpRight } from 'lucide-react';
import { ScrambleLink } from './ScrambleLink';

const ventures = [
  {
    title: 'Founder - Nova AI',
    href: '#',
    description: 'Building next-generation AI solutions for healthcare diagnostics'
  },
  {
    title: 'Founder - TechBridge Capital',
    href: '#',
    description: 'Early-stage venture fund focused on AI and healthcare startups'
  },
  {
    title: 'Founder - HealthTech Summit',
    href: '#',
    description: 'Annual conference connecting healthcare innovators and investors'
  },
  {
    title: 'Founder - AI for Good Foundation',
    href: '#',
    description: 'Non-profit organization promoting ethical AI development'
  },
];

export default function CurrentVentures() {
  return (
    <section className="mb-32">
      <div className="inline-block px-3 py-1 mb-8 text-xs font-mono text-white/40 bg-white/5 rounded-sm">
        Currently
      </div>
      <div className="space-y-12">
        {ventures.map((venture) => (
          <div key={venture.title} className="group">
            <h3 className="text-lg font-light mb-2 flex items-center gap-2">
              <ScrambleLink
                href={venture.href}
                text={venture.title}
                className="text-white/80 hover:underline"
              />
              <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </h3>
            <p className="text-white/50 text-sm">
              {venture.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
} 