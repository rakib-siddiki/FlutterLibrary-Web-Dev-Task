import React from 'react';
import { Artical, Hero, Templete } from '.';

const HomeWrapper = () => {
    return (
        <div className='max-sm:px-4 pr-4 space-y-10'>
            <Hero />
            <Templete />
            <Artical />
        </div>
    );
};

export default HomeWrapper;
