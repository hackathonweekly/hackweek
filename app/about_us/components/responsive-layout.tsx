import { cn } from "@/lib/utils";

interface ResponsiveLayoutProps {
  className?: string;
  children: React.ReactNode;
  variant?: "default" | "gradient";
}

export default function ResponsiveLayout({
  className,
  children,
  variant = "default",
}: ResponsiveLayoutProps) {
  return (
    <div className={cn("w-full flex items-center justify-center p-4 md:p-6 lg:p-8", className)}>
      {/* Responsive container that adapts to screen size */}
      <div className="w-full max-w-7xl bg-background relative overflow-hidden rounded-xl border border-border/5 shadow-sm">
        {/* Background decoration - responsive and scaled appropriately */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-purple-500/5 to-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute -left-[10%] top-1/2 w-1/4 h-1/4 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-2xl" />
          <div className="absolute bottom-0 right-1/3 w-1/3 h-1/3 bg-gradient-to-t from-purple-500/5 to-transparent rounded-full blur-2xl" />
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:44px_44px]"/>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full">
          {children}
        </div>
      </div>
    </div>
  );
} 