'use client';

import React from 'react';
import { motion } from "framer-motion";
import { Code2, Rocket, Users, Zap } from "lucide-react";

const features = [
  {
    icon: <Code2 className="h-5 w-5" />,
    title: "专注MVP",
    description: "帮助参与者快速开发最小可行产品"
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "面向Builder",
    description: "连接独立开发者、创业者、上班族"
  },
  {
    icon: <Rocket className="h-5 w-5" />,
    title: "多样活动",
    description: "从交流会到创客咖啡，轻松愉快"
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "共创共享",
    description: "公益开源，激发创新，共同成长"
  }
];

const IntroSection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
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
                周周黑客松是什么？
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              一个公益开源的极客社区，定期举办活动，帮助每个参与者实现最小可行产品
            </p>
          </motion.div>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group relative bg-background/50 backdrop-blur-sm border border-purple-500/10 rounded-2xl p-6 hover:border-purple-500/20 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-4 inline-block p-3 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl group-hover:from-purple-500/20 group-hover:to-blue-500/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;