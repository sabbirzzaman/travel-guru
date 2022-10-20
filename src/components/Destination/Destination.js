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
                <div className="max-w-6xl mx-auto">
                    <Header />

                    <div className="grid grid-cols-5 gap-8 py-14 items-start">
                        <div className="col-span-2">
                            <Hotels booking={bookingObj} />
                        </div>
                        <div className="col-span-3">
                            <Map />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;
