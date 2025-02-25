import PPTPageLayout from "./ppt-page-layout";
import { Users, Code, Handshake, Mail, Globe, QrCode } from "lucide-react";

export default function Contact() {
  const joinMethods = [
    {
      icon: Users,
      title: "参与活动",
      description: "每周线下活动免费开放，扫码或链接报名",
    },
    {
      icon: Code,
      title: "贡献项目",
      description: "开源社区鼓励提交代码、文档、创意",
    },
    {
      icon: Handshake,
      title: "合作共建",
      description: "商务合作邮件/电话/微信，联合办AI工坊或城市分部",
    },
  ];

  const contacts = [
    {
      icon: Globe,
      title: "官方网站",
      value: "hackathonweekly.com",
    },
    {
      icon: Mail,
      title: "联系邮箱",
      value: "contact@hackathonweekly.com",
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
              让每周都成为创意的起点
            </h2>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 px-16">
          {/* Join methods */}
          <div className="grid grid-cols-3 gap-8">
            {joinMethods.map((method) => {
              const Icon = method.icon;
              return (
                <div
                  key={method.title}
                  className="p-8 bg-muted/50 rounded-xl border border-border hover:border-border/80 transition-colors"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="p-4 rounded-2xl bg-primary/10 mb-6">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {method.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {method.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact info and QR codes */}
          <div className="mt-12 grid grid-cols-2 gap-8">
            {/* Contact info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                联系方式
              </h3>
              <div className="space-y-4">
                {contacts.map((contact) => {
                  const Icon = contact.icon;
                  return (
                    <div
                      key={contact.title}
                      className="flex items-center gap-4"
                    >
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">
                          {contact.title}
                        </div>
                        <div className="text-foreground font-medium">
                          {contact.value}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* QR codes */}
            <div className="grid grid-cols-2 gap-4">
              {["公众号", "小程序"].map((type) => (
                <div
                  key={type}
                  className="p-4 bg-muted/30 rounded-xl border border-border/50 flex flex-col items-center gap-4"
                >
                  <div className="w-32 h-32 bg-muted/50 rounded-lg flex items-center justify-center">
                    <QrCode className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {type}二维码
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Final call to action */}
          <div className="mt-12 p-8 bg-muted/20 rounded-xl border border-border/50">
            <p className="text-center text-xl text-muted-foreground">
              一起用AI加速创意，让改变从每周开始！
            </p>
          </div>
        </div>
      </div>
    </PPTPageLayout>
  );
}
