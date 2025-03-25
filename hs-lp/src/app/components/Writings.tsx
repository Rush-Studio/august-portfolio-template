'use client';

import { ArrowUpRight } from 'lucide-react';
import { ScrambleLink } from './ScrambleLink';

const writings = [
  {
    title: 'The Future of AI in Healthcare',
    date: '2024',
    excerpt: 'Exploring how artificial intelligence is revolutionizing medical diagnostics and patient care...',
    link: '#',
    category: 'Article'
  },
  {
    title: 'Building Ethical AI Companies',
    date: '2024',
    excerpt: 'A framework for developing AI solutions that prioritize transparency and fairness...',
    link: '#',
    category: 'Article'
  },
  {
    title: 'TechCrunch Interview',
    date: '2024',
    excerpt: 'Discussing the intersection of AI and healthcare with TechCrunch...',
    link: '#',
    category: 'Interview'
  },
  {
    title: 'Forbes 30 Under 30',
    date: '2024',
    excerpt: 'Featured in Forbes 30 Under 30 for Healthcare and AI innovation...',
    link: '#',
    category: 'Recognition'
  }
];

export default function Writings() {
  return (
    <section className="mb-32">
      <div className="inline-block px-3 py-1 mb-8 text-xs font-mono text-white/40 bg-white/5 rounded-sm">
        Appearances
      </div>
      <div className="space-y-12">
        {writings.map((post) => (
          <div key={post.title} className="block group">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-white/30 font-mono">
                {post.category}
              </span>
              <span className="text-xs text-white/30">
                {post.date}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <ScrambleLink
                href={post.link}
                text={post.title}
                className="text-lg text-white/80 font-light group-hover:text-white transition-colors"
              />
              <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-white/50 text-sm mt-2">
              {post.excerpt}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
} 