import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    slider: [
        {
            id: 0,
            img: 'https://i.ibb.co/9YnR2ZV/img-1.jpg',
            place: 'Sundarban',
        },
        {
            id: 1,
            img: 'https://i.ibb.co/Jn2pS45/img-2.jpg',
            place: "Cox's Bazar",
        },
        {
            id: 2,
            img: 'https://i.ibb.co/zX8Y2vN/img-3.jpg',
            place: 'Sajek Valley',
        },
        {
            id: 3,
            img: 'https://i.ibb.co/2Pr136D/img-4.jpg',
            place: 'Bandarban',
        },
    ],
    activeSlider: 0
};

const carouselSlice = createSlice({
    name: 'carousel',
    initialState,
    reducers: {
        setActiveSlider: (state, action) => {
            state.activeSlider = action.payload;
        },
    },
});

export default carouselSlice.reducer;
export const { setActiveSlider } = carouselSlice.actions;
