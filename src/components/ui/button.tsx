import React from "react";
import { buttonStyles, type Variant } from "@/components/ui/button-variants";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className,
  children,
  ...props
}) => {
  return (
    <button className={buttonStyles(variant, className)} {...props}>
      {children}
    </button>
  );
};