import { Circle } from "lucide-react";
import Image from "next/image";

export default function Milestones() {
  const milestones = [
    {
      date: "2024.05",
      title: "第一场活动",
      description: "周周黑客松成立！小伙伴们聚集啦，一起开发",
    },
    {
      date: "2024.06",
      title: "出海/AI/创业",
      description: "短短2个月，参与人数已突破500人创业者，打造出海/AI项目",
    },
    {
      date: "2024.08",
      title: "社区扩展全国化",
      description: "深圳、广州、上海、北京、杭州、清迈等城市自发组建分部",
    },
    {
      date: "2024.10",
      title: "主题形式多元化",
      description: "新增健康、机器人、出海SEO等主题探索AI落地、AI教育、DemoDay",
    },
    {
      date: "2024.12",
      title: "生态共建",
      description: "国内多地共同体验探索AI游戏、 3D打印、创新性游戏等多体活动形式",
    },
    {
      date: "2025.02",
      title: "开发者先锋大会",
      description: "与Z·Pilot合作参加上海开发者先锋大会，与全国创客交流",
    },
  ];

  const stats = [
    { label: "社区人数", value: "5000+人" },
    { label: "活动场次", value: "100+场" },
    { label: "城市分布", value: "6个" },
    { label: "创业项目", value: "50+" },
    { label: "主理人", value: "30+" },
    { label: "知识库文章", value: "100+" },
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-background to-background/95">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/90"></div>
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:44px_44px]"/>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-xs md:text-sm mb-4">
            社区发展历程
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            深圳出发，迎向全球
          </h2>
        </div>

        {/* Timeline - Desktop version (hidden on mobile) */}
        <div className="hidden md:block relative mb-16">
          {/* Timeline line */}
          <div className="absolute left-0 right-0 h-1 top-6 bg-border" />

          {/* Milestones */}
          <div className="relative grid grid-cols-2 lg:grid-cols-6 gap-4">
            {milestones.map((milestone, index) => {
              // 根据索引选择不同的背景色
              const bgColors = [
                'bg-purple-50',
                'bg-blue-50',
                'bg-green-50',
                'bg-yellow-50',
                'bg-red-50',
                'bg-orange-50',
              ];
              const dotColors = [
                'bg-purple-500',
                'bg-blue-500',
                'bg-green-500',
                'bg-yellow-500',
                'bg-red-500',
                'bg-orange-500',
              ];

              return (
                <div key={milestone.date} className="pt-2">
                  {/* Dot */}
                  <div 
                    className={`absolute top-5 w-3 h-3 rounded-full ${dotColors[index]}`} 
                    style={{ left: `${(index * (100 / milestones.length)) + (50 / milestones.length)}%` }} 
                  />

                  {/* Content */}
                  <div className={`mt-6 p-4 rounded-xl ${bgColors[index]} border border-border/50`}>
                    <div className="text-sm font-medium mb-2">{milestone.date}</div>
                    <h3 className="text-base font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-sm text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline - Mobile version (visible only on mobile) */}
        <div className="md:hidden space-y-4 mb-12">
          {milestones.map((milestone, index) => {
            const bgColors = [
              'bg-purple-50',
              'bg-blue-50',
              'bg-green-50',
              'bg-yellow-50',
              'bg-red-50',
              'bg-orange-50',
            ];
            const dotColors = [
              'bg-purple-500',
              'bg-blue-500',
              'bg-green-500',
              'bg-yellow-500',
              'bg-red-500',
              'bg-orange-500',
            ];

            return (
              <div key={milestone.date} className={`p-4 rounded-xl ${bgColors[index]} border border-border/50 relative`}>
                <div className={`absolute left-0 top-1/2 -translate-x-1/2 w-3 h-3 rounded-full ${dotColors[index]}`} />
                <div className="text-sm font-medium mb-1">{milestone.date}</div>
                <h3 className="text-base font-semibold mb-1">{milestone.title}</h3>
                <p className="text-sm text-muted-foreground">{milestone.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="bg-primary/5 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-border/50">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-lg md:text-xl font-bold text-primary">{stat.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 