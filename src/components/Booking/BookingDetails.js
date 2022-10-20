import React from 'react';

const BookingDetails = ({place, details}) => {
    return (
        <div className="xl:mr-14 md:mr-10 md:flex flex-col block md:max-w-lg max-w-sm md:mx-0 mx-auto items-start justify-evenly md:h-[60vh] h-auto md:py-14 py-8 md:text-left text-center">
            <div>
                <h2 className="text-white md:text-4xl sm:text-3xl text-3xl font-extrabold md:mb-4 mb-2">
                    {place}
                </h2>
                <p className="text-white md:text-base text-sm">{details}</p>
            </div>
        </div>
    );
};

export default BookingDetails;
