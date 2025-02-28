import '@/app/globals.css';
import '@/app/styles/animations.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: '交通指引生成器 | HackathonWeekly',
  description: '创建自定义的交通指引，帮助访客轻松找到您的位置',
};

export default function TrafficGuideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh" className={inter.variable}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
