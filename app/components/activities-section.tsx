'use client';

import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb, Rocket, Code, Target } from "lucide-react";

const activities = [
  {
    icon: Lightbulb,
    title: "创客交流会",
    description: "分享创意，碰撞灵感，结识志同道合的伙伴",
    time: "每周"
  },
  {
    icon: Code,
    title: "CoWork 创客咖啡",
    description: "一起工作，互相帮助，享受创造的过程",
    time: "每周"
  },
  {
    icon: Target,
    title: "Demo Day",
    description: "展示成果，分享经验，庆祝每一个进步",
    time: "每月"
  },
  {
    icon: Rocket,
    title: "黑客马拉松",
    description: "挑战自我，突破界限，实现想法",
    time: "不定期"
  }
];

const ActivityCard: React.FC<{
  icon: React.ElementType;
  title: string;
  description: string;
  time: string;
  index: number;
}> = ({ icon: Icon, title, description, time, index }) => {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Connection line */}
      {index < activities.length - 1 && (
        <div className="absolute top-8 left-8 w-full h-0.5 bg-green-500/20" />
      )}
      
      <div className="relative group">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative bg-zinc-900 border border-zinc-700/50 rounded-lg overflow-hidden hover:border-green-500/50 transition-colors">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800/50 border-b border-zinc-700/50">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <div className="w-2 h-2 rounded-full bg-yellow-500" />
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <div className="ml-2 text-xs text-zinc-400 font-mono">activity-{index + 1}</div>
          </div>

          <div className="p-4">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2 bg-zinc-800/50 rounded-lg group-hover:bg-green-500/20 transition-colors">
                <Icon className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <h3 className="font-bold text-white font-mono">{title}</h3>
                <p className="text-sm text-zinc-400 font-mono">{time}</p>
              </div>
            </div>
            <p className="text-zinc-400 font-mono">{description}</p>
            <div className="mt-4 pt-4 border-t border-zinc-700/50">
              <code className="text-xs text-green-500">$ activity --view {index + 1} --type "{title}"</code>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ActivitiesSection: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-900 font-mono relative overflow-hidden">
      {/* Terminal background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4px_4px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div 
            className="text-center mb-16 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-3 py-1 text-xs font-medium bg-zinc-800 text-zinc-300 rounded-md border border-zinc-700/50 mb-4">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2" />
              活动形式
            </div>
            <h2 className="text-3xl font-bold text-white">
              Activities<span className="text-green-500">.list()</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              多样化的活动形式，总有一款适合你
            </p>
          </motion.div>

          {/* Activities grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activities.map((activity, index) => (
              <ActivityCard
                key={index}
                icon={activity.icon}
                title={activity.title}
                description={activity.description}
                time={activity.time}
                index={index}
              />
            ))}
          </div>

          {/* Call to action */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button 
              size="lg" 
              className="bg-green-500 hover:bg-green-600 text-black font-mono group px-8"
            >
              <span className="flex items-center">
                $ join --community
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;