import * as React from "react";

interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
  duration?: number;
}

interface ToastState {
  toasts: Toast[];
}

type ToastAction =
  | { type: 'ADD_TOAST'; toast: Toast }
  | { type: 'REMOVE_TOAST'; id: string };

const toastReducer = (state: ToastState, action: ToastAction): ToastState => {
  switch (action.type) {
    case 'ADD_TOAST':
      return { toasts: [...state.toasts, action.toast] };
    case 'REMOVE_TOAST':
      return { toasts: state.toasts.filter(toast => toast.id !== action.id) };
    default:
      return state;
  }
};

let toastIdCounter = 0;

export function useCustomToast() {
  const [state, dispatch] = React.useReducer(toastReducer, { toasts: [] });

  const addToast = React.useCallback((message: string, type: Toast['type'] = 'info', duration: number = 3000) => {
    const id = `toast-${toastIdCounter++}`;
    const newToast: Toast = { id, message, type, duration };
    dispatch({ type: 'ADD_TOAST', toast: newToast });
    return id;
  }, []);

  const removeToast = React.useCallback((id: string) => {
    dispatch({ type: 'REMOVE_TOAST', id });
  }, []);

  const toast = React.useMemo(() => ({
    success: (message: string, duration?: number) => addToast(message, 'success', duration),
    error: (message: string, duration?: number) => addToast(message, 'error', duration),
    info: (message: string, duration?: number) => addToast(message, 'info', duration),
  }), [addToast]);

  return {
    toasts: state.toasts,
    toast,
    removeToast,
  };
}