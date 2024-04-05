import { Card } from '@/components/core';
import { ARTICLES } from '@/static';
import React, { Fragment } from 'react';

const Artical = () => {
    return (
        <section>
            <div className='flex items-center justify-between pr-4'>
                <h3 className='text-2xl mb-4 font-bold'>Articles</h3>
                <p className='text-gray-500 dark:text-gray-100 font-semibold cursor-pointer'>
                    See all
                </p>
            </div>
            <div className='flex flex-wrap justify-center items-center gap-x-3 gap-y-6 '>
                {(ARTICLES ?? []).map(({ id, ...rest }) => (
                    <Fragment key={id}>
                        <Card cardFor='articles' {...rest} />
                    </Fragment>
                ))}
            </div>
        </section>
    );
};

export default Artical;
