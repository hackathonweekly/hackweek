import PPTPageLayout from "./ppt-page-layout";
import { Target, Users, GitBranch, MapPin, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CoreHighlights() {
  const highlights = [
    {
      icon: Target,
      title: "专注MVP",
      description: "提供系统化方法论、开源工具和案例支持，7天完成MVP",
    },
    {
      icon: Users,
      title: "创造者圈子",
      description: "开发者、创业者、产品、设计、运营、职场人跨界协作",
    },
    {
      icon: GitBranch,
      title: "开源协作",
      description: "项目文档开放共享、开源精神驱动",
    },
    {
      icon: MapPin,
      title: "多城市覆盖",
      description: "北上广深杭+清迈，每周线下活动触手可及",
    },
    {
      icon: Calendar,
      title: "高频活动",
      description: "每周迷你黑客松、AI 共学工作坊、开发者交流会等，让创新常态化",
    },
  ];

  return (
    <PPTPageLayout>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="px-16 py-12">
          <div>
            <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm mb-4">
              社区核心亮点
            </div>
            <h2 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              周周开启 AI 创造，从 0 到 1 打造最小可行产品（MVP）
            </h2>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 px-16">
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={highlight.title}
                  className="group p-6 bg-muted/50 rounded-xl border border-border hover:border-border/80 transition-colors"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-3 rounded-lg bg-background text-primary group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {highlight.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground pl-[3.25rem] leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </PPTPageLayout>
  );
}
