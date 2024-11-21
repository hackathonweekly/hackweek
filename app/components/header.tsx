"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Terminal } from "lucide-react";

const Header = () => {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm border-b border-zinc-700/50 font-mono"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="p-1 rounded bg-green-500 group-hover:bg-green-400 transition-colors">
              <Terminal className="h-5 w-5 text-black" />
            </div>
            <span className="text-white font-bold">
              Hackathon<span className="text-green-500">.weekly</span>
            </span>
          </Link>

          {/* Terminal Status */}
          <div className="hidden md:flex items-center space-x-4 text-sm text-zinc-400">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>system.status: online</span>
            </div>
            <code className="text-green-500">v1.0.0</code>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {[
              { href: "#intro", label: "简介" },
              { href: "#features", label: "特色" },
              { href: "#activities", label: "活动" },
              { href: "#timeline", label: "历程" },
              { href: "#team", label: "社区" },
              { href: "https://hackathonweekly.feishu.cn/wiki/WQ7EwFC7BijePAkMkAHcajkNnae", label: "飞书文档" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : "_self"}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : ""}
                className="text-zinc-400 hover:text-green-500 transition-colors"
              >
                <code>~/{link.label}</code>
              </Link>
            ))}
            <Link
              href="#"
              className="text-zinc-400 hover:text-green-500 transition-colors"
            >
              <code>~/加入社区</code>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-zinc-400 hover:text-green-500 transition-colors">
            <code>$ menu</code>
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;