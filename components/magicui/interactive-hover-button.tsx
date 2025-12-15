"use client"
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, className, ...props }, ref) => {
  const [active, setActive] = useState(false);

  return (
    <button
      ref={ref}
      className={cn(
        "group relative w-auto cursor-pointer overflow-hidden rounded-full border bg-background p-2 px-6 text-center font-semibold transition-all duration-300",
        active && "ring-2 ring-primary", // optional visual feedback
        className
      )}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onTouchStart={() => setActive(true)}
      onTouchEnd={() => setActive(false)}
      {...props}
    >
      <div className="flex items-center gap-2">
        <div
          className={cn(
            "h-2 w-2 rounded-full bg-primary transition-all duration-300",
            "group-hover:scale-[100.8]",
            active && "scale-[100.8]"
          )}
        ></div>

        <span
          className={cn(
            "inline-block transition-all duration-300",
            "group-hover:translate-x-12 group-hover:opacity-0",
            active && "translate-x-12 opacity-0"
          )}
        >
          {children}
        </span>
      </div>

      <div
        className={cn(
          "absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300",
          "group-hover:-translate-x-5 group-hover:opacity-100",
          active && "-translate-x-5 opacity-100"
        )}
      >
        <span>{children}</span>
        <ArrowRight />
      </div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";
