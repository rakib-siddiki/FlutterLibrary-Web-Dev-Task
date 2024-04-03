'use client';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { FC, ImgHTMLAttributes } from 'react';

interface IProps extends ImgHTMLAttributes<HTMLImageElement> {}

const Logo: FC<IProps> = ({ className }) => {
    const { theme } = useTheme();
    return (
        <Image
            height={35}
            width={100}
            src={theme === 'light' ? '/logo-dark.png' : '/logo-light.png'}
            alt='site-logo'
            className={`${className} h-12 w-fit`}
            unoptimized
        />
    );
};

export default Logo;
