import React, { createContext, useState, useCallback } from 'react';
import Toast from './Toast';

export const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
    const [toast, setToast] = useState(null);

    const show = useCallback((message, type = 'info') => {
        setToast({ message, type });

        setTimeout(() => {
            setToast(null);
        }, 3000);
    }, []);

    return (
        <ToastContext.Provider value={{ show }}>
            {children}
            {toast && <Toast {...toast} />}
        </ToastContext.Provider>
    );
};