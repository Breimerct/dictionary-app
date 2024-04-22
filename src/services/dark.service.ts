export const getLocalStoreDark = (): boolean => {
    const isActivaDarkTheme = localStorage.getItem('dark');

    if (isActivaDarkTheme == undefined) return false;
    return JSON.parse(isActivaDarkTheme);
};
