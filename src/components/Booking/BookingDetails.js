import React from 'react';

const BookingDetails = ({place, details}) => {
    return (
        <div className="mr-14 flex flex-col items-start justify-evenly h-[60vh] py-14">
            <div>
                <h2 className="text-white text-4xl font-extrabold mb-4">
                    {place}
                </h2>
                <p className="text-white">{details}</p>
            </div>
        </div>
    );
};

export default BookingDetails;
