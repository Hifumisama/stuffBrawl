'use client'

import Link from 'next/link';
import { useState } from 'react';

interface MenuOption {
  label: string;
  href: string;
  color?: string;
}

export default function RetroMenu() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const menuOptions: MenuOption[] = [
    { label: 'JOUER', href: '/monsthing', color: 'text-green-400' },
    { label: 'COLLECTION', href: '/collection', color: 'text-yellow-400' },
    { label: 'CREDITS', href: '/credits', color: 'text-red-400' },
  ];

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : menuOptions.length - 1));
    } else if (e.key === 'ArrowDown') {
      setSelectedIndex((prev) => (prev < menuOptions.length - 1 ? prev + 1 : 0));
    }
  };

  return (
    <div 
      className="flex flex-col items-center space-y-8 focus:outline-none"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <h1 
        className="text-6xl text-yellow-400 mb-12 glitch"
        style={{ 
          fontFamily: 'var(--font-pixel-mania)'
        }}
      >
        STUFFBRAWL
      </h1>

      <div className="border-4 border-yellow-400 p-8 bg-slate-900/80 rounded-lg shadow-lg w-120">
        <div className="space-y-4">
          {menuOptions.map((option, index) => (
            <Link 
              key={option.label} 
              href={option.href}
              onMouseEnter={() => setSelectedIndex(index)}
              className={`block px-8 py-3 text-2xl transition-all duration-200 ${
                index === selectedIndex 
                  ? 'bg-yellow-400 text-slate-900 transform scale-105 pixel-text'
                  : 'text-yellow-400 hover:bg-yellow-400/20'
              }`}
              style={{ fontFamily: 'var(--font-pixel-mania)' }}
            >
              <div className="flex items-center">
                <span className={`w-6 ${index === selectedIndex ? 'visible blink-animation' : 'invisible'}`}>▶</span>
                <span>{option.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 