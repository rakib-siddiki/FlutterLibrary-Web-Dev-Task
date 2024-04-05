import Logo from '@/components/Logo';
import React from 'react';
import SidebarMenu from './SidebarMenu';
import { SIDEBAR_MENU, ALL_SCREENS } from '@/static';

const Sidebar = () => {
    return (
        <>
            <div className='pt-4 pb-5 2xl:text-center'>
                <Logo />
                <ul className='space-y-2 mb-5'>
                    {(SIDEBAR_MENU ?? []).map(({ id, name, icon }) => (
                        <SidebarMenu key={id} name={name} icon={icon} />
                    ))}
                </ul>
                <ul className='space-y-2'>
                    <li className='px-4 text-gray-900 dark:text-gray-300 2xl:text-3xl'>
                        All Screens
                    </li>
                    {(ALL_SCREENS ?? []).map(
                        ({ id, screenName, screenCount }) => (
                            <SidebarMenu
                                key={id}
                                screenName={screenName}
                                screenCount={screenCount}
                            />
                        )
                    )}
                </ul>
            </div>
        </>
    );
};

export default Sidebar;
