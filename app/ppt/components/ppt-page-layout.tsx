import { cn } from "@/lib/utils";
import Image from 'next/image';

interface PPTPageLayoutProps {
  className?: string;
  children: React.ReactNode;
  variant?: "default" | "gradient";
}

export default function PPTPageLayout({
  className,
  children,
  variant = "default",
}: PPTPageLayoutProps) {
  return (
    <div className={cn("w-screen flex items-center justify-center p-1 print:p-0", className)}>
      {/* Modern 16:9 PPT container */}
      <div className="w-[1280px] h-[720px] bg-background shadow-xl print:shadow-none relative overflow-hidden rounded-xl border border-border/5">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-purple-500/5 to-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute -left-20 top-1/2 w-[300px] h-[300px] bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-2xl" />
          <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-gradient-to-t from-purple-500/5 to-transparent rounded-full blur-2xl" />
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:44px_44px]"/>
        </div>

        {/* Logo */}
        <div className="absolute top-8 right-8 flex items-center gap-2 z-20">
          <Image
            src="/logo.png"
            alt="HackathonWeekly Logo"
            width={32}
            height={32}
            // className="rounded-lg"
          />
          <span className="text-lg font-semibold" style={{ color: 'rgb(71, 49, 227)' }}>
            HackathonWeekly
          </span>
        </div>

        {/* Slide content */}
        <div className="relative z-10 w-full h-full">
          {children}
        </div>
      </div>
    </div>
  );
}
