import PPTPageLayout from "./ppt-page-layout";
import { Users } from "lucide-react";

export default function Team() {
  const teamMembers = [
    {
      name: "Jackie",
      role: "技术负责人",
      title: "AI 算法/全栈工程师",
      highlight: "负责社区AI项目技术支持与指导",
    },
    {
      name: "Summer",
      role: "运营负责人",
      title: "Blur.today 的 Founder",
      highlight: "负责社区整体运营与发展规划",
    },
    {
      name: "腾",
      role: "产品负责人",
      title: "大厂产品经理",
      highlight: "负责社区产品方向与创新实践",
    },
    {
      name: "逸云",
      role: "设计负责人",
      title: "创意设计师",
      highlight: "负责社区视觉设计与用户体验",
    },
    {
      name: "吴音格",
      role: "硬件负责人",
      title: "AI硬件产品经理",
      highlight: "负责AI硬件项目实践与指导",
    },
    {
      name: "Harries",
      role: "内容负责人",
      title: "706 媒体实验室主理人",
      highlight: "负责社区内容生产与传播",
    },
    {
      name: "小强",
      role: "活动负责人",
      title: "跨界创新者",
      highlight: "负责线下活动策划与执行",
    },
    {
      name: "小红",
      role: "社群负责人",
      title: "社群运营专家",
      highlight: "负责社群沟通与成员服务",
    },
  ];

  return (
    <PPTPageLayout>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="px-16 py-12">
          <div>
            <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm mb-4">
              核心团队
            </div>
            <h2 className="text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              创造者联盟
            </h2>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 px-16">
          {/* Core team */}
          <div className="grid grid-cols-4 gap-4">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group p-4 bg-muted/50 rounded-xl border border-border hover:border-border/80 transition-colors"
              >
                {/* Avatar placeholder */}
                <div className="w-12 h-12 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>

                <div className="space-y-3">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-0.5">
                      {member.name}
                    </h3>
                    <div className="text-sm text-primary font-medium">
                      {member.role}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <p className="text-xs text-muted-foreground">
                      {member.title}
                    </p>
                    <p className="text-xs text-foreground line-clamp-2">
                      {member.highlight}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Community stats */}
          <div className="mt-8 p-4 bg-muted/20 rounded-xl border border-border/50">
            <div className="text-center">
              <p className="text-base text-muted-foreground">
                除此之外，还有 <span className="text-primary font-semibold">30+ 位主理人</span> 和 <span className="text-primary font-semibold">5000+ 位社区成员</span> 共同参与社区建设
              </p>
            </div>
          </div>
        </div>
      </div>
    </PPTPageLayout>
  );
}
