import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function PartnersSection() {
  const partners = [
    {
      id: 1,
      name: "科技公司A",
      logo: "/placeholder.jpg",
      type: "技术支持",
    },
    {
      id: 2,
      name: "投资机构B",
      logo: "/placeholder.jpg",
      type: "投资支持",
    },
    {
      id: 3,
      name: "高校C",
      logo: "/placeholder.jpg",
      type: "学术支持",
    },
    {
      id: 4,
      name: "创业孵化器D",
      logo: "/placeholder.jpg",
      type: "孵化支持",
    },
    {
      id: 5,
      name: "科技媒体E",
      logo: "/placeholder.jpg",
      type: "媒体支持",
    },
    {
      id: 6,
      name: "云服务商F",
      logo: "/placeholder.jpg",
      type: "技术支持",
    },
    {
      id: 7,
      name: "AI研究所G",
      logo: "/placeholder.jpg",
      type: "技术支持",
    },
    {
      id: 8,
      name: "创新中心H",
      logo: "/placeholder.jpg",
      type: "场地支持",
    },
  ];

  return (
    <section id="partners" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            合作
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              {" "}伙伴
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            感谢这些优秀的合作伙伴，为我们的社区提供全方位支持
          </p>
        </div>

        {/* 合作伙伴网格 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white dark:bg-gray-700 rounded-xl p-6 flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-20 h-20 bg-gray-200 dark:bg-gray-600 rounded-full mb-4 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-gray-400 dark:text-gray-500"
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
              <h3 className="text-lg font-medium mb-1">{partner.name}</h3>
              <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                {partner.type}
              </span>
            </div>
          ))}
        </div>

        {/* 合作邀请 */}
        <div className="mt-16 bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">成为我们的合作伙伴</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                我们欢迎各类组织机构与我们合作，共同推动AI产品创新，为创造者提供更好的支持和资源
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">
                    技术资源支持
                  </span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">
                    投资孵化合作
                  </span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">
                    媒体宣传推广
                  </span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">
                    场地设备赞助
                  </span>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:opacity-90 transition-opacity shadow-lg"
                >
                  联系我们
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
            <div className="hidden md:block">
              <svg
                className="w-full h-64 text-gray-200 dark:text-gray-600"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.671 14.307C16.184 12.819 14.17 12 12 12s-4.184.819-5.671 2.307l1.414 1.414c1.11-1.11 2.621-1.722 4.257-1.722 1.636 0 3.146.612 4.257 1.722l1.414-1.414z" />
                <path d="M20.437 11.292c-4.572-4.573-12.301-4.573-16.873 0l1.414 1.414c3.807-3.807 10.238-3.807 14.045 0l1.414-1.414z" />
                <path d="M20 16v-3h-2v3h-3v2h3v3h2v-3h3v-2h-3z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 