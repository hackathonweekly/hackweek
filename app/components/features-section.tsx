'use client';

import React from 'react';
import { motion } from "framer-motion";
import { Award, Calendar, Code2, Globe2, Laptop, LucideIcon, MessageSquare, Trophy, Users } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "周周黑客松",
    description: "每周末固定时间，线上/线下结合的创客活动"
  },
  {
    icon: Users,
    title: "创客社区",
    description: "连接独立开发者、创业者和上班族，共同学习和成长"
  },
  {
    icon: Code2,
    title: "技术驱动",
    description: "从AI到机器人，探索前沿技术，实现创新想法"
  },
  {
    icon: Globe2,
    title: "多城市覆盖",
    description: "北京、上海、深圳、广州、杭州定期举办"
  },
  {
    icon: Trophy,
    title: "Demo Day",
    description: "每月展示日，分享创造的喜悦，展示最新成果"
  },
  {
    icon: Award,
    title: "开源精神",
    description: "倡导开源协作，共同打造更好的产品"
  }
];

const FeatureCard: React.FC<{
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}> = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      className="group relative bg-zinc-900/80 backdrop-blur-sm border border-emerald-500/20 rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Terminal window header */}
      <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800/80 border-b border-emerald-500/20">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
        </div>
        <div className="flex-1 text-center">
          <span className="text-xs text-zinc-400 font-mono">feature_{index + 1}.sh</span>
        </div>
      </div>
      
      {/* Terminal content */}
      <div className="p-6">
        <div className="relative space-y-4">
          <div className="flex items-start gap-3">
            <div className="mt-1">
              <Icon className="h-5 w-5 text-emerald-500" />
            </div>
            <div className="flex-1">
              <p className="font-mono text-emerald-500 mb-1">
                <span className="text-zinc-500">$</span> echo "{title}"
              </p>
              <h3 className="text-lg font-semibold font-mono text-zinc-200">{title}</h3>
            </div>
          </div>
          <div>
            <p className="font-mono text-emerald-500 mb-1">
              <span className="text-zinc-500">$</span> cat description.txt
            </p>
            <p className="text-zinc-400 pl-4 border-l border-zinc-700">{description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-zinc-900/50">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

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
            <div className="inline-block">
              <div className="font-mono text-emerald-500 mb-2">
                <span className="text-zinc-500">$</span> ./display_features.sh
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-mono tracking-tight text-zinc-200">
                周周黑客松
              </h2>
            </div>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto font-mono">
              一个面向独立开发者的创新社区，让每个人都能找到志同道合的伙伴，一起探索和创造
            </p>
          </motion.div>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;