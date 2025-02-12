import Spinner from '@/components/ui/Spinner';
import React from 'react';

const loading = () => {
    return (
        <div className='mx-auto w-full'>
            <Spinner/>
        </div>
    );
};

export default loading;