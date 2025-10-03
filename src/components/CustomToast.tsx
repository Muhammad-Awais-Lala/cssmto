import React, { useEffect } from 'react';
import { CheckCircle, XCircle, Info } from 'lucide-react';

interface CustomToastProps {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
  duration?: number;
  onClose: (id: string) => void;
}

const CustomToast: React.FC<CustomToastProps> = ({ id, message, type, duration = 3000, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, id, onClose]);

  const iconMap = {
    success: <CheckCircle className="w-5 h-5 text-green-500" />,
    error: <XCircle className="w-5 h-5 text-red-500" />,
    info: <Info className="w-5 h-5 text-blue-500" />,
  };

  const bgColorMap = {
    success: "bg-green-50 dark:bg-green-900/20",
    error: "bg-red-50 dark:bg-red-900/20",
    info: "bg-blue-50 dark:bg-blue-900/20",
  };

  const textColorMap = {
    success: "text-green-800 dark:text-green-200",
    error: "text-red-800 dark:text-red-200",
    info: "text-blue-800 dark:text-blue-200",
  };

  return (
    <div
      className={`flex items-center p-4 rounded-lg shadow-lg mb-3 ${bgColorMap[type]} ${textColorMap[type]} border border-opacity-20`}
      role="alert"
    >
      <div className="flex-shrink-0 mr-3">
        {iconMap[type]}
      </div>
      <div className="flex-1 text-sm font-medium">
        {message}
      </div>
      <button
        onClick={() => onClose(id)}
        className="ml-auto -mx-1.5 -my-1.5 bg-transparent text-current rounded-lg p-1.5 hover:bg-opacity-20 focus:ring-2 focus:ring-opacity-50"
        aria-label="Close"
      >
        <XCircle className="w-4 h-4" />
      </button>
    </div>
  );
};

export default CustomToast;