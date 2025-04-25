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
          <div className="grid grid-cols-4 gap-6">
            {[
              { id: 'meet00001', caption: '手搓桌面机器人' },
              { id: 'meet00002', caption: 'AI 创业者交流会' },
              { id: 'ai00004', caption: 'GSC X AI 文创工作坊' },
              { id: 'gdc00006', caption: 'GDC X AI 工作坊' },
              { id: 'ai00016', caption: 'DeepSeek 共学活动' },
              { id: 'ai00011', caption: 'Z·Pilot X AI 游戏' },
              { id: 'ai00008', caption: '科创学院 X AI 3D 打印' },
              { id: 'ai00018', caption: '清华创协 X 硬件共创' },
            ].map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-2"
              >
                <div className="aspect-[16/9] rounded-xl overflow-hidden">
                  <img 
                    src={`/images/events/${item.id}.jpg`} 
                    alt={item.caption}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-xs text-center text-muted-foreground">
                  {item.caption}
                </div>
              </div>
            ))}
          </div>
          
          {/* Caption */}
          <div className="mt-6 text-center text-sm text-muted-foreground">
            创造者交流会与AI共学工作坊现场
          </div>
        </div>
      </div>
    </PPTPageLayout>
  );
} 