'use client';

import Link from 'next/link';
import { Twitter, Linkedin, Youtube, Mail, Github, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-24 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex justify-center gap-6 mb-4">
          <Link 
            href="mailto:your.email@example.com"
            target="_blank"
            className="text-white/40 hover:text-white transition-colors"
          >
            <Mail className="w-5 h-5" />
          </Link>
          <Link 
            href="https://github.com/yourusername"
            target="_blank" 
            className="text-white/40 hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
          </Link>
          <Link 
            href="https://www.linkedin.com/in/yourusername"
            target="_blank"
            className="text-white/40 hover:text-white transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link
            href="https://instagram.com/yourusername"
            target="_blank"
            className="text-white/40 hover:text-white transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </Link>
          <Link
            href="https://www.facebook.com/yourusername"
            target="_blank"
            className="text-white/40 hover:text-white transition-colors"
          >
            <Facebook className="w-5 h-5" />
          </Link>
          <Link
            href="https://www.youtube.com/@yourusername"
            target="_blank"
            className="text-white/40 hover:text-white transition-colors"
          >
            <Youtube className="w-5 h-5" />
          </Link>
          <Link
            href="https://x.com/yourusername"
            target="_blank"
            className="text-white/40 hover:text-white transition-colors"
          >
            <Twitter className="w-5 h-5" />
          </Link>
        </div>
        <p className="text-center text-white/30 text-sm">
          Copyright © 2025 | All Rights Reserved<br></br>Designed with ❤️ using <a href="https://augustui.com" target="_blank" className="text-white/40 hover:text-white transition-colors">AugustUI</a>
        </p>
      </div>
    </footer>
  );
}