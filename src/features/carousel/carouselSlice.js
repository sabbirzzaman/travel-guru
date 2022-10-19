import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    slider: [
        {
            id: 0,
            img: 'https://i.ibb.co/9YnR2ZV/img-1.jpg',
            place: 'Sundarban',
            details:
                "Sundarbans is a mangrove area in the delta formed by the confluence of the Padma, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans the area from the Baleswar River in Bangladesh's division of Khulna to the Hooghly River in India's state of West Bengal.",
        },
        {
            id: 1,
            img: 'https://i.ibb.co/Jn2pS45/img-2.jpg',
            place: "Cox's Bazar",
            details:
                'Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.',
        },
        {
            id: 2,
            img: 'https://i.ibb.co/zX8Y2vN/img-3.jpg',
            place: 'Sajek Valley',
            details:
                'Sajek Tripuri Valley is one of the most popular tourist spots in Bangladesh situated among the hills of the Kasalong range of mountains in Sajek union, Baghaichhari Upazila in Rangamati District. The valley is 2,000 feet above sea level. Sajek Tripuri Valley is known as the Queen of Hills & Roof of Rangamati.',
        },
        {
            id: 3,
            img: 'https://i.ibb.co/2Pr136D/img-4.jpg',
            place: 'Bandarban',
            details:
                'Bandarban town is the hometown of the Bohmong Chief. Tripadvisor has 621 reviews of Bandarban Hotels, Attractions, and Restaurants making it your best Bandarban resource. Bandarban is regarded as one of the most attractive travel destinations in Bangladesh. It also is the administrative headquarters of Bandarban district, which has turned into one of the most exotic tourist attractions in Bangladesh.',
        },
    ],
    activeSlider: 0,
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
