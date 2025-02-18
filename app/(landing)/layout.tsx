import '@/app/globals.css';
import '@/app/styles/animations.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';
import BackToTop from '@/app/components/back-to-top';
import ScrollProgress from '@/app/components/scroll-progress';
import { baseMetadata, baseViewport } from '@/app/metadata';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap', // 优化字体加载
});

export const metadata: Metadata = {
  ...baseMetadata,
  metadataBase: new URL('https://hackathonweekly.cn'),
  title: 'HackathonWeekly | 周周黑客松',
  // title: '黑客周',
  // title: '周周Hack',
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

// 新的 viewport 配置
export const viewport: Viewport = baseViewport;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh" className={`${inter.variable}`}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Header />
        <ScrollProgress />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
