import React, { useState, useCallback, useEffect, useRef } from 'react';
import ToastComponent from './Toast';
import { setToastRef } from './ToastManager';

export const ToastProvider = ({ children, successIcon, errorIcon, infoIcon }) => {
    const [toast, setToast] = useState(null);
    const timerRef = useRef(null);

    // ✅ Move this ABOVE show
    const getIconByType = (type) => {
        switch (type) {
            case 'success':
                return successIcon || '✔️';
            case 'error':
                return errorIcon || '❌';
            default:
                return infoIcon || 'ⓘ';
        }
    };

    const show = useCallback((message, type = 'info', position = 'bottom') => {
        // ✅ clear previous timeout
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        setToast({
            message,
            type,
            position,
            icon: getIconByType(type)
        });

        timerRef.current = setTimeout(() => {
            setToast(null);
        }, 3000);
    }, [successIcon, errorIcon, infoIcon]);

    // global ref
    useEffect(() => {
        setToastRef({ show });
    }, [show]);

    // ✅ cleanup on unmount
    useEffect(() => {
        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, []);

    return (
        <>
            {children}
            {toast && (
                <ToastComponent
                    {...toast}
                    onClose={() => setToast(null)}
                />
            )}
        </>
    );
};