import type { Metadata, Viewport } from 'next';

// 基础元数据配置
export const baseMetadata: Metadata = {
  title: {
    template: '%s | HackathonWeekly',
    default: 'HackathonWeekly | 周周黑客松',
  },
  description: '花1周时间，创造1个最小可行产品，解决1个生活痛点',
  keywords: 'hackathon, 黑客松, MVP, 产品开发, 创新, 编程, AI, 人工智能',
  authors: [{ name: 'HackathonWeekly Team' }],
  openGraph: {
    title: 'HackathonWeekly | 周周黑客松',
    description: '花1周时间，创造1个最小可行产品，解决1个生活痛点',
    images: ['/og-image.png'],
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HackathonWeekly | 周周黑客松',
    description: '花1周时间，创造1个最小可行产品，解决1个生活痛点',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/logo.png',
    apple: '/apple-icon.png',
  },
};

// 视口配置
export const baseViewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#4F46E5',
};
