'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { Terminal, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI 图像生成",
    description: "基于 Stable Diffusion 的创新图像生成应用",
    image: "/projects/project1.jpg",
    link: "#",
    tech: "Python, PyTorch, React",
    command: "$ project --view 1 --type 'AI Image Gen'"
  },
  {
    id: 2,
    title: "智能助手",
    description: "基于大语言模型的个性化助手应用",
    image: "/projects/project2.jpg",
    link: "#",
    tech: "TypeScript, Next.js, OpenAI",
    command: "$ project --view 2 --type 'AI Assistant'"
  },
  {
    id: 3,
    title: "Web3 钱包",
    description: "安全可靠的区块链钱包解决方案",
    image: "/projects/project3.jpg",
    link: "#",
    tech: "Solidity, React, Ethers.js",
    command: "$ project --view 3 --type 'Web3 Wallet'"
  }
];

const GallerySection = () => {
  return (
    <section className="py-20 bg-zinc-900 font-mono relative overflow-hidden">
      {/* Terminal background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4px_4px]" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-3 py-1 text-xs font-medium bg-zinc-800 text-zinc-300 rounded-md border border-zinc-700/50 mb-4">
            <span className="w-2 h-2 rounded-full bg-green-500 mr-2" />
            项目展示
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Projects<span className="text-green-500">.showcase()</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            展示社区成员的优秀作品，见证创新的力量
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-black/50 backdrop-blur-sm border border-zinc-700/50 rounded-lg overflow-hidden hover:border-green-500/50 transition-colors">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-2 bg-zinc-800/50 border-b border-zinc-700/50">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <div className="ml-2 text-xs text-zinc-400">project-{project.id}</div>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-green-500 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>

                {/* Project Image */}
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-sm text-zinc-400 mb-4">{project.description}</p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Terminal className="h-4 w-4 text-green-500" />
                      <code className="text-xs text-zinc-400">{project.tech}</code>
                    </div>
                    <div className="pt-4 border-t border-zinc-700/50">
                      <code className="text-xs text-green-500">{project.command}</code>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="bg-green-500 hover:bg-green-600 text-black px-6 py-2 rounded font-mono group">
            <span className="flex items-center">
              $ projects --view-all
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
