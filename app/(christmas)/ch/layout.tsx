import { Inter } from 'next/font/google';
import '@/app/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: '圣诞贺卡',
  description: '圣诞快乐！',
  layout: 'christmas'
};

// 添加这个配置来指示这是一个独立的根布局
export const dynamic = 'force-dynamic';

export default function ChristmasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh" className={`${inter.variable}`}>
      <head />
      <body className="font-sans antialiased">
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
