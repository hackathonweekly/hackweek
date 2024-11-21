'use client';

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const timelineEvents = [
  {
    date: "2024.05.19",
    title: "社区成立",
    description: "周周黑客松在深圳成立，开启共学共创之旅"
  },
  {
    date: "2024.06",
    title: "社区扩张",
    description: "深圳社区迅速发展，吸引500+创造者加入"
  },
  {
    date: "2024.07",
    title: "全国布局",
    description: "深圳、广州、上海、北京、杭州等城市相继成立分部"
  },
  {
    date: "2024.08",
    title: "主题拓展",
    description: "新增硬件、机器人、出海SEO等创新主题"
  },
  {
    date: "2024.09",
    title: "形式创新",
    description: "推出Cursor共创、AI夜校、DemoDay等多样化活动"
  },
  {
    date: "2024.10",
    title: "国际化探索",
    description: "在泰国清迈举办首次海外创客活动"
  },
  {
    date: "2024.11",
    title: "生态共建",
    description: "与更多合作伙伴一起探索AI游戏、3D打印等新领域"
  }
];

const TimelineSection = () => {
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
            发展历程
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Timeline<span className="text-green-500">.history()</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            记录每一个重要的里程碑
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-zinc-700/50" />

          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.date}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex items-center ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              } mb-12`}
            >
              {/* Terminal Window */}
              <div className={`w-[calc(50%-2rem)] ${
                index % 2 === 0 ? "mr-8" : "ml-8"
              }`}>
                <div className="bg-black/50 backdrop-blur-sm border border-zinc-700/50 rounded-lg overflow-hidden hover:border-green-500/50 transition-colors">
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between px-4 py-2 bg-zinc-800/50 border-b border-zinc-700/50">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500" />
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                    </div>
                    <div className="text-xs text-zinc-400">{event.date}</div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Terminal className="h-4 w-4 text-green-500" />
                      <h3 className="text-white font-bold">{event.title}</h3>
                    </div>
                    <p className="text-sm text-zinc-400">{event.description}</p>
                    <div className="mt-3 pt-3 border-t border-zinc-700/50">
                      <code className="text-xs text-green-500">
                        $ event --date {event.date} --type milestone
                      </code>
                    </div>
                  </div>
                </div>
              </div>

              {/* Circle on Timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-green-500 border-4 border-zinc-900" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;