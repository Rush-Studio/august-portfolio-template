'use client';

import { useEffect, useState } from 'react';
import Scribbles from './Scribbles';
import type { BlogPost } from '@/app/lib/blog';

export default function ScribblesServer() {
  const [writings, setWritings] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/posts');
      const posts = await response.json();
      setWritings(posts);
    };
    fetchPosts();
  }, []);

  return <Scribbles writings={writings} />;
}