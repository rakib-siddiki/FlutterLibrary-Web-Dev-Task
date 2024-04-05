import React, { Fragment } from 'react';
import { TEMPELETES } from '@/static';
import { Card } from '@/components/core';

const Templete = () => {
    return (
        <section>
            <div className='flex items-center justify-between pr-4'>
                <h3 className='text-2xl mb-4 font-bold'>Templates</h3>
                <p className='text-gray-500 dark:text-gray-100 font-semibold cursor-pointer'>
                    See all
                </p>
            </div>
            <div className='flex flex-wrap justify-center items-center gap-x-3 gap-y-6 '>
                {(TEMPELETES ?? []).map(({ id, ...rest }) => (
                    <Fragment key={id}>
                        <Card cardFor='templete' {...rest} />
                    </Fragment>
                ))}
            </div>
        </section>
    );
};

export default Templete;
