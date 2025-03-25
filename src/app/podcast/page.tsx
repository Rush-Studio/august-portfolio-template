'use client';

import { ArrowUpRight } from 'lucide-react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

const podcast = [
  {
    title: 'Dr. Emily Rodriguez | Ep001',
    date: '2024',
    excerpt: 'Leading AI researcher discusses the future of healthcare diagnostics.',
    link: '#',
    thumbnail: '/thumbnails/template/episode1.jpg',
    duration: '45:00'
  },
  {
    title: 'Michael Chang | Ep002',
    date: '2024',
    excerpt: 'Healthcare startup founder shares insights on building in the medical space.',
    link: '#',
    thumbnail: '/thumbnails/template/episode2.jpg',
    duration: '38:00'
  },
  {
    title: 'Dr. James Wilson | Ep003',
    date: '2024',
    excerpt: 'Medical ethics expert on responsible AI development in healthcare.',
    link: '#',
    thumbnail: '/thumbnails/template/episode3.jpg',
    duration: '42:00'
  },
  {
    title: 'Lisa Chen | Ep004',
    date: '2024',
    excerpt: 'Venture capitalist discusses investing in healthtech startups.',
    link: '#',
    thumbnail: '/thumbnails/template/episode4.jpg',
    duration: '35:00'
  },
  {
    title: 'Dr. Robert Kumar | Ep005',
    date: '2024',
    excerpt: 'Healthcare innovator on bridging the gap between AI and patient care.',
    link: '#',
    thumbnail: '/thumbnails/template/episode5.jpg',
    duration: '40:00'
  }
];

export default function PodcastsPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background text-foreground pt-24">
        <main className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl font-light mb-12 text-white/90">Podcast with Guests</h1>
          <div className="space-y-12">
            {podcast.map((podcast) => (
              <a
                key={podcast.title}
                href={podcast.link}
                target="_blank" 
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-white/30">
                    {podcast.duration}
                  </span>
                  <span className="text-xs text-white/30">
                    {podcast.date}
                  </span>
                </div>
                <h2 className="text-lg text-white/80 font-light group-hover:text-white transition-colors flex items-center gap-2">
                  {podcast.title}
                  <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h2>
                <p className="text-white/50 text-sm mt-2">
                  {podcast.excerpt}
                </p>
              </a>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}