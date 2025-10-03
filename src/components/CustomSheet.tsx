import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import { XCircle } from 'lucide-react';
import { CustomButton } from './CustomButton';
import { cn } from '@/lib/utils';

interface CustomSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
  className?: string;
}

const CustomSheet = ({ open, onOpenChange, children, side = 'right', className }: CustomSheetProps) => {
  const getAnimationProps = () => {
    switch (side) {
      case 'top':
        return { initial: { y: '-100%' }, animate: { y: 0 }, exit: { y: '-100%' } };
      case 'bottom':
        return { initial: { y: '100%' }, animate: { y: 0 }, exit: { y: '100%' } };
      case 'left':
        return { initial: { x: '-100%' }, animate: { x: 0 }, exit: { x: '-100%' } };
      case 'right':
      default:
        return { initial: { x: '100%' }, animate: { x: 0 }, exit: { x: '100%' } };
    }
  };

  const getPositionClasses = () => {
    switch (side) {
      case 'top':
        return 'inset-x-0 top-0 h-1/3';
      case 'bottom':
        return 'inset-x-0 bottom-0 h-1/3';
      case 'left':
        return 'inset-y-0 left-0 w-3/4 md:w-1/3';
      case 'right':
      default:
        return 'inset-y-0 right-0 w-3/4 md:w-1/3';
    }
  };

  const childrenArray = React.Children.toArray(children);
  const trigger = childrenArray.find(child => React.isValidElement(child) && child.type === CustomSheetTrigger);
  const content = childrenArray.find(child => React.isValidElement(child) && child.type === CustomSheetContent);

  return (
    <>
      {trigger} {/* Render the trigger unconditionally */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex bg-black/60 backdrop-blur-sm"
            onClick={() => onOpenChange(false)} // Close when clicking outside
          >
            <motion.div
              {...getAnimationProps()}
              transition={{ duration: 0.3 }}
              className={cn(
                "bg-background p-6 shadow-lg relative", // Changed to bg-background
                getPositionClasses(),
                className
              )}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              {content} {/* Render only the content here */}
              <CustomButton variant="ghost" size="sm" className="absolute top-4 right-4" onClick={() => onOpenChange(false)}>
                <div className="w-5 h-5" />
              </CustomButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
CustomSheet.displayName = "CustomSheet";

interface CustomSheetTriggerProps extends React.HTMLAttributes<HTMLDivElement> {
  onClick: () => void;
}

const CustomSheetTrigger = React.forwardRef<HTMLDivElement, CustomSheetTriggerProps>(
  ({ children, onClick, className, ...props }, ref) => (
    <div
      ref={ref}
      onClick={onClick}
      className={cn("cursor-pointer inline-flex items-center", className)}
      {...props}
    >
      {children}
    </div>
  )
);

CustomSheetTrigger.displayName = "CustomSheetTrigger";

interface CustomSheetContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const CustomSheetContent = React.forwardRef<HTMLDivElement, CustomSheetContentProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "h-full p-6 text-slate-900 dark:text-slate-100", // Removed explicit background classes
        className
      )}
      {...props}
    />
  )
);

CustomSheetContent.displayName = "CustomSheetContent";

interface CustomSheetHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const CustomSheetHeader = React.forwardRef<HTMLDivElement, CustomSheetHeaderProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-2 text-center sm:text-left mb-6", className)}
      {...props}
    />
  )
);
CustomSheetHeader.displayName = "CustomSheetHeader";

interface CustomSheetTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const CustomSheetTitle = React.forwardRef<HTMLHeadingElement, CustomSheetTitleProps>(
  ({ className, ...props }, ref) => (
    <h2
      ref={ref}
      className={cn("text-xl font-semibold text-slate-900 dark:text-white", className)}
      {...props}
    />
  )
);
CustomSheetTitle.displayName = "CustomSheetTitle";

interface CustomSheetDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const CustomSheetDescription = React.forwardRef<HTMLParagraphElement, CustomSheetDescriptionProps>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-sm text-slate-600 dark:text-slate-400", className)}
      {...props}
    />
  )
);
CustomSheetDescription.displayName = "CustomSheetDescription";

export {
  CustomSheet,
  CustomSheetTrigger,
  CustomSheetContent,
  CustomSheetHeader,
  CustomSheetTitle,
  CustomSheetDescription,
};