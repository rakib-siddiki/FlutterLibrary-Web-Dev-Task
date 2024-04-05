import React, { FC } from 'react';
import { Icons } from '../Icons';
import Image from 'next/image';
interface IProps {
    cardFor: string;
    url: string;
    text: string;
    download?: number;
    uiKit?: number;
    date?: string;
    category?: string;
}

const Card: FC<IProps> = ({
    cardFor,
    url,
    text,
    download,
    uiKit,
    category,
    date
}) => {
    return (
        <section>
            <Image
                width={300}
                height={300}
                src={url}
                alt={'tempelete'}
                className='h-56 w-auto mb-2'
            />
            {cardFor === 'articles' ? (
                <div className='flex items-center gap-5 text-sm text-gray-500 dark:text-gray-100/80 mb-2'>
                    <>
                        <p>{date}</p>
                        <p>{category}</p>
                    </>
                </div>
            ) : null}
            <div className='flex items-center justify-between'>
                <p className='capitalize dark:text-gray-100/80 font-semibold'>
                    {text}
                </p>
                <div className='flex items-center gap-2'>
                    {cardFor === 'templete' ? (
                        <>
                            <span className='flex items-center'>
                                <Icons.UIkit className='size-4 stroke-1 fill-gray-100/80 mr-1' />
                                {uiKit}
                            </span>
                            <span className='flex items-center'>
                                <Icons.Download className='mr-1 stroke-1 dark:stroke-gray-100/80' />
                                {download}
                            </span>
                        </>
                    ) : null}
                </div>
            </div>
        </section>
    );
};

export default Card;
