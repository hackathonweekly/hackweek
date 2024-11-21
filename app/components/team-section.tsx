"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Terminal, Github, Twitter } from "lucide-react";

const teamMembers = [
  {
    name: "JackieXiao",
    role: "深圳主理人",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=jackie&backgroundColor=ffdfbf&gender=male",
    bio: "独立开发者，INTJ",
    github: "",
    twitter: "",
  },
  {
    name: "伯棠",
    role: "杭州主理人",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=summer&backgroundColor=ffd5d5&gender=male",
    bio: "坚持做正确且有价值的事情",
    github: "",
    twitter: "",
  },
  {
    name: "周龙",
    role: "深圳主理人",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=zhoulong&backgroundColor=c0aede&gender=male",
    bio: "企业AI教练式顾问，新范式人工智能创始人，前千亿上市机器人公司商业化负责人",
    github: "",
    twitter: "",
  },
  {
    name: "Summer",
    role: "深圳主理人",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=botang&backgroundColor=b6e3f4&gender=female",
    bio: "Blur.today 的founder，正在理想主义的俗世里浪漫修行",
    github: "",
    twitter: "",
  },
  {
    name: "昊暠Skyh",
    role: "深圳主理人",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=zhouqianno&backgroundColor=ffe6d5&gender=male",
    bio: "706深圳科技主理人，Web3 BUIDLer",
    github: "",
    twitter: "",
  },
  {
    name: "卓千寻",
    role: "杭州主理人",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=zhuo&backgroundColor=d5f5ff&gender=male",
    bio: "一个关注AI机器人的嵌入式研发",
    github: "",
    twitter: "",
  },
  {
    name: "jojo",
    role: "深圳主理人",
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=jojo&backgroundColor=ffe8d5&brows=variant10&eyes=variant02&nose=variant04&lips=variant04&gesture=handPhone&gestureProbability=90&beard=variant06&beardProbability=80&hair=variant15&body=variant15",
    bio: "熵增力场创始人，用AI让人机交互像熵增一样自然",
    github: "",
    twitter: "",
  },
  {
    name: "Jon",
    role: "深圳主理人",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=jon&backgroundColor=d5ffea&gender=male",
    bio: "来自硅谷的连续创业者，前Apple硬件工程师；微信阅读重度用户；每日有氧运动：跑步，游泳，乒乓",
    github: "",
    twitter: "",
  },
  {
    name: "鲲志",
    role: "杭州主理人",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=wuyinge&backgroundColor=ffd5e6&gender=male",
    bio: "COC杭州主理人、杭州AI工坊共创人、阿里蚂蚁校友会技术AI分会副秘书长",
    github: "",
    twitter: "",
  },
  {
    name: "欧铭龙",
    role: "广州主理人",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=ou&backgroundColor=d5ffe6&gender=male",
    bio: "悲观的AI降临派。希望帮助每个人成为更好的自己",
    github: "",
    twitter: "",
  },
  {
    name: "逸云",
    role: "深圳主理人",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=yiyun&backgroundColor=e6d5ff&gender=male",
    bio: "主打人生好玩的设计师",
    github: "",
    twitter: "",
  },
  {
    name: "吴音格",
    role: "深圳主理人",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=kunzhi&backgroundColor=fff3d5&gender=female",
    bio: "AI硬件产品经理&运营，连续创业者，数字艺术策展人，想做机器人，想去火星！",
    github: "",
    twitter: "",
  },
  {
    name: "Harries",
    role: "深圳主理人",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=yulal&backgroundColor=ffd5d5&gender=female",
    bio: "正在成为AI极客；黑客松共学发起人之一；五年C端工具类+B端AI类交互设计",
    github: "",
    twitter: "",
  },
  {
    name: "周芊诺",
    role: "杭州主理人",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=skyh&backgroundColor=e8d5ff&gender=female",
    bio: "连续创业者，喜欢折腾，探索永不止步。目前在AI＋硬件创业",
    github: "",
    twitter: "",
  },
  {
    name: "hackbot 小松鼠",
    role: " 全球主理人",
    avatar: "https://r2.hackweek.cn/hackbot-squirrel.jpg",
    bio: "社群最受欢迎的超级夸夸机器人，情绪价值拉满！它的形象是一只可爱的小松鼠！",
    github: "",
    twitter: "",
  },
  {
    name: "兵书Ada",
    role: "上海主理人",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=adabin&backgroundColor=ffd5eb&gender=female",
    bio: "之前在 X ACADEMY 做过新媒体主编，擅长写推文，目前是 706 媒体实验室主理人",
    github: "",
    twitter: "",
  },
  {
    name: "方圆",
    role: "上海主理人",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=fangyuanlala&backgroundColor=ffe6d5&gender=female",
    bio: "大厂打工人，连续创业者，ENFP",
    github: "",
    twitter: "",
  },
  {
    name: "文龙",
    role: "深圳主理人",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=wenlong&backgroundColor=d5e6ff&gender=male",
    bio: "充满好奇心的探索家，关注软AI及硬件产品，希望创造令人心动的产品",
    github: "",
    twitter: "",
  },
  {
    name: "钟馗",
    role: "深圳主理人",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=zhongkui&backgroundColor=e6ffd5&gender=male",
    bio: "伟大人物最明的标志  便是他那坚强的意志",
    github: "",
    twitter: "",
  },
  {
    name: "Max Means Best",
    role: "北京主理人",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=max&backgroundColor=ffd5d5&gender=male",
    bio: "海本辍学折腾ing，Ex 极客公园、奇绩创坛，擅长运营、增长📈，更想要给所有天才idea一个生长的土壤～",
    github: "",
    twitter: "",
  },
  {
    name: "Lamchung",
    role: "深圳主理人",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=zicong&backgroundColor=d5ffeb&gender=male",
    bio: "跟有趣的人做有意义的事",
    github: "",
    twitter: "",
  }
];

const TeamSection = () => {
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
            核心团队
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Team<span className="text-green-500">.members()</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            与优秀的人一起，做有趣的事
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
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
                  </div>
                  <div className="text-xs text-zinc-400">team-member</div>
                </div>

                {/* Member Content */}
                <div className="p-6">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div className="text-center space-y-2">
                    <h3 className="text-lg font-bold text-white">{member.name}</h3>
                    <div className="flex items-center justify-center gap-2">
                      <Terminal className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-zinc-400">{member.role}</span>
                    </div>
                    <p className="text-sm text-zinc-400">{member.bio}</p>
                  </div>

                  {/* Social Links */}
                  <div className="mt-4 pt-4 border-t border-zinc-700/50 flex justify-center gap-4">
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-green-500 transition-colors"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {member.twitter && (
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-green-500 transition-colors"
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                    )}
                  </div>

                  {/* Terminal Command */}
                  <div className="mt-4 pt-4 border-t border-zinc-700/50">
                    <code className="text-xs text-green-500 block text-center">
                      $ contact --member {member.name.toLowerCase()} --type {member.role.toLowerCase()}
                    </code>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;