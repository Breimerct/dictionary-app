import { toast, ToastOptions, TypeOptions } from 'react-toastify';

const defaultOptions: ToastOptions = {
    position: 'bottom-center',
};

export const showToast = (
    text: string,
    type: TypeOptions,
    isDark: boolean,
    toastOptions?: ToastOptions,
) => {
    return toast(text, {
        theme: isDark ? 'dark' : 'light',
        type,
        ...defaultOptions,
        ...toastOptions,
    });
};
