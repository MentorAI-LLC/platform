import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
  "w-full border rounded-2xl px-8 py-2 text-text ease-in-out duration-200 transition-colors",
  {
    variants: {
      color: {
        primary: "bg-primary hover:bg-primary/90 border-primary",
        secondary:
          "bg-secondary hover:bg-secondary/90 hover:text-background border-secondary",
        background:
          "bg-background hover:bg-secondary/90 border-background hover:border-secondary",
        accent: "bg-accent hover:bg-accent/90 border-accent",
      },
      outline: {
        "secondary-selected": "border border-secondary bg-secondary/40",
        "secondary-not-selected":
        "border border-secondary hover:text-background",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
      defaultVariants: {
        color: "primary",
        size: "default",
      },
    },
  },
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, color, outline, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ color, outline, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
