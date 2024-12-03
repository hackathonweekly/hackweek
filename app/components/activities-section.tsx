'use client';

import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb, Rocket, Code, Target } from "lucide-react";
import Link from "next/link";

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
}> = React.memo(({ icon: Icon, title, description, time, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="relative cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => setIsExpanded(!isExpanded)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Connection line */}
      {index < activities.length - 1 && (
        <div className="absolute left-6 top-16 w-0.5 h-16 bg-gradient-to-b from-purple-500/20 to-transparent" />
      )}

      <div className="relative bg-background/50 backdrop-blur-sm border border-purple-500/10 rounded-2xl p-6 hover:border-purple-500/20 transition-all duration-300 hover:shadow-lg">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl">
            <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-lg font-semibold">{title}</h3>
              <span className="text-sm text-muted-foreground bg-secondary/50 px-2 py-0.5 rounded-full">
                {time}
              </span>
            </div>
            <p className="text-muted-foreground">{description}</p>
            
            <motion.div
              initial={false}
              animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
              className="overflow-hidden mt-4"
            >
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• 活动时长：2-4小时</p>
                <p>• 参与人数：5-20人</p>
                <p>• 活动形式：线上/线下</p>
                <p>• 参与方式：扫码报名</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
});
ActivityCard.displayName = 'ActivityCard';

const ActivitiesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
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
          <div className="mt-16 text-center">
            <Link href="/join">
              <Button size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                加入社区
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;