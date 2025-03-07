"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "全部" },
    { id: "ai", name: "AI工具" },
    { id: "productivity", name: "生产力" },
    { id: "education", name: "教育" },
    { id: "entertainment", name: "娱乐" },
  ];

  const projects = [
    {
      id: 1,
      title: "AI写作助手",
      description: "基于大语言模型的智能写作辅助工具，提供创意灵感和文本优化",
      image: "/placeholder.jpg",
      category: "ai",
      tags: ["AI", "写作", "工具"],
      link: "#",
    },
    {
      id: 2,
      title: "智能日程规划",
      description: "利用AI算法优化日常任务安排，提高工作效率和时间管理",
      image: "/placeholder.jpg",
      category: "productivity",
      tags: ["效率", "规划", "AI"],
      link: "#",
    },
    {
      id: 3,
      title: "个性化学习平台",
      description: "根据学习者特点定制学习路径，提供智能辅导和进度跟踪",
      image: "/placeholder.jpg",
      category: "education",
      tags: ["教育", "学习", "个性化"],
      link: "#",
    },
    {
      id: 4,
      title: "AI音乐创作",
      description: "通过AI技术辅助音乐创作，生成和谐旋律和节奏",
      image: "/placeholder.jpg",
      category: "entertainment",
      tags: ["音乐", "创作", "AI"],
      link: "#",
    },
    {
      id: 5,
      title: "智能健康助手",
      description: "结合AI和健康数据分析，提供个性化健康建议和监测",
      image: "/placeholder.jpg",
      category: "ai",
      tags: ["健康", "监测", "AI"],
      link: "#",
    },
    {
      id: 6,
      title: "AR学习工具",
      description: "利用增强现实技术，创造沉浸式学习体验",
      image: "/placeholder.jpg",
      category: "education",
      tags: ["AR", "学习", "沉浸式"],
      link: "#",
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            精选
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              {" "}项目展示
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            这些是我们社区成员在周周黑客松中创造的优秀AI产品
          </p>
        </div>

        {/* 分类筛选 */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* 项目网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-gray-400 dark:text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <Link
                  href={project.link}
                  className="inline-flex items-center text-primary hover:underline"
                >
                  查看详情
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* 查看更多按钮 */}
        <div className="text-center mt-12">
          <Link
            href="#"
            className="inline-flex items-center px-6 py-3 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-lg"
          >
            查看更多项目
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
} 