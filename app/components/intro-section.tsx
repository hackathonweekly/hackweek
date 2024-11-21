'use client';

import { motion } from "framer-motion";
import { Terminal, Code2, Rocket, Users } from "lucide-react";

export default function IntroSection() {
  const features = [
    {
      icon: <Terminal className="w-6 h-6 text-green-500" />,
      title: "每周黑客松",
      description: "每周组织一次黑客松活动，让创意不断涌现",
      command: "$ schedule --weekly hackathon",
    },
    {
      icon: <Code2 className="w-6 h-6 text-green-500" />,
      title: "开源精神",
      description: "所有项目均开源，共同学习，共同进步",
      command: "$ git push --open-source",
    },
    {
      icon: <Rocket className="w-6 h-6 text-green-500" />,
      title: "快速迭代",
      description: "一周时间，从想法到产品的最小实现",
      command: "$ deploy --mvp v1.0.0",
    },
    {
      icon: <Users className="w-6 h-6 text-green-500" />,
      title: "社区驱动",
      description: "由社区成员主导，共同成长的学习型组织",
      command: "$ community --growth",
    },
  ];

  return (
    <section className="py-20 bg-zinc-900 font-mono relative overflow-hidden">
      {/* Terminal background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4px_4px]" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-3 py-1 text-xs font-medium bg-zinc-800 text-zinc-300 rounded-md border border-zinc-700/50 mb-4">
            <span className="w-2 h-2 rounded-full bg-green-500 mr-2" />
            特色介绍
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Features<span className="text-green-500">.init()</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            以开源精神为引领，以技术创新为动力，打造充满活力的极客社区
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black/50 backdrop-blur-sm border border-zinc-700/50 rounded-lg p-6 hover:border-green-500/50 transition-colors"
            >
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <div className="w-2 h-2 rounded-full bg-yellow-500" />
                <div className="w-2 h-2 rounded-full bg-green-500" />
              </div>

              {/* Feature Content */}
              <div className="space-y-4">
                <div className="p-2 bg-zinc-800/50 rounded-md inline-block">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                <p className="text-zinc-400 text-sm">{feature.description}</p>
                <div className="pt-4 border-t border-zinc-700/50">
                  <code className="text-xs text-green-500">
                    {feature.command}
                  </code>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}