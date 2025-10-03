import React from 'react';
import { cn } from '@/lib/utils';

interface CustomCardProps extends React.HTMLAttributes<HTMLDivElement> {}

const CustomCard = React.forwardRef<HTMLDivElement, CustomCardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-xl bg-surface shadow-sm flex flex-col h-full",
        className
      )}
      {...props}
    />
  )
);
CustomCard.displayName = "CustomCard";

interface CustomCardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const CustomCardHeader = React.forwardRef<HTMLDivElement, CustomCardHeaderProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("p-6 pb-2", className)}
      {...props}
    />
  )
);
CustomCardHeader.displayName = "CustomCardHeader";

interface CustomCardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const CustomCardTitle = React.forwardRef<HTMLHeadingElement, CustomCardTitleProps>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("text-lg font-semibold text-text-primary", className)}
      {...props}
    />
  )
);
CustomCardTitle.displayName = "CustomCardTitle";

interface CustomCardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const CustomCardDescription = React.forwardRef<HTMLParagraphElement, CustomCardDescriptionProps>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-sm text-text-muted", className)}
      {...props}
    />
  )
);
CustomCardDescription.displayName = "CustomCardDescription";

interface CustomCardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const CustomCardContent = React.forwardRef<HTMLDivElement, CustomCardContentProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("p-6 pt-0 flex-1", className)}
      {...props}
    />
  )
);
CustomCardContent.displayName = "CustomCardContent";

export { CustomCard, CustomCardHeader, CustomCardTitle, CustomCardDescription, CustomCardContent };