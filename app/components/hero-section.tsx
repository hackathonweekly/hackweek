'use client';

import { motion } from "framer-motion";
import { Terminal, ArrowRight, Code2 } from "lucide-react";

const commands = [
  {
    command: "$ hackathon init --name weekly",
    output: "Initializing HackathonWeekly environment..."
  },
  {
    command: "$ community status",
    output: "Active members: 1000+ | Projects: 200+ | Events: 50+"
  },
  {
    command: "$ next event --info",
    output: "Next hackathon: This weekend | Theme: AI + Open Source"
  }
];

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-zinc-900 font-mono relative overflow-hidden flex items-center">
      {/* Terminal background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4px_4px]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 text-xs font-medium bg-zinc-800 text-zinc-300 rounded-md border border-zinc-700/50">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-2" />
                v1.0.0 stable
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white">
                Hackathon<span className="text-green-500">.weekly()</span>
              </h1>
              <p className="text-lg text-zinc-400 max-w-xl">
                每周末，与开发者一起创造未来。在这里，我们用代码构建梦想，用创新改变世界。
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-500 hover:bg-green-600 text-black px-6 py-2 rounded font-mono group"
              >
                <span className="flex items-center">
                  $ join --next-event
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-zinc-800 hover:bg-zinc-700 text-green-500 px-6 py-2 rounded font-mono border border-zinc-700 group"
              >
                <span className="flex items-center">
                  $ learn --more
                  <Code2 className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {["1000+ 开发者", "200+ 项目", "50+ 活动"].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="bg-zinc-800/50 border border-zinc-700/50 rounded p-4 text-center"
                >
                  <span className="text-green-500 text-sm font-medium">{stat}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Terminal Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-black/50 backdrop-blur-sm border border-zinc-700/50 rounded-lg overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-2 bg-zinc-800/50 border-b border-zinc-700/50">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="text-xs text-zinc-400">hackathon-weekly ~ main</div>
                <Terminal className="h-4 w-4 text-zinc-400" />
              </div>

              {/* Terminal Content */}
              <div className="p-6 space-y-4">
                {commands.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">❯</span>
                      <span className="text-white">{item.command}</span>
                    </div>
                    <div className="text-zinc-400 pl-6">{item.output}</div>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-green-500">❯</span>
                  <span className="w-4 h-4 bg-green-500 animate-pulse" />
                </motion.div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-green-700 opacity-20 blur group-hover:opacity-30 transition duration-300" style={{ zIndex: -1 }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;