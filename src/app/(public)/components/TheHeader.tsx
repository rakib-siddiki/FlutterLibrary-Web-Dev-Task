import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { Button, SearchInput } from '@/components/core';

const TheHeader = () => {
    return (
        <header className='my-4 max-sm:px-4'>
            <nav className='max-md:space-y-4 md:flex items-center justify-between gap-4'>
                <SearchInput className='max-w-sm max-md:mx-auto hidden md:block' />
                <div className='flex items-center max-md:justify-center gap-3 pr-4'>
                    <SearchInput className='max-w-sm max-md:mx-auto md:hidden' />
                    <ThemeSwitcher className='hidden md:block' />
                    <Button color='white' className=''>
                        Login
                    </Button>
                    <Button color='white' className=''>
                        Get Pro
                    </Button>
                    <ThemeSwitcher className='md:hidden' />
                </div>
            </nav>
        </header>
    );
};

export default TheHeader;
