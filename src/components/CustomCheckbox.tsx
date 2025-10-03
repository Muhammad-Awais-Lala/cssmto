import React from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface CustomCheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

const CustomCheckbox = React.forwardRef<HTMLInputElement, CustomCheckboxProps>(
  ({ className, checked, onCheckedChange, disabled, ...props }, ref) => {
    const handleToggle = () => {
      if (!disabled) {
        onCheckedChange(!checked);
      }
    };

    return (
      <button
        type="button"
        role="checkbox"
        aria-checked={checked}
        aria-disabled={disabled}
        onClick={handleToggle}
        className={cn(
          "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          checked ? "bg-primary text-primary-foreground" : "bg-background",
          className
        )}
      >
        {checked && <Check className="h-4 w-4 text-white" />}
        <input
          type="checkbox"
          ref={ref}
          className="sr-only" // Visually hide the native checkbox but keep it accessible
          checked={checked}
          onChange={() => {}} // Controlled by the button
          disabled={disabled}
          {...props}
        />
      </button>
    );
  }
);
CustomCheckbox.displayName = "CustomCheckbox";

export { CustomCheckbox };