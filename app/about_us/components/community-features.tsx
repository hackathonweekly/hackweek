import ResponsiveLayout from "./responsive-layout";
import { CircleCheck, Users, Rocket, Lightbulb, Code, Globe } from "lucide-react";

export default function CommunityFeatures() {
  const features = [
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      title: "多元社区",
      description: "汇聚产品、设计、开发、运营等各领域人才，共同创造",
    },
    {
      icon: <Rocket className="w-6 h-6 text-blue-500" />,
      title: "快速迭代",
      description: "一周一个主题，从创意到产品，快速验证想法",
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-yellow-500" />,
      title: "创意激发",
      description: "头脑风暴、创意工作坊，激发无限可能",
    },
    {
      icon: <Code className="w-6 h-6 text-green-500" />,
      title: "技术支持",
      description: "提供技术指导、资源共享，降低开发门槛",
    },
    {
      icon: <CircleCheck className="w-6 h-6 text-red-500" />,
      title: "项目落地",
      description: "从概念到MVP，再到获取首批用户的全流程支持",
    },
    {
      icon: <Globe className="w-6 h-6 text-orange-500" />,
      title: "全球视野",
      description: "接轨国际创新趋势，拓展全球市场机会",
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <ResponsiveLayout>
        <div className="px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-16">
          {/* Header */}
          <div className="mb-8 md:mb-12 lg:mb-16">
            <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-xs md:text-sm mb-4">
              社区特色
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              打造创新生态，连接创造者与机会
            </h2>
          </div>

          {/* Features grid - responsive layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 transition-all duration-300 hover:shadow-md hover:border-primary/20"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Bottom quote */}
          <div className="mt-12 md:mt-16 text-center">
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground italic">
              "我们不只是一个社区，更是一个创新的孵化器和加速器"
            </p>
          </div>
        </div>
      </ResponsiveLayout>
    </section>
  );
} 