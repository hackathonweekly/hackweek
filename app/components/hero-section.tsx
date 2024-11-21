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
      <div className="container mx-auto px-4 py-12 md:py-20 relative w-full">
        {/* Add padding top to account for fixed header */}
        <div className="pt-16 md:pt-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6 lg:space-y-8"
            >
              <div className="space-y-4">
                <div className="inline-flex items-center px-3 py-1 text-xs font-medium bg-zinc-800 text-zinc-300 rounded-md border border-zinc-700/50">
                  <span className="w-2 h-2 rounded-full bg-green-500 mr-2" />
                  v1.0.0 stable
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Hackathon
                  <span className="text-green-500 inline-block">.weekly()</span>
                </h1>
                <p className="text-base sm:text-lg text-zinc-400 max-w-xl">
                  每周末，与开发者一起创造未来。在这里，我们用代码构建梦想，用创新改变世界。
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-green-500 hover:bg-green-600 text-black px-6 py-2.5 rounded font-mono group text-sm sm:text-base w-full sm:w-auto"
                >
                  <span className="flex items-center justify-center">
                    $ join --next-event
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-zinc-800 hover:bg-zinc-700 text-green-500 px-6 py-2.5 rounded font-mono border border-zinc-700 group text-sm sm:text-base w-full sm:w-auto"
                >
                  <span className="flex items-center justify-center">
                    $ learn --more
                    <Code2 className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
              </div>

              {/* Stats */}
              <div className="flex flex-row gap-3 sm:gap-4 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
                {[
                  { number: "1000+", label: "开发者" },
                  { number: "200+", label: "项目" },
                  { number: "50+", label: "活动" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="flex-1 min-w-[120px] bg-zinc-800/50 border border-zinc-700/50 rounded-lg p-3 text-center group hover:border-emerald-500/50 transition-colors"
                  >
                    <div className="space-y-1">
                      <div className="text-emerald-500 text-xl sm:text-2xl font-bold font-mono">
                        {stat.number}
                      </div>
                      <div className="text-zinc-400 text-sm">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Terminal Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative lg:block"
            >
              <div className="bg-black/50 backdrop-blur-sm border border-zinc-700/50 rounded-lg overflow-hidden shadow-xl">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-2 bg-zinc-800/50 border-b border-zinc-700/50">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="text-zinc-400 text-sm">terminal</div>
                  <div className="w-10" /> {/* Spacer for balance */}
                </div>

                {/* Terminal Content */}
                <div className="p-4 space-y-4 text-sm sm:text-base">
                  {commands.map((cmd, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.2 }}
                      className="space-y-1"
                    >
                      <div className="flex items-center text-green-500">
                        <span className="text-zinc-600 mr-2">❯</span>
                        <span className="break-all">{cmd.command}</span>
                      </div>
                      <div className="text-zinc-400 pl-4 break-all">{cmd.output}</div>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 1.5 }}
                    className="flex items-center text-green-500"
                  >
                    <span className="text-zinc-600 mr-2">❯</span>
                    <span className="animate-pulse">_</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;