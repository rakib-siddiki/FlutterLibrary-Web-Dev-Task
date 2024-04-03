'use client';
import { cn } from '@/utils';
import { ChangeEvent, InputHTMLAttributes } from 'react';

interface ISearchInput extends InputHTMLAttributes<HTMLInputElement> {
    onChange?: (e: ChangeEvent) => void;
    placeholder?: string;
    inputStyle?: string;
}
const SearchInput = ({
    onChange,
    placeholder,
    inputStyle,
    className
}: ISearchInput) => {
    return (
        <div className={cn('w-full', className)}>
            <label htmlFor='search' className='sr-only'>
                Search projects
            </label>
            <div className='relative text-gray-700 focus-within:text-gray-400'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <svg
                        width='16'
                        height='18'
                        viewBox='0 0 16 18'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M7.99999 1.91663C4.63135 1.91663 1.90054 4.64743 1.90054 8.01604C1.90054 11.3847 4.63135 14.1155 7.99999 14.1155C11.3686 14.1155 14.0994 11.3847 14.0994 8.01604C14.0994 4.64743 11.3686 1.91663 7.99999 1.91663ZM0.650543 8.01604C0.650543 3.95708 3.94099 0.666626 7.99999 0.666626C12.0589 0.666626 15.3494 3.95708 15.3494 8.01604C15.3494 10.2551 14.3481 12.2604 12.7687 13.6084L14.8932 16.323C15.106 16.5949 15.0581 16.9877 14.7862 17.2004C14.5144 17.4131 14.1216 17.3652 13.9089 17.0934L11.7517 14.337C10.6535 14.9903 9.37058 15.3655 7.99999 15.3655C3.94099 15.3655 0.650543 12.075 0.650543 8.01604Z'
                            fill='#111111'
                        />
                    </svg>
                </div>
                <input
                    onChange={onChange}
                    id='search'
                    className={cn(
                        'block w-full pl-10 pr-3 py-2.5 outline-none rounded-full leading-5 bg-gray-300 text-gray-600 sm:text-sm transition duration-150 ease-in-out focus:ring-1 focus:ring-gray-500 focus:bg-gray-50 dark:bg-gray-100/90 dark:focus:ring-gray-100 dark:focus:bg-gray-50',
                        inputStyle
                    )}
                    placeholder={placeholder || 'Search....'}
                    type='search'
                />
            </div>
        </div>
    );
};

export default SearchInput;
