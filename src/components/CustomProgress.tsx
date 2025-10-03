import React from 'react';
import { cn } from '@/lib/utils';

interface CustomProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
}

const CustomProgress = React.forwardRef<HTMLDivElement, CustomProgressProps>(
  ({ value, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2", className)}
      {...props}
    >
      <div
        className="bg-blue-600 h-2 rounded-full transition-all duration-500 ease-out"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  )
);
CustomProgress.displayName = "CustomProgress";

export { CustomProgress };