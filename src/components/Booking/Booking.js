import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from '../common/Header';
import BookingDetails from './BookingDetails';
import BookingForm from './BookingForm';

const Booking = () => {
    const { id } = useParams();

    const { img, place, details } = useSelector((state) =>
        state.carousel.slider.find((slide) => slide.id === Number(id))
    );

    return (
        <div
            style={{ backgroundImage: `url(${img})` }}
            className={`h-screen relative flex flex-col justify-center w-full transition-all duration-500 bg-cover bg-center`}
        >
            <div className="relative bg-slate-900/40 h-screen overflow-hidden">
                <div className="max-w-6xl mx-auto">
                    <Header />

                    <div className="grid grid-cols-2 py-14 items-center">
                        <BookingDetails place={place} details={details} />
                        <BookingForm place={place} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
