import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './swiper.css';
import 'swiper/css/pagination';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveSlider } from '../../features/carousel/carouselSlice';
import { Link } from 'react-router-dom';

const Carousel = () => {
    // local states
    const [sliderIndex, setSliderIndex] = useState(0);

    // get slider state
    const { slider } = useSelector((state) => state.carousel);

    // get dispatch
    const dispatch = useDispatch();

    // current carousel
    const currentCarousel = slider.find((slide) => slide.id === sliderIndex);

    // set active carousel id to state
    useEffect(() => {
        dispatch(setActiveSlider(sliderIndex));
    }, [sliderIndex, dispatch]);

    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={30}
            loop={true}
            onSlideChange={(swiper) => setSliderIndex(swiper.realIndex)}
            width={1300}
            className="h-[62vh] w-full absolute xl:-right-[50%] lg:-right-[50%] md:-right-[50%] -right-[10%]"
        >
            {slider.map((slide) => {
                return (
                    <SwiperSlide
                        key={slide.id}
                        style={{ backgroundImage: `url(${slide.img})` }}
                        className={`bg-cover bg-center rounded-lg transition-all duration-300 ${
                            sliderIndex === slide.id
                                ? 'h-[60vh] ring-offset-2 ring ring-inset ring-white'
                                : 'h-[55vh]'
                        }`}
                    >
                        <div
                            className={`flex md:items-end md:flex-row md:justify-start flex-col justify-between items-start px-7 py-8 rounded-lg transition-all duration-300 cursor-pointer h-full w-full bg-gradient-to-b from-transparent to-black/60 ${
                                sliderIndex === slide.id
                                    ? 'h-[60vh] ring-offset-2 ring ring-inset ring-white'
                                    : 'h-[55vh]'
                            }`}
                        >
                            <h3 className="text-white text-2xl font-extrabold">
                                {slide.place}
                            </h3>
                            <div>
                                <p
                                    className={`md:hidden text-white text-base transition-all duration-300] ${
                                        currentCarousel.id === slide.id
                                            ? 'scale-100'
                                            : 'scale-0'
                                    }`}
                                >
                                    {currentCarousel.details.substring(0, 40)}
                                    ...
                                </p>
                                <Link to={`/booking/${slide.id}`}>
                                    <button
                                        className={`md:hidden mt-6 bg-[#fff] py-2 w-full xl:text-base lg:text-base md:text-sm rounded-md font-medium text-base transition-all duration-300 ${
                                            currentCarousel.id === slide.id
                                                ? 'scale-100'
                                                : 'scale-0'
                                        }`}
                                    >
                                        Book Now
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default Carousel;
