import PPTPageLayout from "./ppt-page-layout";
import { QrCode, GitPullRequest, Handshake } from "lucide-react";

export default function JoinUs() {
  const joinMethods = [
    {
      icon: QrCode,
      title: "参与活动",
      description: "每周线下活动免费开放，扫码或链接报名",
      image: "[IMAGE_PLACEHOLDER_QR]",
    },
    {
      icon: GitPullRequest,
      title: "贡献项目",
      description: "开源社区鼓励提交代码、文档、创意",
      image: "[IMAGE_PLACEHOLDER_GITHUB]",
    },
    {
      icon: Handshake,
      title: "合作共建",
      description: "商务合作邮件/电话/微信，联合办AI工坊或城市分部",
      image: "[IMAGE_PLACEHOLDER_CONTACT]",
    },
  ];

  return (
    <PPTPageLayout>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="px-16 py-12">
          <div>
            <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm mb-4">
              加入我们
            </div>
            <h2 className="text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              一起创造未来
            </h2>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 px-16">
          <div className="grid grid-cols-3 gap-8">
            {joinMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div
                  key={method.title}
                  className="group p-6 bg-muted/50 rounded-xl border border-border hover:border-border/80 transition-colors"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-background text-primary group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {method.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground mb-6">
                    {method.description}
                  </p>

                  <div className="aspect-square max-w-[200px] mx-auto rounded-lg bg-muted/30 overflow-hidden">
                    {/* 这里放置二维码或图片 */}
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                      {method.image}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </PPTPageLayout>
  );
}
