import PPTPageLayout from "./ppt-page-layout";
import { Heart, Rocket, Sparkles } from "lucide-react";

export default function VisionMission() {
  return (
    <PPTPageLayout>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="px-16 py-12">
          <div>
            <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm mb-4">
              愿景与使命
            </div>
            <h2 className="text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              我们的愿景与使命
            </h2>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 px-16">
          <div className="grid grid-cols-2 gap-8">
            {/* Vision */}
            <div className="p-8 bg-muted/50 rounded-xl border border-border hover:border-border/80 transition-colors">
              <h3 className="text-3xl font-semibold mb-4 text-foreground">
                愿景
              </h3>
              <p className="text-xl text-muted-foreground leading-relaxed">
                成为全球最有活力和温暖的AI产品创造者社区
              </p>
            </div>

            {/* Mission */}
            <div className="p-8 bg-muted/50 rounded-xl border border-border hover:border-border/80 transition-colors">
              <h3 className="text-3xl font-semibold mb-4 text-foreground">
                使命
              </h3>
              <p className="text-xl text-muted-foreground leading-relaxed">
                通过 AI 加速创意实现，助力千万创作者打造有价值、有意义、有趣的产品。
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mt-12 p-6 bg-muted/20 rounded-xl border border-border/50">
            <div className="flex items-center gap-12 justify-center">
              <div className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-primary" />
                <span className="text-lg text-muted-foreground">包容互助</span>
              </div>
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-lg text-muted-foreground">持续成长</span>
              </div>
              <div className="flex items-center gap-3">
                <Rocket className="w-5 h-5 text-primary" />
                <span className="text-lg text-muted-foreground">创新不息</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PPTPageLayout>
  );
}
