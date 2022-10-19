import React from 'react';
import { format } from 'date-fns';

const Hotels = ({ booking }) => {
    const { destination, startDate, endDate } = booking;
    return (
        <div className="bg-white px-5 py-4 rounded-lg shadow-lg">
            <h3 className='text-2xl font-bold mb-2'>Stay in {destination}</h3>
            <p>
                From {format(new Date(startDate), 'dd MMM')} to{' '}
                {format(new Date(endDate), 'dd MMM')}
            </p>
        </div>
    );
};

export default Hotels;
