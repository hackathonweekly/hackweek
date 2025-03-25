import { ExternalLink, Star } from "lucide-react";
import Image from "next/image";

export default function ProjectShowcase() {
  const projects = [
    {
      title: "AI写作助手",
      description: "基于大语言模型的智能写作工具，帮助用户快速生成高质量内容",
      tags: ["AI", "SaaS", "生产力"],
      stars: 120,
      link: "#",
      image: "/images/projects/ai-writing.jpg"
    },
    {
      title: "健康数据追踪器",
      description: "个人健康数据管理平台，整合多种可穿戴设备数据，提供健康分析",
      tags: ["健康科技", "数据分析", "移动应用"],
      stars: 85,
      link: "#",
      image: "/images/projects/health-tracker.jpg"
    },
    {
      title: "创业者社区平台",
      description: "连接创业者、投资人和导师的社区平台，促进资源共享和项目合作",
      tags: ["社区", "创业", "网络平台"],
      stars: 156,
      link: "#",
      image: "/images/projects/startup-community.jpg"
    },
    {
      title: "智能家居控制中心",
      description: "整合多品牌智能家居设备的控制中心，支持语音和自动化场景",
      tags: ["IoT", "智能家居", "自动化"],
      stars: 92,
      link: "#",
      image: "/images/projects/smart-home.jpg"
    },
    {
      title: "AR导览应用",
      description: "基于AR技术的城市导览应用，提供沉浸式历史文化体验",
      tags: ["AR/VR", "旅游", "文化"],
      stars: 78,
      link: "#",
      image: "/images/projects/ar-guide.jpg"
    },
    {
      title: "可持续时尚平台",
      description: "连接环保时尚品牌和消费者的平台，推广可持续消费理念",
      tags: ["可持续发展", "电商", "时尚"],
      stars: 110,
      link: "#",
      image: "/images/projects/sustainable-fashion.jpg"
    },
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-background/95 to-background">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/90"></div>
        <Image 
          src="/images/projects-bg.jpg" 
          alt="Projects background" 
          fill 
          className="object-cover opacity-10"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-xs md:text-sm mb-4">
            项目展示
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            社区孵化的优秀项目
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-3xl">
            这些项目都是在周周黑客松社区中诞生并成长的，从创意到MVP，再到获取用户和持续迭代
          </p>
        </div>

        {/* Featured project */}
        <div className="mb-12 md:mb-16 rounded-xl overflow-hidden border border-border/50">
          <div className="grid md:grid-cols-2">
            <div className="aspect-square md:aspect-auto relative">
              <Image 
                src="/images/projects/featured-project.jpg" 
                alt="Featured project" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="p-6 md:p-8 bg-background/50 backdrop-blur-sm flex flex-col justify-center">
              <div className="inline-block bg-primary/10 text-primary rounded-full px-3 py-1 text-xs mb-4">
                精选项目
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">AI创意助手</h3>
              <p className="text-base md:text-lg text-muted-foreground mb-6">
                一款革命性的AI创意工具，帮助设计师和创意工作者突破思维局限，生成新颖的创意方案。已获得超过10,000名用户的青睐，并完成天使轮融资。
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-block bg-primary/5 text-primary/80 text-xs rounded-full px-2.5 py-1">AI</span>
                <span className="inline-block bg-primary/5 text-primary/80 text-xs rounded-full px-2.5 py-1">创意</span>
                <span className="inline-block bg-primary/5 text-primary/80 text-xs rounded-full px-2.5 py-1">设计</span>
                <span className="inline-block bg-primary/5 text-primary/80 text-xs rounded-full px-2.5 py-1">SaaS</span>
              </div>
              <a 
                href="#" 
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 self-start"
              >
                查看项目详情
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md hover:border-primary/20"
            >
              <div className="aspect-video relative">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg md:text-xl font-semibold">{project.title}</h3>
                  <a 
                    href={project.link} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-sm md:text-base text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="inline-block bg-primary/5 text-primary/80 text-xs rounded-full px-2.5 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center text-muted-foreground text-sm">
                  <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                  <span>{project.stars} 收藏</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-12 md:mt-16 text-center">
          <a 
            href="#" 
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            探索更多项目
          </a>
        </div>
      </div>
    </section>
  );
} 