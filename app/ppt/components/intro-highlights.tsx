import PPTPageLayout from "./ppt-page-layout";
import { Heart, Rocket, Sparkles, Target, Users, MapPin, Calendar } from "lucide-react";

export default function IntroHighlights() {
  const highlights = [
    {
      icon: Target,
      title: "专注MVP",
      description: "提供系统化方法论、知识库、开源工具和案例支持，7天完成MVP",
    },
    {
      icon: Users,
      title: "创造者圈子",
      description: "开发者、创业者、产品、设计、运营、职场人跨界协作",
    },
    {
      icon: MapPin,
      title: "多城市覆盖",
      description: "北京、上海、广州、深圳、杭州、清迈（持续扩展中...）",
    },
    {
      icon: Calendar,
      title: "高频活动",
      description: "AI共学工作坊、创造者交流会、迷你黑客松等，让创新常态化",
    },
  ];

  return (
    <PPTPageLayout>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="px-16 pt-12">
          <div>
            <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm mb-4">
              社区特色
            </div>
            <h2 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              周周开启 AI 创造，从 0 到 1 打造最小可行产品（MVP）
            </h2>
          </div>
        </div>
        
        {/* Main content area */}
        <div className="flex-1 px-16 py-6 flex flex-col">
          {/* Core highlights */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            {highlights.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={highlight.title}
                  className="group p-5 bg-muted/50 rounded-xl border border-border hover:border-border/80 transition-colors"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {highlight.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground pl-[3.25rem] leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              );
            })}
          </div>
          
          {/* Vision and Mission */}
          <div className="grid grid-cols-2 gap-6">
            <div className="p-5 bg-muted/30 rounded-xl border border-border/50">
              <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center">
                <div className="w-1 h-6 bg-primary/40 rounded-full mr-2" />
                愿景
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed ml-3">
                成为全球最有活力和温暖的AI产品创造者社区
              </p>
            </div>
            
            <div className="p-5 bg-muted/30 rounded-xl border border-border/50">
              <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center">
                <div className="w-1 h-6 bg-primary/40 rounded-full mr-2" />
                使命
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed ml-3">
                通过 AI 加速创意实现，助力千万创作者打造有价值、有意义、有趣的产品
              </p>
            </div>
          </div>
          
          {/* Values at bottom */}
          <div className="mt-auto flex justify-center gap-16 pt-6">
            <div className="flex flex-col items-center">
              <Heart className="w-6 h-6 text-primary/70 mb-1" />
              <span className="text-base text-muted-foreground">爱</span>
            </div>
            <div className="flex flex-col items-center">
              <Sparkles className="w-6 h-6 text-primary/70 mb-1" />
              <span className="text-base text-muted-foreground">自由</span>
            </div>
            <div className="flex flex-col items-center">
              <Rocket className="w-6 h-6 text-primary/70 mb-1" />
              <span className="text-base text-muted-foreground">创造</span>
            </div>
          </div>
        </div>
      </div>
    </PPTPageLayout>
  );
} 