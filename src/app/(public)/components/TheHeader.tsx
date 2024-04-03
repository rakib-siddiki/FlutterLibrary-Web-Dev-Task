import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { Button, SearchInput } from '@/components/core';

const TheHeader = () => {
    return (
        <header className='my-4 max-sm:px-4'>
            <nav className='max-md:space-y-4 md:flex items-center justify-between'>
                <SearchInput className='max-w-sm ' />
                <div className='flex items-center max-md:justify-center gap-3 pr-4'>
                    <ThemeSwitcher />
                    <Button color='white'>Login</Button>
                    <Button color='white'>Get Pro</Button>
                </div>
            </nav>
        </header>
    );
};

export default TheHeader;
