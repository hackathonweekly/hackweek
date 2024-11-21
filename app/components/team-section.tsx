"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const teamMembers = [
  {
    name: "JackieXiao",
    role: "深圳主理人",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=jackie&backgroundColor=ffdfbf&gender=male",
    tags: ["独立开发者", "INTJ", "技术"],
    location: "深圳",
    bio: "热衷于探索新技术，创造有趣的产品。爱与自由，毕生所求；学与创造，至死方休"
  },
  {
    name: "伯棠",
    role: "杭州主理人",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=summer&backgroundColor=ffd5d5&gender=male",
    tags: ["创新者", "价值观", "产品"],
    location: "杭州",
    bio: "坚持做正确且有价值的事情"
  },
  {
    name: "周龙",
    role: "深圳主理人",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=zhoulong&backgroundColor=c0aede&gender=male",
    tags: ["AI顾问", "商业专家", "机器人"],
    location: "深圳",
    bio: "企业AI教练式顾问，新范式人工智能创始人，前千亿上市机器人公司商业化负责人"
  },
  {
    name: "Summer",
    role: "深圳主理人",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=botang&backgroundColor=b6e3f4&gender=female",
    tags: ["创业者", "产品", "理想主义"],
    location: "深圳",
    bio: "Blur.today 的founder，正在理想主义的俗世里浪漫修行"
  },
  {
    name: "昊暠Skyh",
    role: "深圳主理人",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=zhouqianno&backgroundColor=ffe6d5&gender=male",
    tags: ["Web3", "科技", "创新"],
    location: "深圳",
    bio: "706深圳科技主理人，Web3 BUIDLer"
  },
  {
    name: "卓千寻",
    role: "杭州主理人",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=zhuo&backgroundColor=d5f5ff&gender=male",
    tags: ["嵌入式", "AI机器人", "研发"],
    location: "杭州",
    bio: "一个关注AI机器人的嵌入式研发"
  },
  {
    name: "jojo",
    role: "深圳主理人",
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=jojo&backgroundColor=ffe8d5&brows=variant10&eyes=variant02&nose=variant04&lips=variant04&gesture=handPhone&gestureProbability=90&beard=variant06&beardProbability=80&hair=variant15&body=variant15",
    tags: ["人机交互", "AI", "创业者"],
    location: "深圳",
    bio: "熵增力场创始人，用AI让人机交互像熵增一样自然"
  },
  {
    name: "Jon",
    role: "深圳主理人",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=jon&backgroundColor=d5ffea&gender=male",
    tags: ["硅谷创业", "硬件工程", "运动"],
    location: "深圳",
    bio: "来自硅谷的连续创业者，前Apple硬件工程师；微信阅读重度用户；每日有氧运动：跑步，游泳，乒乓"
  },
  {
    name: "鲲志",
    role: "杭州主理人",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=wuyinge&backgroundColor=ffd5e6&gender=male",
    tags: ["AI工坊", "社区组织", "技术"],
    location: "杭州",
    bio: "COC杭州主理人、杭州AI工坊共创人、阿里蚂蚁校友会技术AI分会副秘书长"
  },
  {
    name: "欧铭龙",
    role: "广州主理人",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=ou&backgroundColor=d5ffe6&gender=male",
    tags: ["AI爱好者", "成长", "思考者"],
    location: "广州",
    bio: "悲观的AI降临派。希望帮助每个人成为更好的自己"
  },
  {
    name: "逸云",
    role: "深圳主理人",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=yiyun&backgroundColor=e6d5ff&gender=male",
    tags: ["设计师", "创意", "生活家"],
    location: "深圳",
    bio: "主打人生好玩的设计师"
  },
  {
    name: "吴音格",
    role: "深圳主理人",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=kunzhi&backgroundColor=fff3d5&gender=female",
    tags: ["AI硬件", "创业者", "艺术"],
    location: "深圳",
    bio: "AI硬件产品经理&运营，连续创业者，数字艺术策展人，想做机器人，想去火星！"
  },
  {
    name: "Harries",
    role: "深圳主理人",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=yulal&backgroundColor=ffd5d5&gender=female",
    tags: ["AI极客", "交互设计", "共创者"],
    location: "深圳",
    bio: "正在成为AI极客；黑客松共学发起人之一；五年C端工具类+B端AI类交互设计"
  },
  {
    name: "周芊诺",
    role: "杭州主理人",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=skyh&backgroundColor=e8d5ff&gender=female",
    tags: ["创业者", "AI硬件", "探索者"],
    location: "杭州",
    bio: "连续创业者，喜欢折腾，探索永不止步。目前在AI＋硬件创业"
  },
  {
    name: "hackbot 小松鼠",
    role: " 全球主理人",
    avatar: "https://r2.hackweek.cn/hackbot-squirrel.jpg",
    tags: ["夸夸机器人", "社区 AI 助理"],
    location: "全球",
    bio: "社群最受欢迎的超级夸夸机器人，情绪价值拉满！它的形象是一只可爱的小松鼠！"
  },
  {
    name: "兵书Ada",
    role: "上海主理人",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=adabin&backgroundColor=ffd5eb&gender=female",
    tags: ["媒体", "创意", "社区"],
    location: "上海",
    bio: "之前在 X ACADEMY 做过新媒体主编，擅长写推文，目前是 706 媒体实验室主理人"
  },
  {
    name: "方圆",
    role: "上海主理人",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=fangyuanlala&backgroundColor=ffe6d5&gender=female",
    tags: ["ENFP", "连续创业", "大厂"],
    location: "上海",
    bio: "大厂打工人，连续创业者，ENFP"
  },
  {
    name: "文龙",
    role: "深圳主理人",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=wenlong&backgroundColor=d5e6ff&gender=male",
    tags: ["ENFP", "极客", "创业者"],
    location: "深圳",
    bio: "充满好奇心的探索家，关注软AI及硬件产品，希望创造令人心动的产品"
  },
  {
    name: "钟馗",
    role: "深圳主理人",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=zhongkui&backgroundColor=e6ffd5&gender=male",
    tags: ["社区组织", "产品", "创新"],
    location: "深圳",
    bio: "伟大人物最明的标志  便是他那坚强的意志"
  },
  {
    name: "Max Means Best",
    role: "北京主理人",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=max&backgroundColor=ffd5d5&gender=male",
    tags: ["运营", "增长", "创业"],
    location: "北京",
    bio: "海本辍学折腾ing，Ex 极客公园、奇绩创坛，擅长运营、增长📈，更想要给所有天才idea一个生长的土壤～"
  },
  {
    name: "Lamchung",
    role: "深圳主理人",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=zicong&backgroundColor=d5ffeb&gender=male",
    tags: ["AI产品经理", "黑洞脑"],
    location: "深圳",
    bio: "跟有趣的人做有意义的事"
  },
  {
    name: "jinwon",
    role: "深圳主理人",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=jinwon&backgroundColor=d5ffea&gender=male",
    tags: ["NLP算法", "AI教育", "第一原理"],
    location: "深圳",
    bio: "致力于打造改变世界的AI教育产品"
  }
];

export default function TeamSection() {
  return (
    <section id="team" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              创造者社区
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            来自不同领域的创造者们，一起探索、学习、成长
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            社区主理人（随机排序）
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="group cursor-pointer relative"
            >
              <div className="relative p-4 rounded-lg bg-white border border-border hover:shadow-sm transition-all duration-300">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-4 relative">
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      width={80}
                      height={80}
                      className="rounded-lg group-hover:scale-105 transition-transform duration-200"
                      onError={(e) => {
                        // 如果头像加载失败，使用备用头像
                        const target = e.target as HTMLImageElement;
                        target.src = "https://api.dicebear.com/7.x/notionists/svg?seed=fallback";
                      }}
                    />
                  </div>
                  
                  <div className="text-center">
                    <h3 className="font-semibold truncate">{member.name}</h3>
                    <p className="text-sm text-primary/70 mb-2">{member.role}</p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 rounded-full bg-secondary/50 text-secondary-foreground whitespace-nowrap"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-card/95 backdrop-blur-sm rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                    <p className="text-sm text-center text-foreground leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground">
            还有更多优秀的主理人正在加入我们的社区...
          </p>
        </motion.div>
      </div>
    </section>
  );
}