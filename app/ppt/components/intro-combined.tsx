import PPTPageLayout from "./ppt-page-layout";

export default function IntroCombined() {
  return (
    <PPTPageLayout>
      <div className="flex flex-col h-full">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-16">
          {/* Small label */}
          <div className="mb-6">
            <div className="inline-block bg-muted/60 text-muted-foreground rounded-full px-5 py-1.5 text-sm">
              创意 · 技术 · 协作
            </div>
          </div>
          
          {/* Main title */}
          <div className="text-center mb-16">
            <h1 className="flex flex-col items-center">
              <span className="text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500 mb-2">
                HackathonWeekly
              </span>
              <span className="text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                周周黑客松
              </span>
            </h1>
          </div>
          
          {/* Tagline */}
          <div className="mb-12 text-center max-w-3xl">
            <p className="text-3xl font-medium text-foreground/80 italic">
              "打造最具活力的AI产品创造者社区"
            </p>
          </div>
          
          {/* Main description */}
          <div className="text-center max-w-3xl mb-12">
            <p className="text-2xl text-foreground leading-relaxed">
              致力于帮助创造者从0到1实现最小可行产品（MVP），并快速找到他们的前100个用户
            </p>
          </div>
          
          {/* Slogan */}
          <div className="relative max-w-lg">
            <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-purple-500/40 to-blue-500/40 rounded-full"></div>
            <p className="text-xl text-muted-foreground leading-relaxed pl-6">
              花1周时间，创造1个最小可行产品
              <br />
              解决1个生活痛点，也许就是下1个改变世界的起点
            </p>
          </div>
          
          {/* Footer */}
          {/* <div className="absolute bottom-8 flex items-center text-sm text-muted-foreground">
            <div className="w-1.5 h-1.5 rounded-full bg-primary/30 mr-2" />
            <span>成立于 2024年5月，深圳</span>
          </div> */}
        </div>
      </div>
    </PPTPageLayout>
  );
} 