import React from 'react';
interface IProps {
    name?: string;
    icon?: React.ReactNode;
    screenName?: string;
    screenCount?: number;
}
const SidebarMenu: React.FC<IProps> = ({
    name,
    icon,
    screenName,
    screenCount
}) => {
    return (
        <>
            {name ? (
                <li className='flex items-center gap-2 px-4 py-2.5 fill-gray-500 text-gray-500 hover:fill-gray-900 hover:text-gray-900 hover:bg-gray-300  transition duration-300 capitalize cursor-pointer 2xl:text-2xl'>
                    {icon}
                    <p className='whitespace-nowrap'>{name}</p>
                </li>
            ) : (
                <li className='flex items-center justify-between gap-2 px-4 py-2  text-gray-500 hover:text-gray-900 hover:bg-gray-300 transition duration-300 cursor-pointer 2xl:text-2xl'>
                    <p className='whitespace-nowrap'>{screenName}</p>
                    <p>{screenCount}</p>
                </li>
            )}
        </>
    );
};

export default SidebarMenu;
