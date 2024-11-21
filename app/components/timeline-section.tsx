"use client";

import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";

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

export default function TimelineSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              社区历程
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            半年时间，从0到1的共创旅程
          </p>
        </motion.div>

        <div className="relative">
          {/* 在大屏幕上显示的中间线 */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-border hidden md:block" />
          {/* 在小屏幕上显示的左侧线 */}
          <div className="absolute left-4 h-full w-0.5 bg-border md:hidden" />
          
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.date}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-row`}
              >
                {/* 移动端布局 */}
                <div className="md:hidden relative flex items-center justify-center w-8">
                  <div className="h-4 w-4 rounded-full bg-primary" />
                </div>
                
                <div className={`md:w-1/2 md:pr-8 w-full ${
                  index % 2 === 0 ? "md:text-right" : "md:text-left"
                } text-left`}>
                  <div>
                    <div className={`flex items-center gap-2 mb-1 ${
                      index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                    } justify-start`}>
                      <CalendarDays className="h-4 w-4 text-muted-foreground" />
                      <time className="text-sm text-muted-foreground">{event.date}</time>
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{event.title}</h3>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>
                </div>
                
                {/* 桌面端中间点 */}
                <div className="relative items-center justify-center w-8 hidden md:flex">
                  <div className="h-4 w-4 rounded-full bg-primary" />
                </div>
                
                <div className="w-1/2 pl-8 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}