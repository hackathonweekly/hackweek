import PPTPageLayout from "./ppt-page-layout";
import { Rocket, Users, MapPin, BookOpen } from "lucide-react";

export default function CommunityOverview() {
  const stats = [
    { label: "社区成员", value: "5000+", icon: Users },
    { label: "覆盖城市", value: "6+", icon: MapPin },
    { label: "线下活动", value: "100+", icon: Rocket },
    { label: "知识库文章", value: "200+", icon: BookOpen },
  ];

  return (
    <PPTPageLayout>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="px-16 py-12">
          <div>
            <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm mb-4">
              社区简介
            </div>
            <h2 className="text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              我们是谁？
            </h2>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 px-16">
          {/* Core mission */}
          <div className="mb-12">
            <div className="p-8 bg-muted/50 rounded-xl border border-border hover:border-border/80 transition-colors">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">核心定位</h3>
              <p className="text-xl text-muted-foreground leading-relaxed">
                AI产品创造者社区，致力于帮助创造者从0到1实现最小可行产品（MVP），并快速找到他们的前100个用户
              </p>
              <div className="mt-6 inline-block px-4 py-2 bg-background rounded-lg border border-border/80">
                <span className="text-muted-foreground">成立于 2024年5月，深圳</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="group p-6 bg-muted/50 rounded-xl border border-border hover:border-border/80 transition-colors"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-background text-primary group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-lg text-muted-foreground group-hover:text-foreground transition-colors">
                      {stat.label}
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-primary">
                    {stat.value}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </PPTPageLayout>
  );
}
