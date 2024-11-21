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
      className="group relative bg-background/50 backdrop-blur-sm border border-purple-500/10 rounded-2xl p-8 hover:border-purple-500/20 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -5,
        boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)",
      }}
    >
      <div className="relative z-10">
        <div className="mb-4 inline-block p-3 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl group-hover:from-purple-500/20 group-hover:to-blue-500/20 transition-colors">
          <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
        </div>
        <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-primary">
          {title}
        </h3>
        <p className="text-muted-foreground">
          {description}
        </p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};
FeatureCard.displayName = 'FeatureCard';

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl" />
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                周周黑客松
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              一个面向独立开发者的创新社区，让每个人都能找到志同道合的伙伴，一起探索和创造
            </p>
          </motion.div>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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