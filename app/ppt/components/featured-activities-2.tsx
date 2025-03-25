import PPTPageLayout from "./ppt-page-layout";
import { Trophy, Users } from "lucide-react";

export default function FeaturedActivities2() {
  const activities = [
    {
      category: "特色项目",
      items: [
        {
          icon: Users,
          title: "迷你黑客松",
          description: "闪电式团队组建、MVP开发、Demo演示",
        },
        {
          icon: Trophy,
          title: "Demo Day AI酒馆",
          description: "展示最具潜力项目给投资人、媒体，让创意得到更多关注和支持",
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
              特色活动 (2/2)
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

          {/* Activity photos - large photo gallery */}
          <div className="grid grid-cols-4 gap-3">
            {['hack00001', 'hack00003', 'demo00001', 'demo00002', 'bar00004', 'demo00004', 'demo00003', 'gdc00007'].map((i) => (
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
            迷你黑客松与Demo Day活动现场
          </div>
        </div>
      </div>
    </PPTPageLayout>
  );
} 