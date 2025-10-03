import { motion } from 'framer-motion';

interface LoadingSkeletonProps {
  className?: string;
}

export default function LoadingSkeleton({ className = "" }: LoadingSkeletonProps) {
  return (
    <motion.div
      className={`bg-slate-200 dark:bg-slate-700 rounded-lg ${className}`}
      animate={{
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export function MCQLoadingSkeleton() {
  return (
    <div className="space-y-6">
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
          <LoadingSkeleton className="h-6 w-3/4 mb-4" />
          <div className="space-y-3">
            {Array.from({ length: 4 }).map((_, optionIndex) => (
              <div key={optionIndex} className="flex items-center space-x-3">
                <LoadingSkeleton className="w-4 h-4 rounded-full" />
                <LoadingSkeleton className="h-4 flex-1" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
