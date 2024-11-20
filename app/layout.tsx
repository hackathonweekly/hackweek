import './globals.css';
import './styles/animations.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from './components/header';
import Footer from './components/footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'HackathonWeekly | 周周黑客松',
  description: '花1周时间，创造1个最小可行产品，解决1个生活痛点',
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh" className={`${inter.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}