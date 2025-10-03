import React from 'react';
import { cn } from '@/lib/utils';

interface CustomBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'destructive' | 'success' | 'info';
}

const CustomBadge = React.forwardRef<HTMLDivElement, CustomBadgeProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    const variantClasses = {
      default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
      secondary: "border-transparent bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-700 dark:text-slate-50 dark:hover:bg-slate-700/80",
      destructive: "border-transparent bg-danger text-destructive-foreground hover:bg-danger/80",
      outline: "text-foreground",
      success: "border-transparent bg-success text-white hover:bg-success/80",
      info: "border-transparent bg-blue-500 text-white hover:bg-blue-500/80",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
          variantClasses[variant],
          className
        )}
        {...props}
      />
    );
  }
);
CustomBadge.displayName = "CustomBadge";

export { CustomBadge };