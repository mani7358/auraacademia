import { useState, useCallback } from 'react';

/**
 * useToast - Hook for managing toast notifications
 * 
 * @returns {Object} - { toasts, showToast, hideToast }
 */
export const useToast = () => {
    const [toasts, setToasts] = useState([]);

    const showToast = useCallback((message, type = 'info', duration = 5000) => {
        const id = Date.now() + Math.random();
        const newToast = { id, message, type };
        
        setToasts(prev => [...prev, newToast]);

        if (duration > 0) {
            setTimeout(() => {
                hideToast(id);
            }, duration);
        }

        return id;
    }, []);

    const hideToast = useCallback((id) => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
    }, []);

    return { toasts, showToast, hideToast };
};
