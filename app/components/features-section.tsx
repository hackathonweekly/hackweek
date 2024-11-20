'use client';

import React from 'react';
import { motion } from "framer-motion";
import { Award, Calendar, Globe2, Laptop, LucideIcon, MessageSquare, Trophy } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "多样化活动",
    description: "从AI到机器人，从交流会到创客咖啡"
  },
  {
    icon: Globe2,
    title: "多城市覆盖",
    description: "北京、上海、深圳、广州、杭州定期举办"
  },
  {
    icon: Laptop,
    title: "共学共创",
    description: "轻松愉快的氛围，专注实现想法"
  },
  {
    icon: MessageSquare,
    title: "创客社区",
    description: "连接独立开发者，创业者，上班族"
  },
  {
    icon: Trophy,
    title: "Demo Day",
    description: "每月展示日，分享创造的喜悦"
  },
  {
    icon: Award,
    title: "开源精神",
    description: "公益开源，激发无限可能"
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
      className="group relative bg-background/50 backdrop-blur-sm border border-purple-500/10 rounded-2xl p-8 hover:border-purple-500/20 transition-colors"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative">
        <div className="mb-4 inline-block p-3 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl group-hover:from-purple-500/20 group-hover:to-blue-500/20 transition-colors">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
};

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
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
                活动特色
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              我们为参与者提供全方位支持，让你专注于创造和实现想法
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