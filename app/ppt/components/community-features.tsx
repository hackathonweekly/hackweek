import PPTPageLayout from "./ppt-page-layout";
import { Heart, Rocket, Sparkles, Target, Users, MapPin, Calendar } from "lucide-react";

export default function CommunityFeatures() {
  const features = [
    {
      icon: Target,
      title: "助力实现MVP",
      description: "提供系统化方法论、线上线下工作坊、知识库、开源工具和案例支持",
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
      title: "每周活动",
      description: "AI共学工作坊、创造者交流会、迷你黑客松等，让创新常态化",
    },
  ];

  return (
    <PPTPageLayout>
      <div className="flex flex-col h-full">
        {/* Simple elegant background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/3 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/3 rounded-full blur-3xl" />
        </div>

        {/* Content container with better spacing */}
        <div className="relative z-10 flex flex-col h-full px-16 py-12">
          {/* Clean, simple header */}
          <div className="mb-12">
            <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm mb-4">
              社区特色
            </div>
            <h2 className="text-4xl font-bold tracking-tight">
              社区核心特色
            </h2>
          </div>

          {/* Features in a clean, balanced layout */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-8 mb-10">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="flex">
                  <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-primary/5 mr-5">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Subtle divider */}
          <div className="h-px w-full bg-border/30 my-6" />

          {/* Vision and Mission in a simple horizontal layout */}
          <div className="grid grid-cols-2 gap-16">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4 inline-flex items-center">
                <div className="w-2 h-2 rounded-full bg-purple-500 mr-3"></div>
                愿景
              </h3>
              <p className="text-lg text-muted-foreground pl-5">
                成为全球最有活力和温暖的AI产品创造者社区
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4 inline-flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                使命
              </h3>
              <p className="text-lg text-muted-foreground pl-5">
                通过 AI 加速创意实现，助力千万创作者打造有价值、有意义、有趣的产品
              </p>
            </div>
          </div>
          
          {/* Values with elegant simplicity */}
          <div className="mt-auto pt-8 flex justify-center gap-20">
            <div className="flex flex-col items-center">
              <Heart className="w-6 h-6 text-primary mb-2" />
              <span className="text-lg text-foreground/70">爱</span>
            </div>
            <div className="flex flex-col items-center">
              <Sparkles className="w-6 h-6 text-primary mb-2" />
              <span className="text-lg text-foreground/70">自由</span>
            </div>
            <div className="flex flex-col items-center">
              <Rocket className="w-6 h-6 text-primary mb-2" />
              <span className="text-lg text-foreground/70">创造</span>
            </div>
          </div>
        </div>
      </div>
    </PPTPageLayout>
  );
} 