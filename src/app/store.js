import { configureStore } from '@reduxjs/toolkit';
import carouselReducer from '../features/carousel/carouselSlice';
import hotelReducer from '../features/hotel/hotelSlice';

export const store = configureStore({
    reducer: {
        carousel: carouselReducer,
        hotels: hotelReducer,
    }
});
