import PPTPageLayout from "./ppt-page-layout";
import { Rocket, Users, Laptop, Trophy, Globe } from "lucide-react";

export default function FeaturedActivities() {
  const activities = [
    {
      category: "高频活动",
      items: [
        {
          icon: Rocket,
          title: "每周迷你黑客松",
          description: "闪电式团队组建、MVP开发、Demo演示",
        },
        {
          icon: Laptop,
          title: "AI 共学工作坊",
          description: "AI 编程开发挑战、手搓桌面机器人、3D打印工作坊等",
        },
      ],
    },
    {
      category: "深度共创",
      items: [
        {
          icon: Users,
          title: "开发者交流会",
          description: "邀请技术大咖或社区专家分享前沿应用",
        },
        {
          icon: Trophy,
          title: "AI产品测评会",
          description: "体验新产品或工具，收集用户反馈",
        },
      ],
    },
    {
      category: "成果展示",
      items: [
        {
          icon: Trophy,
          title: "Demo Day",
          description: "展示最具潜力项目给投资人、媒体",
        },
        {
          icon: Globe,
          title: "12城联动AI共学",
          description: "与合作方706媒体社区等联合举办，扩大影响力",
        },
      ],
    },
  ];

  return (
    <PPTPageLayout>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="px-16 py-12">
          <div>
            <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm mb-4">
              特色活动
            </div>
            <h2 className="text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              让创意持续迸发的实践场
            </h2>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 px-16">
          <div className="grid grid-cols-3 gap-4">
            {activities.map((section) => (
              <div key={section.category} className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  {section.category}
                </h3>
                <div className="space-y-3">
                  {section.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.title}
                        className="p-4 bg-muted/50 rounded-xl border border-border hover:border-border/80 transition-colors"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-1.5 rounded-lg bg-primary/10">
                            <Icon className="w-4 h-4 text-primary" />
                          </div>
                          <h4 className="text-base font-medium text-foreground">
                            {item.title}
                          </h4>
                        </div>
                        <p className="text-xs text-muted-foreground pl-8 line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Activity photos */}
          <div className="mt-6 grid grid-cols-4 gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-[4/3] rounded-xl bg-muted/30 border border-border/50 flex items-center justify-center text-sm text-muted-foreground"
              >
                活动照片 {i}
              </div>
            ))}
          </div>
        </div>
      </div>
    </PPTPageLayout>
  );
}
