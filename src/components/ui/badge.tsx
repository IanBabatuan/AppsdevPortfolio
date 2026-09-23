import React from "react";
import { cn } from "@/lib/cn";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, className }) => {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-edge bg-panel px-3 py-1 text-xs font-medium text-slate-300",
        className,
      )}
    >
      {children}
    </span>
  );
};