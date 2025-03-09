"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Define a type for valid tab keys
type ActivityTabKey = 'weekly' | 'monthly' | 'quarterly';

export default function ActivitiesSection() {
  // Update your state to use this type
  const [activeTab, setActiveTab] = useState<ActivityTabKey>('weekly');

  const activities = {
    weekly: [
      {
        id: 1,
        title: "周周黑客松",
        description:
          "每周一次的黑客松活动，从创意到MVP，一周时间打造一个AI产品原型",
        date: "每周五 19:00-22:00",
        location: "线上 + 北京/上海/深圳线下",
        image: "/placeholder.jpg",
        link: "#",
      },
      {
        id: 2,
        title: "项目展示日",
        description:
          "展示上一周黑客松的成果，分享经验和教训，获取反馈和建议",
        date: "每周四 20:00-21:30",
        location: "线上直播",
        image: "/placeholder.jpg",
        link: "#",
      },
    ],
    monthly: [
      {
        id: 3,
        title: "月度技术沙龙",
        description:
          "邀请行业专家分享AI技术前沿和应用案例，深入探讨技术难点",
        date: "每月最后一个周六 14:00-17:00",
        location: "北京/上海/深圳轮流举办",
        image: "/placeholder.jpg",
        link: "#",
      },
      {
        id: 4,
        title: "产品复盘会",
        description:
          "对当月优秀项目进行深度复盘，分析成功因素和改进空间",
        date: "每月最后一个周日 14:00-16:00",
        location: "线上会议",
        image: "/placeholder.jpg",
        link: "#",
      },
    ],
    quarterly: [
      {
        id: 5,
        title: "季度创新大赛",
        description:
          "评选季度最佳AI产品，提供资金和资源支持，帮助项目落地",
        date: "每季度末",
        location: "北京总部",
        image: "/placeholder.jpg",
        link: "#",
      },
      {
        id: 6,
        title: "行业对接会",
        description:
          "邀请投资人和企业代表，为优秀项目提供融资和合作机会",
        date: "每季度中",
        location: "北京/上海/深圳/广州轮流举办",
        image: "/placeholder.jpg",
        link: "#",
      },
    ],
  };

  const tabs = [
    { id: "weekly", label: "每周活动" },
    { id: "monthly", label: "月度活动" },
    { id: "quarterly", label: "季度活动" },
  ];

  return (
    <section id="activities" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            社区
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              {" "}活动安排
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            丰富多彩的社区活动，让创新不止，学习不停
          </p>
        </div>

        {/* 活动分类标签 */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as ActivityTabKey)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 活动列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities[activeTab].map((activity) => (
            <div
              key={activity.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="relative h-48 md:h-full bg-gray-200 dark:bg-gray-700">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="w-16 h-16 text-gray-400 dark:text-gray-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div className="p-6 md:col-span-2">
                  <h3 className="text-xl font-semibold mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {activity.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {activity.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {activity.location}
                    </div>
                  </div>
                  <Link
                    href={activity.link}
                    className="inline-flex items-center text-primary hover:underline"
                  >
                    了解详情
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
            </div>
          ))}
        </div>

        {/* 日历订阅 */}
        <div className="mt-16 text-center">
          <Link
            href="#"
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:opacity-90 transition-opacity shadow-lg"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            订阅活动日历
          </Link>
        </div>
      </div>
    </section>
  );
} 