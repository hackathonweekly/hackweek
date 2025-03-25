import { Users, Code, Handshake, Mail, Globe, QrCode } from "lucide-react";
import Image from "next/image";

export default function Contact() {
  const joinMethods = [
    {
      icon: <Users className="w-6 md:w-8 h-6 md:h-8 text-primary" />,
      title: "参与活动",
      description: "每周线下活动免费开放，扫码或链接报名",
    },
    {
      icon: <Code className="w-6 md:w-8 h-6 md:h-8 text-primary" />,
      title: "贡献项目",
      description: "开源社区鼓励提交代码、文档、创意",
    },
    {
      icon: <Handshake className="w-6 md:w-8 h-6 md:h-8 text-primary" />,
      title: "合作共建",
      description: "商务合作邮件/电话/微信，联合办AI工坊或城市分部",
    },
  ];

  const contacts = [
    {
      icon: <Globe className="w-5 h-5 text-primary" />,
      title: "官方网站",
      value: "hackathonweekly.com",
    },
    {
      icon: <Mail className="w-5 h-5 text-primary" />,
      title: "联系邮箱",
      value: "contact@hackathonweekly.com",
    },
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-500/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-500/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-xs md:text-sm mb-4">
            加入我们
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            让每周都成为创意的起点
          </h2>
        </div>

        {/* Join methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-12">
          {joinMethods.map((method, index) => (
            <div
              key={index}
              className="p-6 md:p-8 bg-muted/50 rounded-xl border border-border hover:border-border/80 transition-colors"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-primary/10 mb-4 md:mb-6">
                  {method.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3">
                  {method.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  {method.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact info and QR codes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Contact info */}
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4 md:mb-6">
              联系方式
            </h3>
            <div className="space-y-4">
              {contacts.map((contact, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4"
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    {contact.icon}
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
              ))}
            </div>
          </div>

          {/* QR codes */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { type: "公众号", image: "/images/qr-official-account.jpg" },
              { type: "小助手", image: "/images/qr-wechat-group.jpg" }
            ].map((item, index) => (
              <div
                key={index}
                className="p-4 bg-muted/30 rounded-xl border border-border/50 flex flex-col items-center gap-4"
              >
                <div className="w-20 h-20 md:w-32 md:h-32 bg-white p-2 rounded-lg overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={`${item.type}二维码`} 
                    width={112} 
                    height={112} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs md:text-sm text-muted-foreground">
                  {item.type}二维码
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Final call to action */}
        <div className="p-6 md:p-8 bg-muted/20 rounded-xl border border-border/50">
          <p className="text-center text-base md:text-xl text-muted-foreground">
            一起用AI加速创意，让改变从每周开始！
          </p>
        </div>
      </div>
    </section>
  );
} 