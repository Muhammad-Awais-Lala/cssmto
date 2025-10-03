import React from 'react';
import { cn } from '@/lib/utils';

interface CustomRadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  onValueChange: (value: string) => void;
  disabled?: boolean;
  name?: string;
}

const CustomRadioGroup = React.forwardRef<HTMLDivElement, CustomRadioGroupProps>(
  ({ value, onValueChange, disabled, children, className, name, ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!disabled) {
        onValueChange(e.target.value);
      }
    };
    return (
      <div
        ref={ref}
        role="radiogroup"
        className={cn("space-y-3", className)}
        onChange={handleChange}
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) return child;
          // inject group name into radio items
          return React.cloneElement(child as any, { name });
        })}
      </div>
    );
  }
);
CustomRadioGroup.displayName = "CustomRadioGroup";

interface CustomRadioGroupItemProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  id: string;
  checked: boolean;
  name?: string;
}

const CustomRadioGroupItem = React.forwardRef<HTMLInputElement, CustomRadioGroupItemProps>(
  ({ value, id, disabled, checked, name, className, ...props }, ref) => (
    <input
      ref={ref}
      type="radio"
      id={id}
      name={name}
      value={value}
      disabled={disabled}
      checked={checked}
      className={cn(
        "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-gray-600 dark:bg-slate-700",
        className
      )}
      {...props}
    />
  )
);
CustomRadioGroupItem.displayName = "CustomRadioGroupItem";

export { CustomRadioGroup, CustomRadioGroupItem };