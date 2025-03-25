'use client';

import { useState } from 'react';

const scrambleText = (text: string) => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  return text.split('').map(char => 
    char === ' ' ? ' ' : chars[Math.floor(Math.random() * chars.length)]
  ).join('');
};

interface ScrambleLinkProps {
  href: string;
  text: string;
  className?: string;
  children?: React.ReactNode;
}

export function ScrambleLink({ href, text, className, children }: ScrambleLinkProps) {
  const [scrambledText, setScrambledText] = useState(text);

  const handleMouseEnter = () => {
    let iterations = 0;
    const interval = setInterval(() => {
      setScrambledText(scrambleText(text));
      iterations++;
      if (iterations > 3) {
        clearInterval(interval);
        setScrambledText(text);
      }
    }, 50);
  };

  const handleMouseLeave = () => {
    setScrambledText(text);
  };

  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children || scrambledText}
    </a>
  );
} 