export interface Member {
  idx: string;
  name: string;
  phone: string;
  bgImage: string;
  mbti?: string;
  zodiac?: string;
  hobbies?: string[];
  avatar?: string;
  intro?: string;
}

export const members: Member[] = [
  {
    "idx": "1",
    "name": "睡前思想家",
    "phone": "13202294208",
    "mbti": "INTJ",
    "hobbies": ["骑行", "摄影"],
    "avatar": "/christmas/image_1.jpeg",
    "bgImage": "/mbti/mbti-blue.jpg",
    "intro": "前科创学院创业者，现某AI+硬件公司产品经理，关注需求的非典型理工男"
  },
  {
    "idx": "2",
    "name": "共产主义接班人",
    "phone": "19935315452",
    "mbti": "ENFJ",
    "zodiac": "射手座",
    "hobbies": ["科技", "AI", "炒股", "体育", "音乐", "美女"],
    "avatar": "/christmas/image_2.jpeg",
    "bgImage": "/mbti/mbti-yellow.jpg",
    "intro": "在一家体育科技互联网公司做产品经理"
  },
  {
    "idx": "3",
    "name": "Grey Huang",
    "phone": "13875251995",
    "zodiac": "巨蟹座",
    "hobbies": ["旅行", "美食", "Coding"],
    "avatar": "/christmas/image_3.jpeg",
    "bgImage": "/mbti/mbti-blue.jpg",
    "intro": "目前就职于Sea-Shopee,正在学习web3前端（偏全栈），准备转行web3中"
  },
  {
    "idx": "4",
    "name": "Serena 梦诗",
    "phone": "19180589213",
    "mbti": "ENTJ",
    "zodiac": "摩羯座",
    "hobbies": ["绘画", "音乐", "健身", "游泳"],
    "avatar": "/christmas/image_4.jpeg",
    "bgImage": "/mbti/mbti-yellow.jpg",
    "intro": "擅长AIGC内容营销，目前主推微软openai大模型，做混合云"
  },
  {
    "idx": "5",
    "name": "Joe Zhang",
    "phone": "18944779185",
    "mbti": "INTJ",
    "hobbies": ["读书"],
    "avatar": "/christmas/image_5.jpeg",
    "bgImage": "/mbti/mbti-blue.jpg",
    "intro": "制造业隐形冠军AI应用专员"
  },
  {
    "idx": "6",
    "name": "海风",
    "phone": "15016702500",
    "mbti": "INTP",
    "zodiac": "双子",
    "hobbies": ["阅读"],
    "avatar": "/christmas/image_6.jpeg",
    "bgImage": "/mbti/mbti-blue.jpg",
    "intro": "网络服务器运维、独立开发者、图书管理员、80后"
  },
  {
    "idx": "7",
    "name": "Sia",
    "phone": "15712186587",
    "zodiac": "天蝎座",
    "hobbies": ["阅读", "聊天", "时尚穿搭"],
    "avatar": "/christmas/image_7.jpeg",
    "bgImage": "/mbti/mbti-blue.jpg",
    "intro": "喜欢到处探险的好奇星人，目前是服装公司的商品管理，GSC深圳社区的 shaper，最近关注身心健康议题"
  },
  {
    "idx": "9",
    "name": "吴宸宇",
    "phone": "17308416983",
    "zodiac": "水瓶",
    "hobbies": ["编程"],
    "avatar": "/christmas/image_9.jpeg",
    "bgImage": "/mbti/mbti-blue.jpg",
    "intro": "华为鸿蒙外包软件工程师"
  },
  {
    "idx": "10",
    "name": "Tommy",
    "phone": "15986805626",
    "zodiac": "天蝎座",
    "hobbies": ["电影", "小说"],
    "avatar": "/christmas/image_10.jpeg",
    "bgImage": "/mbti/mbti-blue.jpg",
    "intro": "技术全栈，小团队创业者"
  },
  {
    "idx": "11",
    "name": "Kellan",
    "phone": "15522770091",
    "mbti": "ENTJ",
    "zodiac": "天蝎座",
    "hobbies": ["旅行"],
    "avatar": "/christmas/image_11.jpeg",
    "bgImage": "/mbti/mbti-yellow.jpg",
    "intro": "混合现实和先进人机交互领域的创业者"
  },
  {
    "idx": "12",
    "name": "Elaine",
    "phone": "18563999476",
    "mbti": "INTP",
    "zodiac": "巨蟹座",
    "hobbies": ["脱口秀", "旅行", "撸猫", "撸狗"],
    "avatar": "/christmas/image_12.jpeg",
    "bgImage": "/mbti/mbti-blue.jpg",
    "intro": "前雷鸟科技海外产品经理、度小满AI产品经理，宇伴科技（女性AI情感陪伴）CEO&Founder"
  },
  {
    "idx": "13",
    "name": "Dennis",
    "phone": "15801390164",
    "mbti": "ENFJ",
    "zodiac": "天平",
    "hobbies": ["桌游", "阅读", "足球"],
    "avatar": "/christmas/image_13.jpeg",
    "bgImage": "/mbti/mbti-yellow.jpg",
    "intro": "前Tiktok PM，Mutuavox的创始人，当前在研发一款Content Repurposing Application（WUI.AI）"
  },
  {
    "idx": "14",
    "name": "李鸣轩",
    "phone": "13071881952",
    "mbti": "INFP",
    "avatar": "/christmas/image_14.jpeg",
    "bgImage": "/mbti/mbti-blue.jpg",
    "intro": "前端开发"
  },
  {
    "idx": "15",
    "name": "吴颖怡",
    "phone": "18023860886",
    "mbti": "ENTP",
    "hobbies": ["旅游"],
    "avatar": "/christmas/image_15.jpeg",
    "bgImage": "/mbti/mbti-yellow.jpg",
    "intro": "来自普火科技有限公司，业务有做软件外包以及ai相关的产品。目前自研产品是ai获客和ai销售系统"
  },
  {
    "idx": "16",
    "name": "歌行",
    "phone": "13692282269",
    "mbti": "ISTJ",
    "zodiac": "水瓶",
    "hobbies": ["coding"],
    "avatar": "/christmas/image_16.jpeg",
    "bgImage": "/mbti/mbti-purple.jpg",
    "intro": "咨询设计师"
  },
  {
    "idx": "17",
    "name": "雷雨",
    "phone": "17360367329",
    "mbti": "ENTP",
    "zodiac": "水瓶",
    "hobbies": ["游泳", "跑步", "研究和做AI类项目"],
    "avatar": "/christmas/image_17.jpeg",
    "bgImage": "/mbti/mbti-yellow.jpg",
    "intro": "雷先森"
  },
  {
    "idx": "18",
    "name": "Frank Jiang",
    "phone": "13798534225",
    "mbti": "ENTJ",
    "hobbies": ["music", "dance"],
    "avatar": "/christmas/image_18.jpeg",
    "bgImage": "/mbti/mbti-yellow.jpg",
    "intro": "chief of staff at Troveo.ai, a US-based startup under the 776 fund. Born and raised in Shenzhen and now lives in Chicago / LA"
  },
  {
    "idx": "20",
    "name": "Kayla 陈慧琴",
    "phone": "15014090980",
    "mbti": "INFJ",
    "zodiac": "处女座",
    "hobbies": ["读小说"],
    "avatar": "/christmas/image_20.jpeg",
    "bgImage": "/mbti/mbti-blue.jpg",
    "intro": "来自印度尼西亚，香港中文大学（深圳）数据科学专业26届毕业的。毕业之后我希望能留在深圳继续发展"
  },
  {
    "idx": "21",
    "name": "mao",
    "phone": "18575507970",
    "zodiac": "双子",
    "hobbies": ["打坐"],
    "avatar": "/christmas/image_21.jpeg",
    "bgImage": "/mbti/mbti-blue.jpg",
    "intro": "专注线下消费智能化升级、共享经济第一批创业者、打造小铁共享寄存、小铁自助台球室"
  },
  {
    "idx": "22",
    "name": "天宇",
    "phone": "18600540810",
    "mbti": "ENFP",
    "zodiac": "巨蟹座",
    "hobbies": ["德州扑克"],
    "avatar": "/christmas/image_22.jpeg",
    "bgImage": "/mbti/mbti-yellow.jpg",
    "intro": "前罗永浩战略现ai硬件创业者"
  }
];

export const backgroundImages = [
  "mbti-blue.jpg",
  "mbti-yellow.jpg",
  "mbti-purple.jpg",
  "mbti-green.jpg"
];
