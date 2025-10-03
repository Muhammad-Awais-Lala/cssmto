import React from 'react';
import { useCustomToast } from '@/hooks/useCustomToast';
import CustomToast from './CustomToast';

const CustomToastProvider: React.FC = () => {
  const { toasts, removeToast } = useCustomToast();

  return (
    <div className="fixed top-4 right-4 z-[9999] w-full max-w-xs">
      {toasts.map((toast) => (
        <CustomToast key={toast.id} {...toast} onClose={removeToast} />
      ))}
    </div>
  );
};

export default CustomToastProvider;