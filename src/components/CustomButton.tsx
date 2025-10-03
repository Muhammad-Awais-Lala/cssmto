import React from 'react';
import { cn } from '@/lib/utils';

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'destructive' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  asChild?: boolean; // Not fully implemented, but kept for API consistency if needed later
}

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ className, variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    const variantClasses = {
      default: "bg-primary text-white bg-[var(--color-primary-600)]",
      destructive: "bg-danger text-white hover:bg-red-600",
      outline: "border border-slate-300 dark:border-slate-600 bg-transparent hover:bg-accent text-text-primary",
      ghost: "text-text-primary hover:bg-accent",
      link: "text-[var(--color-primary)] underline-offset-4 hover:underline",
    };

    const sizeClasses = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10",
    };

    return (
      <button
        className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
        ref={ref}
        {...props}
      />
    );
  }
);
CustomButton.displayName = "CustomButton";

export { CustomButton };