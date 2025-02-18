"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Twitter, Mail, MapPin, MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Image src="/logo.png" alt="HackathonWeekly Logo" width={48} height={48} />
            <h3 className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              HackathonWeekly
            </h3>
            <p className="text-gray-600">AI创造者社区，享受创造的乐趣</p>
            <a
              href="https://hackathonweekly.feishu.cn/wiki/WQ7EwFC7BijePAkMkAHcajkNnae"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-purple-600 transition-colors"
            >
              飞书协作文档
            </a>
          </div>

          <div>
            <h4 className="font-semibold mb-4">关注我们</h4>
            <div className="space-y-3">
              <a href="https://github.com/HackathonWeekly" className="text-gray-600 hover:text-purple-600 flex items-center gap-2 transition-colors">
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a href="https://twitter.com/HackathonWeekly" className="text-gray-600 hover:text-purple-600 flex items-center gap-2 transition-colors">
                <Twitter className="h-4 w-4" />
                Twitter
              </a>
              <a href="mailto:contact@hackathonweekly.com" className="text-gray-600 hover:text-purple-600 flex items-center gap-2 transition-colors">
                <Mail className="h-4 w-4" />
                contact@hackathonweekly.com
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">资源</h4>
            <div className="space-y-3">
              <a href="#" className="text-gray-600 hover:text-purple-600 block transition-colors">活动日历</a>
              <a href="#" className="text-gray-600 hover:text-purple-600 block transition-colors">项目展示</a>
              <a href="#" className="text-gray-600 hover:text-purple-600 block transition-colors">社区指南</a>
            </div>
          </div>

          <div className="text-center">
            <h4 className="font-semibold mb-4">公众号</h4>
            <div className="relative w-32 h-32 mx-auto">
              <Image
                src="/wechat_official_qr.png"
                alt="微信公众号二维码"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm text-gray-600 mt-2">
              HackathonWeekly
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
              <p>&copy; {new Date().getFullYear()} HackathonWeekly. All rights reserved.</p>
              <a
                href="https://beian.miit.gov.cn/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-600 transition-colors"
              >
                {/* 琼ICP备2024040807号-1 */}
                粤ICP备2022122081号-3
              </a>
            </div>
            <div className="flex gap-6">
              <a href="/privacy" className="hover:text-purple-600 transition-colors">隐私政策</a>
              <a href="/terms" className="hover:text-purple-600 transition-colors">服务条款</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
