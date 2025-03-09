import ResponsiveLayout from "./responsive-layout";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function FeaturedActivities() {
  const activities1 = [
    {
      title: "周周黑客松",
      description: "每周末定期举办的小型黑客松活动，让创意在48小时内变成原型",
      image: "/images/hackathon.jpg",
      tags: ["创意", "编程", "团队协作"],
    },
    {
      title: "AI产品工作坊",
      description: "专注于AI产品开发的工作坊，从prompt设计到产品落地全流程指导",
      image: "/images/ai-workshop.jpg",
      tags: ["AI", "产品设计", "技术实现"],
    },
    {
      title: "创业者分享会",
      description: "成功创业者的经验分享，从0到1的创业历程，避坑指南",
      image: "/images/startup-sharing.jpg",
      tags: ["创业", "经验分享", "社交"],
    },
  ];

  const activities2 = [
    {
      title: "技术沙龙",
      description: "深度技术主题探讨，前沿技术分享，开发者的交流平台",
      image: "/images/tech-salon.jpg",
      tags: ["技术", "分享", "学习"],
    },
    {
      title: "产品设计工作坊",
      description: "从用户需求到产品原型，完整的产品设计思维培训",
      image: "/images/design-workshop.jpg",
      tags: ["设计", "用户体验", "产品思维"],
    },
    {
      title: "Demo Day",
      description: "项目成果展示日，获取反馈，对接资源，寻找合作机会",
      image: "/images/demo-day.jpg",
      tags: ["展示", "反馈", "资源对接"],
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <ResponsiveLayout>
        <div className="px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-16">
          {/* Header */}
          <div className="mb-8 md:mb-12 lg:mb-16">
            <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-xs md:text-sm mb-4">
              特色活动
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              多元化活动，激发创造力
            </h2>
          </div>

          {/* First set of activities */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {activities1.map((activity, index) => (
              <div 
                key={index} 
                className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md hover:border-primary/20"
              >
                <div className="aspect-video relative bg-muted">
                  {/* Placeholder for image - in production, use actual images */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-500/10 to-blue-500/10">
                    <span className="text-sm text-muted-foreground">{activity.title} 图片</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg md:text-xl font-semibold mb-2">{activity.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground mb-4">{activity.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {activity.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="inline-block bg-primary/5 text-primary/80 text-xs rounded-full px-2.5 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second set of activities */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {activities2.map((activity, index) => (
              <div 
                key={index} 
                className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md hover:border-primary/20"
              >
                <div className="aspect-video relative bg-muted">
                  {/* Placeholder for image - in production, use actual images */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                    <span className="text-sm text-muted-foreground">{activity.title} 图片</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg md:text-xl font-semibold mb-2">{activity.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground mb-4">{activity.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {activity.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="inline-block bg-primary/5 text-primary/80 text-xs rounded-full px-2.5 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="mt-12 md:mt-16 text-center">
            <a 
              href="#" 
              className="inline-flex items-center text-primary hover:text-primary/80 text-base md:text-lg font-medium"
            >
              查看更多活动 
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </ResponsiveLayout>
    </section>
  );
} 