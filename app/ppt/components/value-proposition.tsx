import PPTPageLayout from "./ppt-page-layout";
import { Gem, Building, Factory, Newspaper } from "lucide-react";

export default function ValueProposition() {
  const valueProps = [
    {
      icon: Gem,
      title: "面向投资机构",
      points: [
        "优质早期项目：第一时间对接AI/MVP项目，获取潜在投资标的",
        "行业前沿生态：深度跟踪AI + 创客趋势，捕捉新风口",
        "品牌曝光：黑客松、Demo Day、媒体报道多渠道露出",
      ],
    },
    {
      icon: Building,
      title: "面向政府/园区/孵化器",
      points: [
        "城市/产业赋能：提升当地创新氛围，培育AI人才",
        "政策落地平台：精准对接双创政策，促进成果转化",
        "打造城市名片：周周黑客松持续举办，形成地方创新IP",
      ],
    },
    {
      icon: Factory,
      title: "面向企业（To B）",
      points: [
        "场景化应用：与企业产品或服务对接，7天MVP验证",
        "品牌联合：活动冠名、产品试用、社群互动等多种合作形式",
        "人才与资源：聚集开发者、创业者，寻找创新灵感与合作伙伴",
      ],
    },
    {
      icon: Newspaper,
      title: "面向媒体",
      points: [
        "独家/优先报道：输出高质量AI/创客内容",
        "共同策划活动：AI峰会、DemoDay直播等",
        "KOL塑造：采访社区技术大咖，打造专业影响力",
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
              合作价值
            </div>
            <h2 className="text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              共建AI生态：合作价值与机遇
            </h2>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 px-16">
          <div className="grid grid-cols-2 gap-4">
            {valueProps.map((prop) => {
              const Icon = prop.icon;
              return (
                <div
                  key={prop.title}
                  className="p-4 bg-muted/50 rounded-xl border border-border hover:border-border/80 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-1.5 rounded-lg bg-primary/10">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {prop.title}
                    </h3>
                  </div>

                  <div className="space-y-2 pl-9">
                    {prop.points.map((point, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-2"
                      >
                        <div className="w-1 h-1 rounded-full bg-primary/60 mt-1.5" />
                        <p className="text-sm text-foreground flex-1 line-clamp-2">
                          {point}
                        </p>
                      </div>
                    ))}
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
