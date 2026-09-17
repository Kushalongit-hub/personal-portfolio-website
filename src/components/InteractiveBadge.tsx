import { ReactNode } from "react";

export default function InteractiveBadge({
  children,
  href,
  target,
  rel,
  variant = "accent",
  onClick,
}: {
  children: ReactNode;
  href: string;
  target?: string;
  rel?: string;
  variant?: "accent" | "gray";
  onClick?: (e?: React.MouseEvent<HTMLAnchorElement>) => void;
}) {
  const base =
    "inline-block border-2 border-brand-black px-3 py-1 text-xs font-bold uppercase tracking-widest shadow-brutal transition-transform hover:-translate-y-0.5 hover:translate-x-0.5 hover:shadow-none";

  const styles =
    variant === "gray"
      ? `${base} bg-brand-gray text-black hover:text-[var(--bg-accent)]`
      : `${base} bg-[var(--bg-accent)] text-white`;

  return (
    <a href={href} target={target} rel={rel} onClick={onClick} className={styles}>
      {children}
    </a>
  );
}
