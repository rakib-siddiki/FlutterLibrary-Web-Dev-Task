import React from 'react';
import { TEMPELETES } from '@/static';
import Image from 'next/image';
import { Icons } from '@/components/Icons';

const Templete = () => {
    return (
        <div>
            <div className='flex items-center justify-between pr-4'>
                <h3 className='text-2xl mb-4'>Templates</h3>
                <p className='text-gray-500 dark:text-gray-100 cursor-pointer'>
                    See all
                </p>
            </div>
            <div className='flex flex-wrap justify-center items-center gap-x-3 gap-y-6 '>
                {(TEMPELETES ?? []).map(
                    ({ id, url, text, download, uiKit }) => (
                        <div key={id}>
                            <Image
                                width={300}
                                height={300}
                                src={url}
                                alt={'tempelete'}
                                className='h-56 w-auto mb-2'
                            />
                            <div className='flex items-center justify-between'>
                                <p className='capitalize dark:text-gray-100/80'>
                                    {text}
                                </p>
                                <div className='flex items-center gap-2'>
                                    <span className='flex items-center'>
                                        <Icons.UIkit className='size-4 stroke-1 fill-gray-100/80 mr-1' />
                                        {uiKit}
                                    </span>
                                    <span className='flex items-center'>
                                        <Icons.Download className='mr-1 stroke-1 dark:stroke-gray-100/80' />
                                        {download}
                                    </span>
                                </div>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default Templete;
