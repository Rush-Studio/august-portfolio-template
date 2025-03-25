'use client';

import Image from 'next/image';

export default function Profile() {
  return (
    <section className="mb-16 animate-fade-in">
      <div className="relative w-32 h-32 mb-8">
        <Image
          src="/profile.jpg"
          alt="Leonardo Neco"
          fill
          className="rounded-full object-cover border-2 border-white/10 grayscale object-[center_30%]"
          priority
        />
      </div>
      <span className="text-white/40 text-xs tracking-wider mb-4 block font-mono">TECH ENTREPRENEUR</span>
      <h1 className="text-2xl md:text-4xl font-light mb-6 tracking-tight leading-relaxed">
        <span className="text-white/90 inline-block animate-title">Leonardo Neco</span>
        <br />
      </h1>
      <p className="text-base md:text-md text-white/50 max-w-2xl leading-relaxed animate-title-3 font-light">
        San Francisco, California
      </p>
    </section>
  );
} 