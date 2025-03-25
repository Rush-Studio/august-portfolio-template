'use client';

import { Mail, Github, Linkedin, Instagram, Facebook, Youtube, Twitter } from 'lucide-react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

const socialLinks = [
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:your.email@example.com',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/yourusername',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/yourusername',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    href: 'https://instagram.com/yourusername',
  },
  {
    icon: Facebook,
    label: 'Facebook',
    href: 'https://www.facebook.com/yourusername',
  },
  {
    icon: Youtube,
    label: 'YouTube',
    href: 'https://www.youtube.com/@yourusername',
  },
  {
    icon: Twitter,
    label: 'X (Twitter)',
    href: 'https://x.com/yourusername',
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background text-foreground pt-24">
        <main className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl font-light mb-8 text-white/90">Get in touch</h1>
          <p className="text-white/60 mb-12">
            Feel free to reach out through any of these channels.
          </p>
          
          <div className="grid grid-cols-2 gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg border border-white/10 hover:border-white/20 transition-colors group"
              >
                <link.icon className="w-5 h-5 text-white/60 group-hover:text-white/90" />
                <span className="text-white/80 group-hover:text-white">{link.label}</span>
              </a>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}