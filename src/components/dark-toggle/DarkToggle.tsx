import { getLocalStoreDark } from '@/services/dark.service';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { MoonICon, SunICon } from '../icons/Icon';

const DarkToggle: FC = () => {
    const isActivaDarkTheme = getLocalStoreDark();
    const [isDark, setIsDark] = useState(isActivaDarkTheme);

    useEffect(() => {
        const docElement = document.documentElement;

        isDark
            ? docElement.classList.add('dark')
            : docElement.classList.remove('dark');
    }, [isDark]);

    const handleChangeCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
        const isDarkChecked = event.target.checked;

        localStorage.setItem('dark', String(isDarkChecked));
        setIsDark(isDarkChecked);
    };

    return (
        <label className="inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                checked={isDark}
                onChange={handleChangeCheckbox}
                className="sr-only peer"
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                {!isDark ? <MoonICon size={26} /> : <SunICon size={26} />}
            </span>
        </label>
    );
};

export default DarkToggle;
