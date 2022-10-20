import React from 'react';
import { format } from 'date-fns';
import { useSelector } from 'react-redux';

const Hotels = ({ booking }) => {
    const { destination, startDate, endDate } = booking;

    const hotels = useSelector((state) =>
        state.hotels.filter((hotel) => hotel.location === destination)
    );

    return (
        <>
            <div className="bg-white px-5 py-4 rounded-lg shadow-lg md:mb-8 mb-5">
                <h3 className="text-2xl font-bold mb-2">
                    Stay in {destination}
                </h3>
                <p>
                    From {format(new Date(startDate), 'dd MMM')} to{' '}
                    {format(new Date(endDate), 'dd MMM')}
                </p>
            </div>

            <div className='h-[410px] overflow-x-auto scrollbar-thin scrollbar-thumb-white scrollbar-thumb-rounded pr-3 scrollbar-track-transparent'>
                {hotels.map((hotel, i) => {
                    const {
                        image,
                        hotelName,
                        hotelFeature,
                        bedrooms,
                        beds,
                        baths,
                        rating,
                        price,
                    } = hotel;

                    return (
                        <div key={i} className="bg-white grid grid-cols-5 gap-3 px-5 py-4 rounded-lg shadow-lg mb-4">
                            <img
                                className="col-span-2 rounded-md"
                                src={image}
                                alt={hotelName}
                            />

                            <div className="col-span-3">
                                <p className="font-bold mb-3">{hotelName}</p>

                                <div className="text-sm flex gap-2 justify-between mb-2">
                                    <span>{bedrooms} Bedrooms</span>
                                    <span>{beds} Beds</span>
                                    <span>{baths} Baths</span>
                                </div>

                                <div className="mb-2">
                                    {hotelFeature.map((feature, i) => (
                                        <p
                                            key={i}
                                            className="text-sm flex flex-col gap-1 "
                                        >
                                            {feature}
                                        </p>
                                    ))}
                                </div>

                                <div className='flex gap-5'>
                                    <span>{rating}</span>
                                    <span><span className='font-bold'>{price}/</span>night</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Hotels;
