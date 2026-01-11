import React, { useEffect } from 'react';
import { type ToastMessage } from '../types/types';

interface ToastProps {
    toasts: ToastMessage[];
    removeToast: (id: string) => void;
}

export const Toast: React.FC<ToastProps> = ({ toasts, removeToast }) => {

  return (
    <div className=''>
        {toasts.map(toast => (
            <ToastItem key={toast.id} toast={toast} onRemove={removeToast}/>
        ))}
    </div>
  )
}

const ToastItem: React.FC<{ toast: ToastMessage; onRemove: (id: string) => void }> = ({ toast, onRemove }) => {
    useEffect(() => {
        const timer = setTimeout(() => onRemove(toast.id), 3000);
        return () => clearTimeout(timer);
    }, [toast.id, onRemove]);

    const bgColor = {
        success: 'bg-emerald-500',
        info: 'bg-blue-500',
        error: 'bg-red-500'
    }[toast.type];

    return (
        <div className="fixed top-6 right-6 z-50 flex flex-col gap-3 pointer-events-none">
            <div className={`${bgColor} text-white px-6 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-slide-in pointer-events-auto transition-all hover:scale-105 border border-white/20 backdrop-blur-md`}>
                <span className="font-semibold">{toast.message}</span>
                <button onClick={() => onRemove(toast.id)} className="hover:opacity-60 text-lg">&times;</button>
            </div>
        </div>
    )
}