'use client';

import { motion } from "framer-motion";
import { Terminal, Github, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 font-mono">
      <div className="container mx-auto px-4 py-12">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="p-1 rounded bg-green-500 group-hover:bg-green-400 transition-colors">
                <Terminal className="h-5 w-5 text-black" />
              </div>
              <span className="text-white font-bold">
                Hackathon<span className="text-green-500">.weekly</span>
              </span>
            </Link>
            <p className="text-zinc-400 text-sm">
              <code>$ echo &quot;每周黑客松，激发创新灵感&quot;</code>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">
              <code>$ ls ./links</code>
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "#intro", label: "简介" },
                { href: "#features", label: "特色" },
                { href: "#activities", label: "活动" },
                { href: "#timeline", label: "历程" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-green-500 transition-colors"
                  >
                    <code>~/{link.label}</code>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-white mb-4">
              <code>$ ls ./community</code>
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "#team", label: "社区" },
                { href: "#", label: "加入我们" },
                { href: "https://hackathonweekly.feishu.cn/wiki/WQ7EwFC7BijePAkMkAHcajkNnae", label: "飞书文档" },
                { href: "#", label: "联系我们" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-green-500 transition-colors"
                    target={link.href.startsWith("http") ? "_blank" : "_self"}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : ""}
                  >
                    <code>~/{link.label}</code>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white mb-4">
              <code>$ ls ./social</code>
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-green-500 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-green-500 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Terminal Line */}
        <div className="pt-8 mt-8 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-zinc-400 text-sm">
              <code>$ copyright --year {currentYear} --name &quot;HackathonWeekly&quot; --rights &quot;All rights reserved&quot;</code>
            </div>
            <div className="flex items-center space-x-4 text-sm text-zinc-400">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>system.status: online</span>
              </div>
              <code className="text-green-500">v1.0.0</code>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;