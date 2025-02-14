"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="min-h-screen relative flex items-center py-16 md:py-24 overflow-hidden">
      {/* Background shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-[150px] md:w-[300px] h-[150px] md:h-[300px] bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
            {/* Left content */}
            <motion.div
              className="flex-1 text-center lg:text-left space-y-6 md:space-y-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block"
              >
                <div className="text-sm md:text-base bg-primary/10 text-primary rounded-full px-4 py-1 inline-block">
                  AI产品创造者社区
                </div>
              </motion.div>

              <motion.h1
                className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                  HackathonWeekly
                </span>
                <br />
                <span className="text-foreground mt-2 block">周周黑客松</span>
              </motion.h1>

              <motion.p
                className="text-base md:text-xl text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                花1周时间，创造1个最小可行产品
                <br />
                解决1个生活痛点，也许就是下1个改变世界的起点
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Link href="/join">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 text-white px-6 md:px-8 h-11 md:h-12 rounded-full group"
                  >
                    <span className="flex items-center">
                      加入社区
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </Link>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-500/20 hover:border-purple-500/40 h-11 md:h-12 rounded-full"
                  onClick={() => window.open('https://hackathonweekly.feishu.cn/wiki/space/7364620968817475585?ccm_open_type=lark_wiki_spaceLink&open_tab_from=wiki_home', '_blank')}
                >
                  <Code2 className="mr-2 h-4 w-4" />
                  了解更多
                </Button>
              </motion.div>
            </motion.div>

            {/* Right content - Logo (hidden on mobile) */}
            <motion.div
              className="flex-1 relative hidden lg:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="relative w-full aspect-square max-w-[400px] mx-auto">
                {/* Decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" />

                {/* Logo container */}
                <div className="relative bg-gradient-to-r from-purple-500/[0.08] to-blue-500/[0.08] rounded-3xl p-6 backdrop-blur-sm border border-white/10">
                  <Image
                    src="/purple-logo.png"
                    alt="HackathonWeekly Logo"
                    width={320}
                    height={320}
                    className="w-full h-full object-contain animate-float"
                  />

                  {/* Floating badges */}
                  <motion.div
                    className="absolute -top-4 -right-4 bg-white/[0.08] backdrop-blur-sm rounded-full p-4 border border-white/10"
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Rocket className="w-6 h-6 text-purple-500" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Add keyframes for float animation */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
