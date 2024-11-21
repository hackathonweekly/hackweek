'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, X } from 'lucide-react';

interface Command {
  id: string;
  name: string;
  description: string;
  action: () => void;
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const commands: Command[] = [
    {
      id: 'home',
      name: 'cd /',
      description: '返回首页',
      action: () => scrollToSection('hero')
    },
    {
      id: 'intro',
      name: 'cat intro.md',
      description: '查看介绍',
      action: () => scrollToSection('intro')
    },
    {
      id: 'activities',
      name: './list_activities',
      description: '浏览活动',
      action: () => scrollToSection('activities')
    },
    {
      id: 'gallery',
      name: 'ls ./projects',
      description: '项目展示',
      action: () => scrollToSection('gallery')
    },
    {
      id: 'stats',
      name: 'stats --summary',
      description: '数据统计',
      action: () => scrollToSection('stats')
    },
    {
      id: 'timeline',
      name: 'history --all',
      description: '发展历程',
      action: () => scrollToSection('timeline')
    },
    {
      id: 'team',
      name: 'members --list',
      description: '团队成员',
      action: () => scrollToSection('team')
    },
    {
      id: 'partners',
      name: 'partners --show',
      description: '合作伙伴',
      action: () => scrollToSection('partners')
    }
  ];

  const filteredCommands = commands.filter(command =>
    command.name.toLowerCase().includes(search.toLowerCase()) ||
    command.description.toLowerCase().includes(search.toLowerCase())
  );

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < filteredCommands.length - 1 ? prev + 1 : prev
        );
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => prev > 0 ? prev - 1 : prev);
      }
      if (e.key === 'Enter') {
        e.preventDefault();
        filteredCommands[selectedIndex]?.action();
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, filteredCommands]);

  return (
    <>
      {/* Command palette trigger button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 p-3 bg-zinc-800 rounded-full shadow-lg border border-emerald-500/20 hover:bg-zinc-700 transition-colors"
        aria-label="Open command palette"
      >
        <Terminal className="w-5 h-5 text-emerald-500" />
      </button>

      {/* Command palette modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl z-50"
            >
              <div className="terminal-window mx-4">
                <div className="terminal-header">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-xs text-zinc-400 font-mono">terminal</span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-zinc-400 hover:text-zinc-100"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="p-3">
                  <div className="flex items-center gap-2 text-emerald-500 font-mono">
                    <span className="text-zinc-500">$</span>
                    <input
                      type="text"
                      value={search}
                      onChange={(e) => {
                        setSearch(e.target.value);
                        setSelectedIndex(0);
                      }}
                      className="flex-1 bg-transparent outline-none"
                      placeholder="输入命令或搜索..."
                      autoFocus
                    />
                  </div>
                  <div className="mt-4 space-y-2">
                    {filteredCommands.map((command, index) => (
                      <button
                        key={command.id}
                        className={`w-full text-left p-2 rounded font-mono text-sm ${
                          index === selectedIndex
                            ? 'bg-emerald-500/10 text-emerald-500'
                            : 'text-zinc-400 hover:bg-zinc-800'
                        }`}
                        onClick={() => command.action()}
                        onMouseEnter={() => setSelectedIndex(index)}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-500">$</span>
                          <span className="flex-1">{command.name}</span>
                          <span className="text-xs text-zinc-500">{command.description}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
