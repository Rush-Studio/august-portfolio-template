'use client';

import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ScrambleLink } from './ScrambleLink';
import type { BlogPost } from '@/app/lib/blog';

interface ScribblesProps {
  writings?: BlogPost[];
}

export default function Scribbles({ writings: propWritings }: ScribblesProps) {
  const [writings, setWritings] = useState<BlogPost[]>(propWritings || []);
  const [isLoading, setIsLoading] = useState(!propWritings);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!propWritings) {
      const fetchPosts = async () => {
        try {
          setIsLoading(true);
          const response = await fetch('/api/posts');
          if (!response.ok) throw new Error('Failed to fetch posts');
          const posts = await response.json();
          setWritings(posts);
        } catch (err) {
          setError(err instanceof Error ? err.message : 'Failed to load posts');
        } finally {
          setIsLoading(false);
        }
      };
      fetchPosts();
    }
  }, [propWritings]);

  if (isLoading) {
    return <div className="text-white/50">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-400">{error}</div>;
  }

  return (
    <section className="mb-32">
      <div className="inline-block px-3 py-1 mb-8 text-xs font-mono text-white/40 bg-white/5 rounded-sm">
        Recent Scribbles
      </div>
      <div className="space-y-12">
        {writings.map((post) => (
          <div key={post.slug} className="block group">
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
                href={`/blog/${post.slug}`}
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