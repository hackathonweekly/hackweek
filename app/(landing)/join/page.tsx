"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function JoinPage() {
  return (
    <main className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Back button */}
        <Link href="/" className="inline-block mb-8">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            返回首页
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
            加入周周黑客松社区
          </h1>

          <div className="space-y-12">
            {/* Join Instructions */}
            <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
              <div className="prose prose-slate max-w-none">
                <ul>
                  <li>我们是一个AI产品创造者社区，欢迎对技术和创新有热情的你！</li>
                  <li>关注公众号，获取最新活动信息和技术分享。</li>
                </ul>
              </div>
            </div>

            {/* QR Codes */}
            <div className="grid md:grid-cols-2 gap-8">

              {/* Official Account */}
              <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                <h2 className="text-xl font-semibold mb-4">关注公众号</h2>
                <div className="relative w-64 h-64 mx-auto mb-4">
                  <Image
                    src="/wechat_official_qr.png"
                    alt="微信公众号二维码"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  关注公众号，获取最新活动信息
                </p>
              </div>

              {/* WeChat Assistant */}
              <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                <h2 className="text-xl font-semibold mb-4">添加社区小助手</h2>
                <div className="relative w-64 h-64 mx-auto mb-4">
                  <Image
                    src="/wechat_qr.png"
                    alt="社区小助手二维码"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  扫码添加小助手，加入社区群聊
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
