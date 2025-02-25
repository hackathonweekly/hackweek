'use client';

import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { Users, Code2, Trophy, Star } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "5000+",
    label: "创造者",
    description: "来自全国各地的独立开发者和创业者"
  },
  {
    icon: Code2,
    value: "100+",
    label: "活动",
    description: "轻松愉快的共学共创活动"
  },
  {
    icon: Trophy,
    value: "6+",
    label: "城市",
    description: "深圳、杭州、上海、北京、广州、清迈"
  },
  {
    icon: Star,
    value: "20+",
    label: "主题",
    description: "从AI到机器人，激发无限创意"
  }
];

const StatCard: React.FC<{
  icon: React.ElementType;
  value: string;
  label: string;
  description: string;
  index: number;
}> = ({ icon: Icon, value, label, description, index }) => {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  const controls = useAnimation();

  useEffect(() => {
    const duration = 2000; // 2秒完成动画
    const steps = 60; // 60帧
    const increment = numericValue / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setCount(Math.min(Math.floor(currentStep * increment), numericValue));
      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [numericValue]);

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative bg-background/50 backdrop-blur-sm border border-purple-500/10 rounded-2xl p-6 hover:border-purple-500/20 transition-all duration-300 hover:shadow-lg">
        <div className="mb-4 inline-block p-3 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl group-hover:from-purple-500/20 group-hover:to-blue-500/20 transition-colors">
          <Icon className="h-6 w-6" />
        </div>
        <div className="space-y-1">
          <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            {count}{value.includes('+') ? '+' : ''}
          </div>
          <div className="font-medium">{label}</div>
          <div className="text-sm text-muted-foreground">{description}</div>
        </div>
      </div>
    </motion.div>
  );
};

const StatsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-[350px] h-[350px] bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-3xl" />
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
                数据亮点
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              见证创新的力量，加入我们的创造者社区
            </p>
          </motion.div>

          {/* Stats grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                description={stat.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
