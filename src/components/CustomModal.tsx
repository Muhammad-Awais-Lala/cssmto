import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { CustomButton } from './CustomButton';
import { cn } from '@/lib/utils';

interface CustomModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
}

const CustomModal = ({ open, onOpenChange, title, children, className, contentClassName }: CustomModalProps) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={cn("fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4", className)}
          onClick={() => onOpenChange(false)} // Close when clicking outside
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "relative w-full max-w-md rounded-lg bg-white dark:bg-slate-800 p-6 shadow-lg",
              contentClassName
            )}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{title}</h2>
              <CustomButton variant="ghost" size="sm" onClick={() => onOpenChange(false)}>
                <X className="w-5 h-5" />
              </CustomButton>
            </div>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
CustomModal.displayName = "CustomModal";

export { CustomModal };