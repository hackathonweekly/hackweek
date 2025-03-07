"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      {/* 背景装饰 */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-purple-200 dark:bg-purple-900 blur-3xl" />
        <div className="absolute top-1/3 -left-24 w-80 h-80 rounded-full bg-blue-200 dark:bg-blue-900 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 左侧内容 */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block">
                <div className="text-sm bg-primary/10 text-primary rounded-full px-4 py-1 inline-block">
                  AI产品创造者社区
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                  周周黑客松
                </span>
              </h1>

              <h2 className="text-xl sm:text-2xl font-medium text-foreground/80">
                打造最具活力的AI产品创造者社区
              </h2>

              <div className="border-l-4 border-primary/30 pl-4 py-2">
                <p className="text-lg sm:text-xl text-muted-foreground">
                  花1周时间，创造1个最小可行产品
                  <br />
                  每周一次，持续创新
                </p>
              </div>
            </div>

            {/* 行动按钮 */}
            <div className="flex flex-wrap gap-4">
              <Link 
                href="#join" 
                className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:opacity-90 transition-opacity shadow-lg"
              >
                立即加入
              </Link>
              <Link 
                href="#projects" 
                className="px-6 py-3 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-lg"
              >
                查看项目
              </Link>
            </div>

            {/* 统计数据 */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                  50+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  已完成项目
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                  200+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  社区成员
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                  30+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  合作伙伴
                </div>
              </div>
            </div>
          </div>

          {/* 右侧图片 */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[80%] h-[80%] rounded-2xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm z-10" />
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <svg 
                      className="w-24 h-24 text-white opacity-80" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-gray-900/50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 