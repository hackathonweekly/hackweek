import PPTPageLayout from "./ppt-page-layout";
import Image from "next/image";

export default function CoverPage() {
  return (
    <PPTPageLayout>
      <div className="grid grid-cols-2 h-full">
        {/* Left content */}
        <div className="flex flex-col justify-center px-16 space-y-8">
          <div className="space-y-6">
            <div className="inline-block">
              <div className="text-sm bg-primary/10 text-primary rounded-full px-4 py-1 inline-block">
                AI产品创造者社区
              </div>
            </div>

            <h1 className="text-6xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                周周黑客松
              </span>
            </h1>

            <h2 className="text-2xl font-medium text-foreground/80">
              打造最具活力的AI产品创造者社区
            </h2>

            <div className="border-l-4 border-primary/30 pl-4 py-2">
              <p className="text-xl text-muted-foreground">
                花1周时间，创造1个最小可行产品
                <br />
                解决1个生活痛点
                <br />
                也许就是下1个改变世界的起点
              </p>
            </div>
          </div>
        </div>

        {/* Right content - Visual elements */}
        <div className="relative flex items-center justify-center">
          <div className="relative w-96 h-96">
            {/* Decorative circles */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 rounded-full border-2 border-purple-500/20 animate-spin [animation-duration:30s]"/>
              <div className="absolute w-72 h-72 rounded-full border-2 border-blue-500/20 animate-spin [animation-duration:20s] [animation-direction:reverse]"/>
              <div className="absolute w-48 h-48 rounded-full border-2 border-primary/20 animate-spin [animation-duration:10s]"/>
            </div>

            {/* Logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-32 h-32" style={{ position: 'relative' }}>
                <Image
                  src="/logo.png"
                  alt="HackathonWeekly Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PPTPageLayout>
  );
}
