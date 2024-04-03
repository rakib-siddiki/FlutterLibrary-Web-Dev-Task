import { TheFooter, TheHeader } from '../components';
import { HomeWrapper, Sidebar } from './components';

const HomePage = () => {
    return (
        <div className='flex gap-4'>
            <div className='hidden sm:block w-52 bg-white border-r border-gray-300 dark:bg-gray-700 '>
                <Sidebar />
            </div>
            <div className='w-full h-full'>
                <TheHeader />
                <div className='grid grid-cols-12 max-sm:px-4'>
                    <HomeWrapper />
                </div>
                <TheFooter />
            </div>
        </div>
    );
};

export default HomePage;
