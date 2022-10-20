import React from 'react';
import { useSelector } from 'react-redux';

const ProgressBar = ({ activeSlider }) => {
    // get carousel from state
    const { slider } = useSelector((state) => state.carousel);

    return (
        <div className="absolute flex md:flex-col flex-row justify-evenly items-center md:w-[2px] rounded-lg lg:h-[70vh] md:h-[60vh] h-[2px] w-[70%] bg-white/30 z-10 xl:left-10 lg:left-8 md:left-8 bottom-10 md:bottom-[inherit]">
            {[...Array(slider.length).keys()].map((slide, i) => (
                <div
                    key={i}
                    className={`bg-white/30 backdrop-blur-lg flex justify-center items-center text-white transition-all duration-500 font-bold rounded-full ${
                        slide === activeSlider ? 'lg:w-8 lg:h-8 w-6 h-6' : 'w-3 h-3'
                    }`}
                >
                    {slide === activeSlider && slide + 1}
                </div>
            ))}
        </div>
    );
};

export default ProgressBar;
