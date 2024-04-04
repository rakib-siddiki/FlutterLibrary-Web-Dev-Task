'use client';
import { useTheme } from 'next-themes';
import { ButtonHTMLAttributes, FC, useEffect, useState } from 'react';
import { Icons } from './Icons';
import { cn } from '@/utils';
interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
export const ThemeSwitcher: FC<IProps> = ({ className }) => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <button
            className={cn(
                `w-fit hover:scale-110 active:scale-100 duration-200`,
                className
            )}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
            {theme === 'light' ? (
                <Icons.Moon className='stroke-gray-800 stroke-[1.25px]' />
            ) : (
                <Icons.SunMedium className='stroke-[1.25px]' />
            )}
        </button>
    );
};
