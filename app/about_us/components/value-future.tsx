import { Gem, Factory, Newspaper, Globe, Wrench, Trophy } from "lucide-react";
import Image from "next/image";

export default function ValueFuture() {
  const valueProps = [
    {
      icon: <Gem className="w-5 h-5 text-primary" />,
      title: "投资机构",
      points: [
        "获取高质量早期AI项目，寻找投资机会",
        "把握AI创新趋势，捕捉产业新风口",
      ],
    },
    {
      icon: <Factory className="w-5 h-5 text-primary" />,
      title: "企业合作",
      points: [
        "七天快速验证产品场景，探索市场需求",
        "多元化品牌联合活动，促进社区共创",
      ],
    },
    {
      icon: <Newspaper className="w-5 h-5 text-primary" />,
      title: "媒体资源",
      points: [
        "创新项目与成果优先，获得独家报道权",
        "联合策划主题活动，扩大社区影响力",
      ],
    },
  ];

  const futurePlans = [
    {
      icon: <Globe className="w-5 h-5 text-primary" />,
      title: "城市拓展",
      description: "全国主要城市分部布局，形成创新网络",
    },
    {
      icon: <Wrench className="w-5 h-5 text-primary" />,
      title: "MVP工具链",
      description: "标准化创新验证流程，加速从0到1实现",
    },
    {
      icon: <Trophy className="w-5 h-5 text-primary" />,
      title: "年度盛会",
      description: "汇聚产业各方力量，打造创新展示平台",
    },
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-500/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-500/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-xs md:text-sm mb-4">
            合作价值
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            共建AI生态与未来展望
          </h2>
        </div>

        {/* Value Proposition Section */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            合作价值
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {valueProps.map((prop, index) => (
              <div
                key={index}
                className="p-4 bg-muted/50 rounded-xl border border-border hover:border-border/80 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-1.5 rounded-lg bg-primary/10">
                    {prop.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {prop.title}
                  </h3>
                </div>

                <div className="space-y-2 pl-9">
                  {prop.points.map((point, pointIndex) => (
                    <div
                      key={pointIndex}
                      className="flex items-start gap-2"
                    >
                      <div className="w-1 h-1 rounded-full bg-primary/60 mt-1.5" />
                      <p className="text-sm text-foreground flex-1">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Plans Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            未来计划
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {futurePlans.map((plan, index) => (
              <div
                key={index}
                className="p-4 bg-muted/50 rounded-xl border border-border hover:border-border/80 transition-colors"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-2 rounded-xl bg-primary/10 mb-3">
                    {plan.icon}
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">
                    {plan.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision statement */}
        <div className="mt-6 p-4 bg-muted/20 rounded-xl border border-border/50">
          <p className="text-center text-sm md:text-base text-muted-foreground">
            通过持续创新和生态共建，让每一个创意都能找到实现的可能
          </p>
        </div>
      </div>
    </section>
  );
} 