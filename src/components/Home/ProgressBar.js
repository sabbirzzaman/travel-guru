import React from 'react';
import { useSelector } from 'react-redux';

const ProgressBar = ({activeSlider}) => {
    const { slider } = useSelector((state) => state.carousel);

    return (
        <div className="absolute flex flex-col justify-evenly items-center w-[2px] rounded-lg h-[80vh] bg-white/30 z-10 left-10">
            {[...Array(slider.length).keys()].map((slide) => (
                <div
                    className={`bg-white/30 backdrop-blur-lg flex justify-center items-center text-white transition-all duration-500 font-bold rounded-full ${slide === activeSlider ? 'w-8 h-8' : 'w-3 h-3'}`}
                >
                    {slide === activeSlider && slide + 1}
                </div>
            ))}
        </div>
    );
};

export default ProgressBar;
