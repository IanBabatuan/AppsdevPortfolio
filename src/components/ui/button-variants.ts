import { cn } from "@/lib/cn";

export type Variant = "primary" | "secondary" | "outline" | "ghost";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed";

export const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-900/40 hover:from-violet-500 hover:to-fuchsia-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400",
  secondary:
    "bg-panel text-white border border-edge hover:border-violet-500/50 hover:bg-edge/60",
  outline:
    "border border-edge text-slate-300 hover:border-violet-500/50 hover:text-white",
  ghost: "text-slate-300 hover:text-white hover:bg-panel",
};

export function buttonStyles(variant: Variant = "primary", className?: string) {
  return cn(baseStyles, variants[variant], className);
}