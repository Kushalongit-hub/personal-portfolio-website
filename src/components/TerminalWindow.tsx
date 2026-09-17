import { ReactNode } from "react";

type Variant = "gray" | "pink" | "white" | "windows";

const variantClasses: Record<Variant, string> = {
  gray: "bg-brand-gray",
  pink: "bg-accent text-white",
  white: "bg-white",
  windows: "bg-[#0a0a0a] text-[#E5E5E5]",
};

const variantHeaderClasses: Record<Variant, string> = {
  gray: "border-brand-black bg-brand-gray",
  pink: "border-black bg-accent text-white",
  white: "border-brand-black bg-white",
  windows: "border-[#262626] bg-[#171717]",
};

export default function TerminalWindow({
  title,
  subtitle,
  children,
  className = "",
  variant = "white",
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  variant?: Variant;
}) {
  const isWindows = variant === "windows";

  return (
    <div
      className={`border-2 shadow-brutal ${variantClasses[variant]} ${className}`}
    >
      <div className={`flex items-center justify-between border-b px-3 py-2 ${variantHeaderClasses[variant]}`}>
        <div className="flex items-center gap-2">
          {isWindows && (
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56] border border-[#e0443e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e] border border-[#dea123]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f] border border-[#1aab29]" />
            </div>
          )}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest">
              {isWindows ? `C:\\Users\\${title}` : `[${title}]`}
            </span>
            {subtitle && (
              <span className="ml-2 text-xs opacity-70">{subtitle}</span>
            )}
          </div>
        </div>
        {!isWindows && (
          <div className="flex gap-1">
            <span className="h-3 w-3 border border-brand-black bg-brand-gray" />
            <span className="h-3 w-3 border border-brand-black bg-brand-gray" />
            <span className="h-3 w-3 border border-brand-black bg-accent" />
          </div>
        )}
      </div>
      <div className={`p-4 text-sm leading-relaxed ${isWindows ? "font-mono" : ""}`}>{children}</div>
    </div>
  );
}
