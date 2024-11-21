'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [show, setShow] = useState(true);
  const pathname = usePathname();

  // Control navbar visibility on scroll
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setShow(false);
        } else {
          setShow(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const navItems = [
    { name: '首页', href: '/' },
    { name: '关于', href: '/about' },
    { name: '项目', href: '/projects' },
    { name: '活动', href: '/events' },
  ];

  const [terminalText, setTerminalText] = useState('> system.nav.ready');
  
  // Simulate terminal text updates
  useEffect(() => {
    const texts = [
      '> system.nav.ready',
      '> navigation.module.loaded',
      '> user.session.active',
    ];
    let index = 0;
    
    const interval = setInterval(() => {
      index = (index + 1) % texts.length;
      setTerminalText(texts[index]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: show ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/80 backdrop-blur-sm border-b border-zinc-700/50 font-mono"
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and terminal text */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-green-500 font-bold">HW</span>
            </Link>
            <div className="hidden md:block text-xs text-green-500/70">
              {terminalText}
            </div>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 text-sm transition-colors ${
                  pathname === item.href
                    ? 'text-green-500'
                    : 'text-zinc-400 hover:text-green-500'
                }`}
              >
                <span className="text-green-500/50">&gt; </span>
                {item.name}
              </Link>
            ))}
            <Button
              className="ml-4 bg-green-500 hover:bg-green-600 text-black font-mono"
            >
              $ join
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-zinc-400 hover:text-green-500 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden py-4 space-y-2 border-t border-zinc-700/50"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-4 py-2 text-sm ${
                  pathname === item.href
                    ? 'text-green-500'
                    : 'text-zinc-400 hover:text-green-500'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span className="text-green-500/50">&gt; </span>
                {item.name}
              </Link>
            ))}
            <div className="pt-2 px-4">
              <Button
                className="w-full bg-green-500 hover:bg-green-600 text-black font-mono"
              >
                $ join
              </Button>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
