import PPTPageLayout from "./ppt-page-layout";
import { School, Building2, Handshake, Newspaper } from "lucide-react";

export default function Partners() {
  const partnerCategories = [
    {
      icon: School,
      title: "高校合作",
      partners: [
        "清华（AI+硬件）",
        "深圳科创学院（3D打印）",
      ],
    },
    {
      icon: Building2,
      title: "企业生态",
      partners: [
        "Z·Pilot",
        "安德鲁人形机器人",
        "XTools",
      ],
    },
    {
      icon: Handshake,
      title: "公益与政府联动",
      partners: [
        "场地支持",
        "政策扶持",
        "共建青年创新计划",
      ],
    },
    {
      icon: Newspaper,
      title: "媒体与孵化器",
      partners: [
        "BaysWork",
        "Wteam",
        "DeepTech",
      ],
    },
  ];

  const communities = [
    "OpenBuild",
    "706",
    "杭州 AI 工坊",
    "WayToAGI",
    "大公坊 iMakerbase",
    "CYTE LAB",
    "开源社",
    "GSC",
  ];

  return (
    <PPTPageLayout>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="px-16 py-12">
          <div>
            <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm mb-4">
              合作伙伴
            </div>
            <h2 className="text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              协力共创AI生态
            </h2>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 px-16">
          {/* Partner categories */}
          <div className="grid grid-cols-2 gap-8">
            {partnerCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.title}
                  className="p-6 bg-muted/50 rounded-xl border border-border hover:border-border/80 transition-colors"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  <div className="space-y-2 pl-12">
                    {category.partners.map((partner) => (
                      <div
                        key={partner}
                        className="flex items-center gap-2"
                      >
                        <div className="w-8 h-8 rounded bg-muted/30 flex items-center justify-center text-xs text-muted-foreground">
                          Logo
                        </div>
                        <span className="text-muted-foreground">
                          {partner}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Community partners */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              社区合作伙伴
            </h3>
            <div className="grid grid-cols-4 gap-4">
              {communities.map((community) => (
                <div
                  key={community}
                  className="p-4 bg-muted/30 rounded-xl border border-border/50 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded bg-muted/30 flex items-center justify-center text-xs text-muted-foreground">
                    Logo
                  </div>
                  <span className="text-muted-foreground">
                    {community}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Advantages */}
          <div className="mt-8 p-6 bg-muted/20 rounded-xl border border-border/50">
            <p className="text-center text-lg text-muted-foreground">
              丰富资源、快速对接产业、技术与市场，形成一体化孵化体系
            </p>
          </div>
        </div>
      </div>
    </PPTPageLayout>
  );
}
