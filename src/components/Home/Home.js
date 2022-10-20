import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../common/Header';
import Carousel from './Carousel';
import Details from './Details';
import ProgressBar from './ProgressBar';

const Home = () => {
    // get active slider from state
    const { activeSlider } = useSelector((state) => state.carousel);

    // get image form state
    const { img } = useSelector((state) =>
        state.carousel.slider.find((slide) => slide.id === activeSlider)
    );

    return (
        <div
            style={{ backgroundImage: `url(${img})` }}
            className={`h-screen relative flex flex-col items-center justify-center w-full transition-all duration-500 bg-cover bg-center`}
        >
            <ProgressBar activeSlider={activeSlider} />
            <div className="relative bg-slate-900/40 w-full h-screen overflow-hidden">
                <div className="xl:max-w-6xl lg:max-w-5xl md:max-w-4xl mx-auto px-10">
                    <Header />

                    <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 py-14">
                        <Details />
                        <Carousel />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
