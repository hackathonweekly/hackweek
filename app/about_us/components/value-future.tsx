import ResponsiveLayout from "./responsive-layout";
import { CheckCircle, TrendingUp, Users, Globe, Zap, Award } from "lucide-react";

export default function ValueFuture() {
  const valueProps = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: "从0到1的全流程支持",
      description: "提供从创意构思、产品设计到技术实现的全流程指导和资源支持",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-500" />,
      title: "快速验证商业模式",
      description: "通过精益创业方法论，帮助创业者快速验证产品市场契合度",
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      title: "多元人才网络",
      description: "连接产品、设计、开发、运营等各领域人才，促进跨界合作",
    },
  ];

  const futurePlans = [
    {
      icon: <Globe className="w-6 h-6 text-indigo-500" />,
      title: "全球化扩展",
      description: "计划在更多城市建立分部，并与国际创新社区建立合作关系",
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: "专业加速器项目",
      description: "启动针对有潜力项目的专业加速器计划，提供更深度的资源支持",
    },
    {
      icon: <Award className="w-6 h-6 text-red-500" />,
      title: "创新大赛",
      description: "举办年度创新大赛，吸引更多优质项目和人才加入社区",
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <ResponsiveLayout>
        <div className="px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-16">
          {/* Value Proposition */}
          <div className="mb-16 md:mb-24">
            <div className="mb-8 md:mb-12">
              <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-xs md:text-sm mb-4">
                价值主张
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                为什么选择周周黑客松
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {valueProps.map((prop, index) => (
                <div 
                  key={index} 
                  className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 transition-all duration-300 hover:shadow-md hover:border-primary/20"
                >
                  <div className="mb-4">{prop.icon}</div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">{prop.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground">{prop.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Future Plans */}
          <div>
            <div className="mb-8 md:mb-12">
              <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-xs md:text-sm mb-4">
                未来规划
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                我们的愿景与计划
              </h2>
              <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-3xl">
                周周黑客松致力于成为中国最具影响力的创新者社区，连接全球资源，赋能本地创新
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {futurePlans.map((plan, index) => (
                <div 
                  key={index} 
                  className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 transition-all duration-300 hover:shadow-md hover:border-primary/20"
                >
                  <div className="mb-4">{plan.icon}</div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">{plan.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground">{plan.description}</p>
                </div>
              ))}
            </div>

            {/* Vision statement */}
            <div className="mt-12 md:mt-16 p-6 md:p-8 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl border border-border/50 text-center">
              <p className="text-lg md:text-xl lg:text-2xl font-medium italic">
                "到2025年，我们的目标是孵化100个有影响力的创新项目，建立10个城市分部，连接10000名创新者"
              </p>
            </div>
          </div>
        </div>
      </ResponsiveLayout>
    </section>
  );
} 