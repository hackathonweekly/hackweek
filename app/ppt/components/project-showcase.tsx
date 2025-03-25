import PPTPageLayout from "./ppt-page-layout";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function ProjectShowcase() {
  const projects = [
    {
      name: "ShipAny",
      description: "一小时快速上线AI SaaS项目",
      details: "功能完善的 AI SaaS 开发框架，首发 4 小时收入破万刀，300+客户购买",
      image: "/images/projects/shipany.jpg",
      founder: {
        name: "Idoubi",
        title: "2024 年第二期活动成员",
        contribution: "社区活动Demoday 常驻嘉宾，其项目 ShipAny 在社区活动中多次展示并获得反馈支持",
      },
    },
    {
      name: "映壳",
      description: "灵动副屏手机壳",
      details: "获得百万级融资，基于墨水屏及NFC取电科技，用户可以在APP中随心更换壳体内容。自研软硬件，AI加持，玩法多样，现已在多个国家和地区上市",
      image: "/images/projects/yingke.jpg",
      founder: {
        name: "文龙",
        title: "2024 年第五期活动成员",
        contribution: "现任社区主理人，其项目映壳从技术到商业模式的孵化过程中，社区提供了深度参与与支持",
      },
    },
  ];

  return (
    <PPTPageLayout>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="px-16 py-12">
          <div>
            <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm mb-4">
              社区项目案例
            </div>
            <h2 className="text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              从想法到产品
            </h2>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 px-16">
          <div className="grid grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.name}
                className="space-y-4"
              >
                {/* Project image */}
                <div className="aspect-[16/9] rounded-xl bg-muted/30 border border-border/50 flex items-center justify-center text-sm text-muted-foreground overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.name} 
                    width={1000} 
                    height={1000}
                    className="w-full h-full object-cover" 
                  />
                </div>

                {/* Project info */}
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {project.name}
                    </h3>
                    <p className="text-base text-primary font-medium">
                      {project.description}
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.details}
                  </p>

                  {/* Founder info */}
                  <div className="pt-3 border-t border-border/50">
                    <div className="flex items-center gap-2 mb-1.5">
                      <ArrowRight className="w-3 h-3 text-primary" />
                      <div>
                        <span className="text-sm font-medium text-foreground">
                          项目创始人 - {project.founder.name}
                        </span>
                        <span className="text-xs text-muted-foreground ml-2">
                          {project.founder.title}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground pl-5 line-clamp-2">
                      {project.founder.contribution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PPTPageLayout>
  );
}
