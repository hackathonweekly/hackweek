'use client';

import { motion } from "framer-motion";
import { Users, Code, Star, Award } from "lucide-react";

const stats = [
  {
    id: 1,
    name: "社区成员",
    value: "200+",
    icon: Users,
    command: "$ stats --type members"
  },
  {
    id: 2,
    name: "项目数量",
    value: "50+",
    icon: Code,
    command: "$ stats --type projects"
  },
  {
    id: 3,
    name: "活动场次",
    value: "30+",
    icon: Star,
    command: "$ stats --type events"
  },
  {
    id: 4,
    name: "获奖项目",
    value: "10+",
    icon: Award,
    command: "$ stats --type awards"
  }
];

const StatsSection = () => {
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
            数据统计
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Stats<span className="text-green-500">.summary()</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            社区成长的每一个数字，都见证着我们共同的努力
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="bg-black/50 backdrop-blur-sm border border-zinc-700/50 rounded-lg overflow-hidden hover:border-green-500/50 transition-colors">
                  {/* Terminal Header */}
                  <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800/50 border-b border-zinc-700/50">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <div className="ml-2 text-xs text-zinc-400">stats-{stat.id}</div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-2 bg-zinc-800/50 rounded-lg group-hover:bg-green-500/20 transition-colors">
                        <Icon className="h-6 w-6 text-green-500" />
                      </div>
                      <div>
                        <p className="text-sm text-zinc-400">{stat.name}</p>
                        <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-zinc-700/50">
                      <code className="text-xs text-green-500">{stat.command}</code>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;