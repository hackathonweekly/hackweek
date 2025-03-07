"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      content:
        "周周黑客松给了我一个将AI创意快速变成产品的平台，在这里我不仅学到了技术，还结识了一群志同道合的朋友。",
      author: "张小明",
      role: "全栈开发者",
      avatar: "/placeholder.jpg",
    },
    {
      id: 2,
      content:
        "作为一名产品经理，周周黑客松帮助我深入理解AI技术，与开发者的紧密合作让我的产品思维更加清晰。",
      author: "李小华",
      role: "产品经理",
      avatar: "/placeholder.jpg",
    },
    {
      id: 3,
      content:
        "短短一周时间，从创意到MVP，这种高效的创新方式让我上瘾。社区的反馈和支持是我不断前进的动力。",
      author: "王小芳",
      role: "UI设计师",
      avatar: "/placeholder.jpg",
    },
    {
      id: 4,
      content:
        "周周黑客松是我接触AI应用开发的起点，社区里的专家给了我很多指导，让我快速成长。",
      author: "赵小强",
      role: "AI研究生",
      avatar: "/placeholder.jpg",
    },
    {
      id: 5,
      content:
        "在这里我找到了技术合伙人，我们的项目已经获得了天使投资，感谢周周黑客松提供的平台和资源。",
      author: "刘小军",
      role: "创业者",
      avatar: "/placeholder.jpg",
    },
    {
      id: 6,
      content:
        "每周的创新挑战让我保持学习的热情，社区的氛围非常棒，大家互相帮助，共同进步。",
      author: "陈小红",
      role: "后端工程师",
      avatar: "/placeholder.jpg",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // 自动轮播
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            社区
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              {" "}成员反馈
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            听听我们社区成员的真实体验和感受
          </p>
        </div>

        {/* 移动端轮播 */}
        <div className="md:hidden">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <div className="mb-6">
              <p className="text-gray-700 dark:text-gray-300 italic">
                "{testimonials[activeIndex].content}"
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-200 dark:bg-gray-600 rounded-full mr-4 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-gray-400 dark:text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold">
                  {testimonials[activeIndex].author}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonials[activeIndex].role}
                </p>
              </div>
            </div>
          </div>

          {/* 指示器 */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  activeIndex === index
                    ? "bg-primary"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* 桌面端网格 */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="mb-6">
                <svg
                  className="w-8 h-8 text-primary/30 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-700 dark:text-gray-300 italic">
                  "{testimonial.content}"
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 dark:bg-gray-600 rounded-full mr-4 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-gray-400 dark:text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 