'use client';

import React from 'react';
import { motion } from "framer-motion";
import { Code2, Globe2, Users, Laptop } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "专注 MVP",
    description: "帮助参与者快速开发最小可行产品"
  },
  {
    icon: Users,
    title: "创客社区",
    description: "连接独立开发者、创业者和上班族，共同学习和成长"
  },
  {
    icon: Laptop,
    title: "开源协作",
    description: "倡导开源精神，共同打造更好的产品"
  },
  {
    icon: Globe2,
    title: "多城市覆盖",
    description: "北上广深、杭州等城市定期举办"
  }
];

const FeatureCard: React.FC<{
  icon: any;
  title: string;
  description: string;
  index: number;
}> = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      className="group relative bg-background/50 backdrop-blur-sm border border-purple-500/10 rounded-2xl p-6 hover:border-purple-500/20 transition-colors"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="mb-4 inline-block p-3 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl group-hover:from-purple-500/20 group-hover:to-blue-500/20 transition-colors">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
};

const IntroSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-[250px] h-[250px] bg-blue-500/10 rounded-full blur-3xl" />
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
              一个AI产品创造者社区，定期举办活动，帮助每个参与者实现最小可行产品
            </p>
          </motion.div>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

export default IntroSection;
