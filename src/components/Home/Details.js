import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Details = () => {
    // get active carousel id from state
    const { activeSlider } = useSelector((state) => state.carousel);

    // get carousel details form state
    const { place, details } = useSelector((state) =>
        state.carousel.slider.find((slide) => slide.id === activeSlider)
    );

    return (
        <div className="xl:mr-14 lg:mr-10 md:mr-10 xl:flex lg:flex md:flex sm:hidden hidden flex-col items-start justify-evenly h-[60vh] lg:pl-0 md:pl-3 py-14">
            <div>
                <h2 className="text-white lg:text-4xl md:text-3xl font-extrabold mb-4">
                    {place}
                </h2>
                <p className="text-white lg:text-base md:text-sm">{details.substring(0, 200)} ...</p>
            </div>

            <Link to={`/booking/${activeSlider}`}>
                <button className="bg-[#2977c4] text-white py-2 px-7 xl:text-base lg:text-base md:text-sm rounded-md font-medium text-base transition-all duration-300 hover:bg-[#3498db]">
                    Book Now
                </button>
            </Link>
        </div>
    );
};

export default Details;
