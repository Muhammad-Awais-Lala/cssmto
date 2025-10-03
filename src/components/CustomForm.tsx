import React from 'react';
import { cn } from '@/lib/utils';

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
CustomInput.displayName = "CustomInput";

interface CustomLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const CustomLabel = React.forwardRef<HTMLLabelElement, CustomLabelProps>(
  ({ className, ...props }, ref) => (
    <label
      ref={ref}
      className={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-700 dark:text-slate-300",
        className
      )}
      {...props}
    />
  )
);
CustomLabel.displayName = "CustomLabel";

interface CustomTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const CustomTextarea = React.forwardRef<HTMLTextAreaElement, CustomTextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
CustomTextarea.displayName = "CustomTextarea";

interface CustomSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

const CustomSelect = React.forwardRef<HTMLSelectElement, CustomSelectProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <select
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </select>
    );
  }
);
CustomSelect.displayName = "CustomSelect";

export { CustomInput, CustomLabel, CustomTextarea, CustomSelect };