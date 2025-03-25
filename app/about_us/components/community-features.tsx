import { Heart, Rocket, Sparkles, Target, Users, MapPin, Calendar } from "lucide-react";
import Image from "next/image";

export default function CommunityFeatures() {
  const features = [
    {
      icon: <Target className="w-6 h-6 text-primary" />,
      title: "专注MVP",
      description: "提供系统化方法论、知识库、开源工具和案例支持，7天完成MVP",
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "创造者圈子",
      description: "开发者、创业者、产品、设计、运营、职场人跨界协作",
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "多城市覆盖",
      description: "北京、上海、广州、深圳、杭州、清迈（持续扩展中...）",
    },
    {
      icon: <Calendar className="w-6 h-6 text-primary" />,
      title: "高频活动",
      description: "AI共学工作坊、创造者交流会、迷你黑客松等，让创新常态化",
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
        <div className="mb-8 md:mb-12">
          <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-xs md:text-sm mb-4">
            社区特色
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
            社区核心特色
          </h2>
        </div>

        {/* Features - responsive layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-12 md:gap-y-8 mb-10">
          {features.map((feature, index) => (
            <div key={index} className="flex">
              <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-lg bg-primary/5 mr-3 md:mr-5">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-1 md:mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Subtle divider */}
        <div className="h-px w-full bg-border/30 my-8 md:my-6" />

        {/* Vision and Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-10">
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

        {/* Values */}
        <div className="flex justify-center gap-8 md:gap-20 mt-8">
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
    </section>
  );
} 