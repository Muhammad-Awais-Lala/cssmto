import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CustomCollapsibleProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

const CustomCollapsible = ({ open, onOpenChange, children, className }: CustomCollapsibleProps) => {
  const childrenArray = React.Children.toArray(children);
  const trigger = childrenArray.find(child => React.isValidElement(child) && child.type === CustomCollapsibleTrigger);
  const content = childrenArray.find(child => React.isValidElement(child) && child.type === CustomCollapsibleContent);

  return (
    <div className={cn(className)}>
      {React.isValidElement(trigger) && trigger.type === CustomCollapsibleTrigger
        ? React.cloneElement(trigger as React.ReactElement<any>, { onClick: () => onOpenChange(!open) })
        : trigger}
      <AnimatePresence>
        {open && React.isValidElement(content) && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: 'hidden' }}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
CustomCollapsible.displayName = "CustomCollapsible";

interface CustomCollapsibleTriggerProps extends React.HTMLAttributes<HTMLDivElement> {
  onClick: () => void;
}

const CustomCollapsibleTrigger = React.forwardRef<HTMLDivElement, CustomCollapsibleTriggerProps>(
  ({ children, onClick, className, ...props }, ref) => (
    <div ref={ref} onClick={onClick} className={cn("cursor-pointer", className)} {...props}>
      {children}
    </div>
  )
);
CustomCollapsibleTrigger.displayName = "CustomCollapsibleTrigger";

interface CustomCollapsibleContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const CustomCollapsibleContent = React.forwardRef<HTMLDivElement, CustomCollapsibleContentProps>(
  ({ children, className, ...props }, ref) => (
    <div ref={ref} className={cn(className)} {...props}>
      {children}
    </div>
  )
);
CustomCollapsibleContent.displayName = "CustomCollapsibleContent";

export { CustomCollapsible, CustomCollapsibleTrigger, CustomCollapsibleContent };