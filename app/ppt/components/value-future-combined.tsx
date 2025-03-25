import PPTPageLayout from "./ppt-page-layout";
import { Gem, Factory, Newspaper, Globe, Wrench, Trophy } from "lucide-react";

export default function ValueFutureCombined() {
  const valueProps = [
    {
      icon: Gem,
      title: "投资机构",
      points: [
        "获取高质量人才库、项目库，寻找投资机会",
        "把握AI创新趋势，捕捉产业新风口",
      ],
    },
    {
      icon: Factory,
      title: "企业合作",
      points: [
        "推广相关服务产品，企业 AI 转型工作坊",
        "多元化品牌联合活动，促进社区共创",
      ],
    },
    {
      icon: Newspaper,
      title: "社区媒体",
      points: [
        "联合策划主题活动，扩大社区影响力",
        "优质项目早期沉淀，创新项目与成果优先报道",
      ],
    },
  ];

  const futurePlans = [
    {
      icon: Globe,
      title: "城市拓展",
      description: "全国主要城市分部布局，形成创新网络",
    },
    {
      icon: Wrench,
      title: "MVP工具链",
      description: "标准化创新验证流程，加速从0到1实现",
    },
    {
      icon: Trophy,
      title: "年度盛会",
      description: "汇聚产业各方力量，打造创新展示平台",
    },
  ];

  return (
    <PPTPageLayout>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="px-16 py-8">
          <div>
            <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm mb-4">
              合作价值
            </div>
            <h2 className="text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              共建AI生态与未来展望
            </h2>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 px-16">
          {/* Value Proposition Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              合作价值
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {valueProps.map((prop) => {
                const Icon = prop.icon;
                return (
                  <div
                    key={prop.title}
                    className="p-4 bg-muted/50 rounded-xl border border-border hover:border-border/80 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-1.5 rounded-lg bg-primary/10">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {prop.title}
                      </h3>
                    </div>

                    <div className="space-y-2 pl-9">
                      {prop.points.map((point, index) => (
                        <div
                          key={index}
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
                );
              })}
            </div>
          </div>

          {/* Future Plans Section */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              未来计划
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {futurePlans.map((plan) => {
                const Icon = plan.icon;
                return (
                  <div
                    key={plan.title}
                    className="p-4 bg-muted/50 rounded-xl border border-border hover:border-border/80 transition-colors"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="p-2 rounded-xl bg-primary/10 mb-3">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-base font-semibold text-foreground mb-2">
                        {plan.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {plan.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Vision statement */}
          <div className="mt-6 p-4 bg-muted/20 rounded-xl border border-border/50">
            <p className="text-center text-base text-muted-foreground">
              通过持续创新和生态共建，让每一个创意都能找到实现的可能
            </p>
          </div>
        </div>
      </div>
    </PPTPageLayout>
  );
} 