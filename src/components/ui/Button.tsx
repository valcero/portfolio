"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", href, children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center gap-2 font-mono uppercase tracking-wider transition-all duration-200 focus:outline-none";

    const variants = {
      primary:
        "bg-white text-black hover:bg-neutral-200 active:bg-neutral-300",
      outline:
        "border border-white/20 text-white hover:border-white/60 hover:bg-white/5",
      ghost:
        "text-neutral-500 hover:text-white",
    };

    const sizes = {
      sm: "px-4 py-2 text-[10px]",
      md: "px-6 py-2.5 text-[11px]",
      lg: "px-8 py-3 text-xs",
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
