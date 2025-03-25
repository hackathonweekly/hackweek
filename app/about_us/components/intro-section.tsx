import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="relative py-20 md:py-28 lg:py-36 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] right-[10%] w-1/3 h-1/3 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] left-[10%] w-1/3 h-1/3 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:44px_44px]"/>
      </div>

      {/* Hero image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90"></div>
        <Image 
          src="/images/hero-background.jpg" 
          alt="Community background" 
          fill 
          className="object-cover opacity-20"
          priority
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center w-full">
          {/* Small label */}
          <div className="mb-4 md:mb-6">
            <div className="inline-block bg-muted/60 text-muted-foreground rounded-full px-4 py-1 text-xs md:text-sm">
              创意 · 技术 · 协作
            </div>
          </div>
          
          {/* Main title */}
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h1 className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500 mb-1 md:mb-2">
                HackathonWeekly
              </span>
              <span className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                周周黑客松
              </span>
            </h1>
          </div>
          
          {/* Tagline */}
          <div className="mb-6 md:mb-8 lg:mb-12 text-center max-w-3xl">
            <p className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground/80 italic">
              "打造最具活力的AI产品创造者社区"
            </p>
          </div>
          
          {/* Main description */}
          <div className="text-center max-w-3xl mb-6 md:mb-8 lg:mb-12">
            <p className="text-lg md:text-xl lg:text-2xl text-foreground leading-relaxed">
              致力于帮助创造者从0到1实现最小可行产品（MVP），并快速找到他们的前100个用户
            </p>
          </div>
          
          {/* Slogan */}
          <div className="relative max-w-lg">
            <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-purple-500/40 to-blue-500/40 rounded-full"></div>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed pl-4 md:pl-6">
              花1周时间，创造1个最小可行产品
              <br />
              解决1个生活痛点，也许就是下1个改变世界的起点
            </p>
          </div>
          
          {/* Footer */}
          <div className="mt-8 md:mt-12 lg:mt-16 flex items-center text-xs md:text-sm text-muted-foreground">
            <div className="w-1.5 h-1.5 rounded-full bg-primary/30 mr-2" />
            <span>成立于 2024年5月，深圳</span>
          </div>
        </div>
      </div>
    </section>
  );
} 