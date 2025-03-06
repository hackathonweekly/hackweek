import PPTPageLayout from "./ppt-page-layout";
import { Users } from "lucide-react";
import Image from "next/image";

export default function Team() {
  const teamMembers = [
    {
      name: "Jackie",
      role: "技术负责人",
      title: "AI算法工程师",
      highlight: "负责社区AI项目技术支持与指导",
      avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=jackie&backgroundColor=ffdfbf&gender=male",
    },
    {
      name: "Summer",
      role: "商务负责人",
      title: "Blur.today 的 Founder",
      highlight: "负责社区对外合作",
      avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=botang&backgroundColor=b6e3f4&gender=female",
    },
    {
      name: "腾",
      role: "产品负责人",
      title: "大厂产品经理",
      highlight: "负责社区产品方向与创新实践",
      avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=teng&backgroundColor=d5f5ff&gender=male",
    },
    {
      name: "逸云",
      role: "设计负责人",
      title: "创意设计师",
      highlight: "负责社区视觉设计与用户体验",
      avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=yiyun&backgroundColor=e6d5ff&gender=male",
    },
    {
      name: "伯棠",
      role: "杭州负责人",
      title: "AI算法工程师",
      highlight: "负责杭州社区建设",
      avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=summer&backgroundColor=ffd5d5&gender=male",
    },
    {
      name: "铭龙",
      role: "广州负责人",
      title: "大厂开发工程师",
      highlight: "负责广州社区建设",
      avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=ou&backgroundColor=d5ffe6&gender=male",
    },
    {
      name: "吴音格",
      role: "硬件负责人",
      title: "AI硬件产品经理",
      highlight: "负责硬件项目实践与指导",
      avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=kunzhi&backgroundColor=fff3d5&gender=female",
    },
    {
      name: "Harries",
      role: "共学负责人",
      title: "大厂交互设计师",
      highlight: "负责共学社区建设",
      avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=yulal&backgroundColor=ffd5d5&gender=female",
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
                {/* Avatar */}
                <div className="w-14 h-14 mb-4 relative">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    width={64}
                    height={64}
                    className="rounded-lg"
                    onError={(e) => {
                      // 如果头像加载失败，使用备用图标
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = '<div class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center"><svg class="w-8 h-8 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></div>';
                    }}
                  />
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
