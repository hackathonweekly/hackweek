import PPTPageLayout from "./ppt-page-layout";
import { Globe, Wrench, Gamepad2, Trophy, Code } from "lucide-react";

export default function FuturePlans() {
  const plans = [
    {
      icon: Globe,
      title: "更多城市分部落地",
      description: "加速在全国其他主要城市设立周周黑客松",
    },
    {
      icon: Wrench,
      title: "系统化 MVP 工具箱",
      description: "提供完整的工具链和最佳实践，帮助创作者快速验证想法",
    },
    {
      icon: Gamepad2,
      title: "更多赛道探索",
      description: "AI+游戏、AI+艺术、AI+教育、机器人、3D打印等领域的创新实践",
    },
    {
      icon: Trophy,
      title: "大型年度盛会",
      description: "计划举办年度AI创客大会，邀请合作伙伴、投资人等共襄盛举",
    },
    {
      icon: Code,
      title: "持续构建开源生态",
      description: "拉通高校、企业、机构，共同完善开源项目和知识库",
    },
  ];

  return (
    <PPTPageLayout>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="px-16 py-12">
          <div>
            <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm mb-4">
              未来计划
            </div>
            <h2 className="text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              迈向更多可能
            </h2>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 px-16">
          <div className="grid grid-cols-3 gap-4">
            {plans.slice(0, 3).map((plan) => {
              const Icon = plan.icon;
              return (
                <div
                  key={plan.title}
                  className="p-4 bg-muted/50 rounded-xl border border-border hover:border-border/80 transition-colors"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 rounded-xl bg-primary/10 mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-base font-semibold text-foreground mb-2">
                      {plan.title}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {plan.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            {plans.slice(3).map((plan) => {
              const Icon = plan.icon;
              return (
                <div
                  key={plan.title}
                  className="p-4 bg-muted/50 rounded-xl border border-border hover:border-border/80 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-xl bg-primary/10">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-foreground mb-2">
                        {plan.title}
                      </h3>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {plan.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
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
