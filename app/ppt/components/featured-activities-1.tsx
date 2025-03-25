import PPTPageLayout from "./ppt-page-layout";
import { Rocket, Laptop } from "lucide-react";

export default function FeaturedActivities1() {
  const activities = [
    {
      category: "每周活动",
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
  ];

  return (
    <PPTPageLayout>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="px-16 py-8">
          <div>
            <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm mb-4">
              特色活动 (1/2)
            </div>
            <h2 className="text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              让创意持续迸发的实践场
            </h2>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 px-16">
          <div className="mb-6">
            {activities.map((section) => (
              <div key={section.category} className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  {section.category}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {section.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.title}
                        className="p-4 bg-muted/50 rounded-xl border border-border hover:border-border/80 transition-colors"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-1.5 rounded-lg bg-primary/10">
                            <Icon className="w-4 h-4 text-primary" />
                          </div>
                          <h4 className="text-base font-medium text-foreground">
                            {item.title}
                          </h4>
                        </div>
                        <p className="text-sm text-muted-foreground pl-8">
                          {item.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Activity photos - grid layout like FeaturedActivities2 */}
          <div className="grid grid-cols-4 gap-3">
            {['meet00001', 'meet00002', 'ai00004', 'gdc00006', 'ai00016', 'ai00008', 'meet00007', 'ai00006'].map((i) => (
              <div
                key={i}
                className="aspect-[16/9] rounded-xl overflow-hidden"
              >
                <img 
                  src={`/images/events/${i}.jpg`} 
                  alt={`Activity photo ${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          
          {/* Caption */}
          <div className="mt-4 text-center text-sm text-muted-foreground">
            创造者交流会与AI共学工作坊现场
          </div>
        </div>
      </div>
    </PPTPageLayout>
  );
} 