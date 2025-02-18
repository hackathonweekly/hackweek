"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="HackathonWeekly Logo" width={40} height={40} />
            <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              HackathonWeekly
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#intro" className="text-gray-700 hover:text-purple-600 transition">简介</Link>
            <Link href="#features" className="text-gray-700 hover:text-purple-600 transition">特色</Link>
            <Link href="#activities" className="text-gray-700 hover:text-purple-600 transition">活动形式</Link>
            <Link href="#timeline" className="text-gray-700 hover:text-purple-600 transition">发展历程</Link>
            <Link href="#team" className="text-gray-700 hover:text-purple-600 transition">社区主理人</Link>
            <a
              href="https://hackathonweekly.feishu.cn/wiki/WQ7EwFC7BijePAkMkAHcajkNnae"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-purple-600 transition"
            >
              飞书文档
            </a>
            <a
              href="https://hackathonweekly.feishu.cn/share/base/view/shrcnxQNLcw0MgySxN5Vqv1C3Fc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-purple-600 transition"
            >
              近期活动
            </a>
            <Link href="/join">
              <Button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:opacity-90 transition-opacity">
                加入社区
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}
