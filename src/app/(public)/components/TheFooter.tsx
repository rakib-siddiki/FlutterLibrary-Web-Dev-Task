import { Icons } from '@/components/Icons';
import Logo from '@/components/Logo';
import { FOOTERLIST } from '@/static';
const { explore, support } = FOOTERLIST;
const TheFooter = () => {
    return (
        <>
            <div className='sm:flex justify-between gap-5 mt-10 pb-9 px-4 border-b border-b-gray-50 dark:border-b-gray-50/20'>
                <div>
                    <Logo className='-ml-4 -mt-2.5' />
                    <p className='text-xs text-gray-500 max-w-md mb-4'>
                        Beautifully designed, expertly crafted Flutter
                        components and templates, to jumpstart your projects and
                        speed up your development process.
                    </p>
                    <div className='flex items-center gap-4 max-sm:mb-5'>
                        <span className='bg-gray-900 rounded-full size-8 flex items-center justify-center'>
                            <Icons.Twitter_X className='fill-white' />
                        </span>
                        <span className='bg-gray-900 rounded-full size-8 flex items-center justify-center '>
                            <Icons.Linkedin className='fill-white' />
                        </span>
                        <span className='bg-gray-900 rounded-full size-8 flex items-center justify-center  '>
                            <Icons.Instagram className='fill-white' />
                        </span>
                        <span className='bg-gray-900 rounded-full size-8 flex items-center justify-center '>
                            <Icons.Facebook className='fill-white' />
                        </span>
                    </div>
                </div>
                <div className='flex gap-x-10'>
                    <ul className='space-y-2'>
                        <li className='font-semibold'>Explore</li>
                        {(explore ?? []).map(({ id, name }) => (
                            <li
                                className='text-sm text-gray-600 dark:text-gray-500 whitespace-nowrap'
                                key={id}
                            >
                                {name}
                            </li>
                        ))}
                    </ul>
                    <ul className='space-y-2'>
                        <li className='font-semibold'>Support</li>
                        {(support ?? []).map(({ id, name }) => (
                            <li
                                className='text-sm text-gray-600 dark:text-gray-500 whitespace-nowrap'
                                key={id}
                            >
                                {name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='flex items-center justify-between text-xs sm:text-sm text-gray-500 p-4'>
                <p>Copyright 2024 TheFlutterLibrary. All rights reserved.</p>
                <p>Privacy Policy | Terms & Conditions | Cookie Policy</p>
            </div>
        </>
    );
};

export default TheFooter;
