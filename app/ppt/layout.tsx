import "@/app/globals.css";
import { cn } from "@/lib/utils";

export const metadata = {
  title: 'HackathonWeekly PPT',
  description: '周周黑客松：打造最具活力的AI产品创造者社区',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body
        className={cn(
          "bg-background font-sans antialiased",
        )}
      >
        {children}
      </body>
    </html>
  )
}
