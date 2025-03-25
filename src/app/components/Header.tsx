'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Podcast', href: '/podcast' },
  { label: 'Contact', href: '/contact' }
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/95 backdrop-blur-lg transition-all duration-300'
      )}
    >
      <nav className="mx-auto px-4 py-4">
        <div className="flex items-center justify-between max-w-3xl mx-auto">
          <div className="flex items-center gap-6">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <div key={item.href} className="relative">
                  {isActive && (
                    <motion.div
                      layoutId="bubble"
                      className="absolute inset-0 bg-white/5 -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <Link 
                    href={item.href}
                    className={cn(
                      "px-3 py-2 text-sm transition-colors relative",
                      isActive 
                        ? "text-white/70" 
                        : "text-white/40 hover:text-white"
                    )}
                  >
                    {item.label}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}