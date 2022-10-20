import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from '../common/Header';
import BookingDetails from './BookingDetails';
import BookingForm from './BookingForm';

const Booking = () => {
    // get id from parameter
    const { id } = useParams();

    // get carousel info from state
    const { img, place, details } = useSelector((state) =>
        state.carousel.slider.find((slide) => slide.id === Number(id))
    );

    return (
        <div
            style={{ backgroundImage: `url(${img})` }}
            className={`h-screen relative flex flex-col justify-center w-full transition-all duration-500 bg-cover bg-center`}
        >
            <div className="relative bg-slate-900/40 h-screen overflow-hidden">
                <div className="xl:max-w-6xl lg:max-w-5xl md:max-w-4xl mx-auto px-3">
                    <Header />

                    <div className="grid md:grid-cols-2 grid-cols-1 md:py-14 py-1  items-center">
                        <BookingDetails place={place} details={details} />
                        <BookingForm place={place} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
