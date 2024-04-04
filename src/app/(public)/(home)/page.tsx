import { TheHeader } from '../components';
import { HomeWrapper, Sidebar } from './components';

const HomePage = () => {
    return (
        <div className='flex gap-4'>
            <div className='hidden sm:block w-52 bg-white border-r border-gray-300 dark:border-gray-50/25 dark:bg-gray-700 overflow-y-auto no-scrollbar'>
                <Sidebar />
            </div>
            <div className='w-full h-full'>
                <TheHeader />
                <div>
                    <HomeWrapper />
                </div>
                {/* <TheFooter /> */}
            </div>
        </div>
    );
};

export default HomePage;
