import React from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface CustomSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const CustomSpinner = React.forwardRef<HTMLDivElement, CustomSpinnerProps>(
  ({ size = 'md', className, ...props }, ref) => {
    const sizeClasses = {
      sm: 'h-4 w-4',
      md: 'h-6 w-6',
      lg: 'h-8 w-8',
    };

    return (
      <div
        ref={ref}
        className={cn("flex items-center justify-center", className)}
        role="status"
        aria-label="Loading"
        {...props}
      >
        <Loader2 className={cn("animate-spin text-current", sizeClasses[size])} />
      </div>
    );
  }
);
CustomSpinner.displayName = "CustomSpinner";

export { CustomSpinner };