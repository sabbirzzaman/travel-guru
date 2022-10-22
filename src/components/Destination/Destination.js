import React from 'react';
import { Link } from 'react-router-dom';
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

                    {bookingObj ? (
                        <div className="grid lg:grid-cols-5 md:grid-cols-6 md:gap-8 gap-5 py-14 items-start">
                            <div className="lg:col-span-2 md:col-span-3 sm:col-span-6 md:order-1 order-2">
                                <Hotels booking={bookingObj} />
                            </div>
                            <div className="lg:col-span-3 md:col-span-3 sm:col-span-6 md:order-1 order-1">
                                <Map />
                            </div>
                        </div>
                    ) : (
                        <div className="text-white py-14 flex flex-col justify-center items-center text-center h-[calc(90vh-80px)]">
                            <p className='mb-5 text-xl font-bold'>You don't have any booking destination</p>
                            <Link to={`/`}>
                                <button className="bg-[#2977c4] text-white py-2 px-7 xl:text-base lg:text-base md:text-sm rounded-md font-medium text-base transition-all duration-300 hover:bg-[#3498db]">
                                    Book a destination
                                </button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Destination;
