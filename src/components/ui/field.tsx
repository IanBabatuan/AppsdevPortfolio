import React from "react";
import { cn } from "@/lib/cn";

interface FieldProps {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}

const fieldStyles =
  "w-full rounded-xl border border-edge bg-night px-4 py-3 text-sm text-white placeholder:text-slate-500 transition-colors focus:border-violet-500 focus:outline-none";

export const Field: React.FC<FieldProps> = ({ label, htmlFor, children }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="text-sm font-medium text-slate-300">
        {label}
      </label>
      {children}
    </div>
  );
};

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return <input className={cn(fieldStyles, className)} {...props} />;
};

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextArea: React.FC<TextAreaProps> = ({ className, ...props }) => {
  return (
    <textarea className={cn(fieldStyles, "min-h-36 resize-y", className)} {...props} />
  );
};