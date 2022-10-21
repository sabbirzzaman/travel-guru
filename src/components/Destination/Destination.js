import React from 'react';
import img from '../../images/login-bg.jpg';
import Header from '../common/Header';
import Hotels from './Hotels';
import Map from './Map';

const Destination = () => {
    // get booking info from local storage
    const booking = localStorage.getItem('booking');
    const bookingObj = JSON.parse(booking);

    return (
        <div
            style={{ backgroundImage: `url(${img})` }}
            className={`h-screen relative flex flex-col justify-center w-full transition-all duration-500 bg-cover bg-center`}
        >
            <div className="relative bg-slate-900/70 h-screen overflow-hidden">
                <div className="xl:max-w-6xl lg:max-w-5xl md:max-w-4xl sm:max-w-xl max-w-xs mx-auto md:px-10 px-3">
                    <Header />

                    <div className="grid lg:grid-cols-5 md:grid-cols-6 md:gap-8 gap-5 py-14 items-start">
                        <div className="lg:col-span-2 md:col-span-3 sm:col-span-6 md:order-1 order-2">
                            <Hotels booking={bookingObj} />
                        </div>
                        <div className="lg:col-span-3 md:col-span-3 sm:col-span-6 md:order-1 order-1">
                            <Map />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;
