import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Details = () => {
    const { activeSlider } = useSelector((state) => state.carousel);
    const { place, details } = useSelector((state) =>
        state.carousel.slider.find((slide) => slide.id === activeSlider)
    );

    return (
        <div className="mr-14 flex flex-col items-start justify-evenly h-[60vh] py-14">
            <div>
                <h2 className="text-white text-4xl font-extrabold mb-4">
                    {place}
                </h2>
                <p className="text-white">{details.substring(0, 200)} ...</p>
            </div>

            <Link to={`/booking/${activeSlider}`}>
                <button className="bg-[#2977c4] text-white py-2 px-7 rounded-md font-medium text-base transition-all duration-300 hover:bg-[#3498db]">
                    Book Now
                </button>
            </Link>
        </div>
    );
};

export default Details;
