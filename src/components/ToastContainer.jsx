import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, Info, AlertTriangle, X } from 'lucide-react';

/**
 * ToastContainer - Container component for displaying toast notifications
 * 
 * @param {Array} toasts - Array of toast objects { id, message, type }
 * @param {function} onClose - Callback to close a toast
 */
const ToastContainer = ({ toasts, onClose }) => {
    const icons = {
        success: <CheckCircle className="w-5 h-5" />,
        error: <XCircle className="w-5 h-5" />,
        info: <Info className="w-5 h-5" />,
        warning: <AlertTriangle className="w-5 h-5" />
    };

    const colors = {
        success: 'bg-green-500/90 text-white',
        error: 'bg-red-500/90 text-white',
        info: 'bg-blue-500/90 text-white',
        warning: 'bg-orange-500/90 text-white'
    };

    return (
        <div className="fixed top-4 right-4 z-50 flex flex-col gap-3 pointer-events-none">
            <AnimatePresence>
                {toasts.map((toast) => (
                    <motion.div
                        key={toast.id}
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 100, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className={`${colors[toast.type]} backdrop-blur-sm rounded-xl shadow-lg px-4 py-3 flex items-center gap-3 min-w-[300px] max-w-md pointer-events-auto`}
                    >
                        {/* Icon */}
                        <div className="flex-shrink-0">
                            {icons[toast.type]}
                        </div>

                        {/* Message */}
                        <p className="flex-1 text-sm font-medium">
                            {toast.message}
                        </p>

                        {/* Close button */}
                        <button
                            onClick={() => onClose(toast.id)}
                            className="flex-shrink-0 hover:bg-white/20 rounded-lg p-1 transition-colors"
                            aria-label="Close notification"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};

export default ToastContainer;
