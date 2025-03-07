import PPTPageLayout from "./ppt-page-layout";
import { Rocket, Users, MapPin, BookOpen } from "lucide-react";

export default function CommunityOverview() {
  return (
    <PPTPageLayout>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="px-16 py-12">
          <div>
            <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm mb-4">
              社区简介
            </div>
            <h2 className="text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              我们是谁？
            </h2>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 px-16">
          {/* Core mission */}
          <div className="mb-12">
            <div className="p-8 bg-muted/50 rounded-xl border border-border hover:border-border/80 transition-colors">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">核心定位</h3>
              <p className="text-xl text-muted-foreground leading-relaxed">
                AI产品创造者社区，致力于帮助创造者从0到1实现最小可行产品（MVP），并快速找到他们的前100个用户
              </p>
              <div className="mt-6 inline-block px-4 py-2 bg-background rounded-lg border border-border/80">
                <span className="text-muted-foreground">成立于 2024年5月，深圳</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PPTPageLayout>
  );
}
