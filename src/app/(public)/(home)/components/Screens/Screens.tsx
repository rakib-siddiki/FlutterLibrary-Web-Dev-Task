import { Icons } from '@/components/Icons';
import React from 'react';
import { SCREENS, TAGS } from '@/static';
import Image from 'next/image';

const Screens = () => {
    return (
        <section>
            <div className='flex items-center justify-between pr-4'>
                <h3 className='text-2xl mb-4 font-bold'>Screens</h3>
                <p className='text-gray-500 dark:text-gray-100 font-semibold cursor-pointer'>
                    See all
                </p>
            </div>
            <div className='flex flex-wrap items-center gap-3 mb-4'>
                <span className='flex items-center gap-x-3 bg-gray-50 dark:bg-gray-600/50 rounded-full px-4 py-2 '>
                    <Icons.Filter className='stroke-1 stroke-gray-900 dark:stroke-white  size-3' />
                    <p className='text-sm'>Filters</p>
                </span>
                <span className='w-[1px] h-5 bg-gray-200'></span>
                {(TAGS ?? []).map(({ id, name }) => (
                    <div
                        key={id}
                        className='px-4 py-2 bg-white border border-gray-300 text-gray-900 shadow-sm transition duration-200 cursor-pointer text-xs rounded-full capitalize hover:bg-gray-800 hover:text-white dark:bg-gray-800/50 dark:hover:bg-gray-50  dark:border-gray-100/20 dark:text-gray-200 dark:hover:text-gray-800'
                    >
                        {name}
                    </div>
                ))}
                <Icons.ArrowRight className='size-5' />
            </div>
            <div className='flex flex-wrap items-center max-md:justify-center gap-4'>
                {(SCREENS ?? []).map(({ id, url }) => (
                    <Image
                        key={id}
                        width={300}
                        height={300}
                        src={url}
                        alt={'image'}
                        className='h-80 lg:h-[30.5rem] w-auto mb-2 rounded-lg overflow-hidden'
                    />
                ))}
            </div>
        </section>
    );
};

export default Screens;
