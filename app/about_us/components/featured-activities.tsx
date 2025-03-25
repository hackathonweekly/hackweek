import Image from "next/image";
import { Rocket, Laptop, Trophy, Users } from "lucide-react";

export default function FeaturedActivities() {
  const activities = [
    {
      category: "高频活动",
      items: [
        {
          icon: Rocket,
          title: "创造者交流会",
          description: "实操经验分享、技术分享，邀请技术大咖或社区专家分享前沿应用",
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
          title: "迷你黑客松",
          description: "闪电式团队组建、MVP开发、Demo演示",
        },
        {
          icon: Trophy,
          title: "Demo Day",
          description: "展示最具潜力项目给投资人、媒体，让创意得到更多关注和支持",
        },
      ],
    }
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/95"></div>
        <Image 
          src="/images/activities-bg.jpg" 
          alt="Activities background" 
          fill 
          className="object-cover opacity-10"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-xs md:text-sm mb-4">
            特色活动
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            让创意持续迸发的实践场
          </h2>
        </div>

        {/* Activities */}
        <div className="space-y-12">
          {activities.map((section) => (
            <div key={section.category} className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground">
                {section.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="p-5 bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl hover:border-primary/20 transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <h4 className="text-lg font-medium text-foreground">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-sm md:text-base text-muted-foreground pl-10">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Activity photos - first set */}
        <div className="mt-12 mb-4">
          <h3 className="text-lg font-semibold mb-4">创造者交流会与AI共学工作坊现场</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[2001, 1001, 2008, 1011, 1005, 2003, 2007, 1007].map((i) => (
              <div
                key={i}
                className="aspect-[16/9] rounded-xl overflow-hidden"
              >
                <Image 
                  src={`/images/events/${i}.jpg`} 
                  alt={`Activity photo ${i}`}
                  width={300}
                  height={169}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Activity photos - second set */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold mb-4">迷你黑客松与Demo Day活动现场</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[1002, 2002, 3005, 2004, 1004, 2005, 1006, 2006].map((i) => (
              <div
                key={i}
                className="aspect-[16/9] rounded-xl overflow-hidden"
              >
                <Image 
                  src={`/images/events/${i}.jpg`} 
                  alt={`Activity photo ${i}`}
                  width={300}
                  height={169}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-12 md:mt-16 text-center">
          <a 
            href="#" 
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            查看更多活动
          </a>
        </div>
      </div>
    </section>
  );
} 