import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CustomButton } from './CustomButton';
import { XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CustomAlertDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

const CustomAlertDialog = ({ open, onOpenChange, children, className }: CustomAlertDialogProps) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => onOpenChange(false)} // Close when clicking outside
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "relative w-full max-w-md rounded-lg bg-white dark:bg-slate-800 p-6 shadow-lg",
              className
            )}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {children}
            <CustomButton variant="ghost" size="sm" className="absolute top-4 right-4" onClick={() => onOpenChange(false)}>
              <XCircle className="w-5 h-5" />
            </CustomButton>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
CustomAlertDialog.displayName = "CustomAlertDialog";

interface CustomAlertDialogTriggerProps extends React.HTMLAttributes<HTMLDivElement> {
  onClick: () => void;
}

const CustomAlertDialogTrigger = React.forwardRef<HTMLDivElement, CustomAlertDialogTriggerProps>(
  ({ children, onClick, className, ...props }, ref) => (
    <div ref={ref} onClick={onClick} className={cn("cursor-pointer", className)} {...props}>
      {children}
    </div>
  )
);
CustomAlertDialogTrigger.displayName = "CustomAlertDialogTrigger";

interface CustomAlertDialogContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const CustomAlertDialogContent = React.forwardRef<HTMLDivElement, CustomAlertDialogContentProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn(className)} {...props} />
  )
);
CustomAlertDialogContent.displayName = "CustomAlertDialogContent";

interface CustomAlertDialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const CustomAlertDialogHeader = React.forwardRef<HTMLDivElement, CustomAlertDialogHeaderProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-2 text-center sm:text-left mb-4", className)}
      {...props}
    />
  )
);
CustomAlertDialogHeader.displayName = "CustomAlertDialogHeader";

interface CustomAlertDialogTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const CustomAlertDialogTitle = React.forwardRef<HTMLHeadingElement, CustomAlertDialogTitleProps>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("text-lg font-semibold text-slate-900 dark:text-white text-center", className)}
      {...props}
    />
  )
);
CustomAlertDialogTitle.displayName = "CustomAlertDialogTitle";

interface CustomAlertDialogDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const CustomAlertDialogDescription = React.forwardRef<HTMLParagraphElement, CustomAlertDialogDescriptionProps>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-sm text-slate-600 dark:text-slate-400 text-center", className)}
      {...props}
    />
  )
);
CustomAlertDialogDescription.displayName = "CustomAlertDialogDescription";

interface CustomAlertDialogFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const CustomAlertDialogFooter = React.forwardRef<HTMLDivElement, CustomAlertDialogFooterProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 mt-6", className)}
      {...props}
    />
  )
);
CustomAlertDialogFooter.displayName = "CustomAlertDialogFooter";

interface CustomAlertDialogActionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const CustomAlertDialogAction = React.forwardRef<HTMLButtonElement, CustomAlertDialogActionProps>(
  ({ className, ...props }, ref) => (
    <CustomButton ref={ref} className={cn("sm:ml-2", className)} {...props} />
  )
);
CustomAlertDialogAction.displayName = "CustomAlertDialogAction";

interface CustomAlertDialogCancelProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const CustomAlertDialogCancel = React.forwardRef<HTMLButtonElement, CustomAlertDialogCancelProps>(
  ({ className, ...props }, ref) => (
    <CustomButton
      ref={ref}
      variant="outline"
      className={cn("mt-2 sm:mt-0", className)}
      {...props}
    />
  )
);
CustomAlertDialogCancel.displayName = "CustomAlertDialogCancel";

export {
  CustomAlertDialog,
  CustomAlertDialogTrigger,
  CustomAlertDialogContent,
  CustomAlertDialogHeader,
  CustomAlertDialogTitle,
  CustomAlertDialogDescription,
  CustomAlertDialogFooter,
  CustomAlertDialogAction,
  CustomAlertDialogCancel,
};