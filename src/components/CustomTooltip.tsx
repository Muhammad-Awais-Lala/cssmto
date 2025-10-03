import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CustomTooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  delayDuration?: number;
  side?: 'top' | 'right' | 'bottom' | 'left';
  className?: string;
  contentClassName?: string;
}

const CustomTooltip = ({
  children,
  content,
  delayDuration = 300,
  side = 'top',
  className,
  contentClassName,
}: CustomTooltipProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    const id = setTimeout(() => setIsOpen(true), delayDuration);
    setTimeoutId(id);
  };

  const handleMouseLeave = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setIsOpen(false);
  };

  const getPositionClasses = () => {
    switch (side) {
      case 'top':
        return 'bottom-full left-1/2 -translate-x-1/2 mb-2';
      case 'bottom':
        return 'top-full left-1/2 -translate-x-1/2 mt-2';
      case 'left':
        return 'right-full top-1/2 -translate-y-1/2 mr-2';
      case 'right':
        return 'left-full top-1/2 -translate-y-1/2 ml-2';
      default:
        return 'bottom-full left-1/2 -translate-x-1/2 mb-2';
    }
  };

  return (
    <div
      className={cn("relative inline-block", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter} // For keyboard accessibility
      onBlur={handleMouseLeave}   // For keyboard accessibility
    >
      {children}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.1 }}
            className={cn(
              "absolute z-50 px-3 py-1.5 text-sm font-medium text-white bg-slate-900 dark:bg-slate-700 rounded-md shadow-md whitespace-nowrap",
              getPositionClasses(),
              contentClassName
            )}
            role="tooltip"
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
CustomTooltip.displayName = "CustomTooltip";

export { CustomTooltip };