import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './swiper.css';
import 'swiper/css/pagination';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveSlider } from '../../features/carousel/carouselSlice';

const Carousel = () => {
    // local states
    const [sliderIndex, setSliderIndex] = useState(0);

    // get slider state
    const { slider } = useSelector((state) => state.carousel);

    // get dispatch
    const dispatch = useDispatch();

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
            className="h-[62vh] w-full absolute -right-[50%]"
        >
            {slider.map((slide) => {
                return (
                    <SwiperSlide
                        key={slide.id}
                        style={{ backgroundImage: `url(${slide.img})` }}
                        className={`flex items-end justify-start px-7 py-8 rounded-lg bg-cover bg-center transition-all duration-300 cursor-pointer ${
                            sliderIndex === slide.id
                                ? 'h-[60vh] ring-offset-2 ring ring-inset ring-white'
                                : 'h-[55vh]'
                        }`}
                    >
                        <h3 className="text-white text-2xl font-extrabold">
                            {slide.place}
                        </h3>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default Carousel;
