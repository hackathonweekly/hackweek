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
        <div className="absolute top-8 left-8 w-full h-0.5 bg-gradient-to-r from-purple-500/20 to-blue-500/20" />
      )}
      
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative bg-background/50 backdrop-blur-sm border border-purple-500/10 rounded-2xl p-6 hover:border-purple-500/20 transition-colors">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl group-hover:from-purple-500/20 group-hover:to-blue-500/20 transition-colors">
              <Icon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold">{title}</h3>
              <p className="text-sm text-muted-foreground">{time}</p>
            </div>
          </div>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const ActivitiesSection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-[350px] h-[350px] bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-3xl" />
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
                活动形式
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              多样化的活动形式，总有一款适合你
            </p>
          </motion.div>

          {/* Activities timeline */}
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
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 text-white px-8 h-12 rounded-full group"
            >
              <span className="flex items-center">
                加入社区
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