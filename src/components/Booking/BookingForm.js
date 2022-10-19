import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';

const BookingForm = ({ place }) => {
    const [location, setLocation] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const navigate = useNavigate();

    const handleOnSubmit = (e) => {
        e.preventDefault();

        const booking = {
            location,
            destination: place,
            startDate,
            endDate,
        };

        localStorage.setItem('booking', JSON.stringify(booking));

        navigate('/destination');
    };

    return (
        <div className="w-96 ml-auto py-10 px-8 rounded-lg backdrop-blur-sm bg-blue-100/40">
            <form onSubmit={handleOnSubmit}>
                <div className="mb-5">
                    <label
                        htmlFor="location"
                        className="block mb-2 text-white font-medium"
                    >
                        Current location
                    </label>
                    <input
                        type="text"
                        placeholder="Your location"
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full py-2 px-3 rounded bg-white text-black outline-none border border-transparent transition-all duration-500 focus:border-[#2977c4] focus:border"
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="destination"
                        className="block mb-2 text-white font-medium"
                    >
                        Your destination
                    </label>
                    <input
                        type="text"
                        placeholder="Your destination"
                        value={place}
                        disabled
                        id="destination"
                        className="w-full py-2 px-3 rounded bg-white text-black outline-none border border-transparent transition-all duration-500 focus:border-[#2977c4] focus:border"
                    />
                </div>

                <div className="mb-5 grid grid-cols-2 gap-3">
                    <div>
                        <label
                            htmlFor="from"
                            className="block mb-2 text-white font-medium"
                        >
                            From
                        </label>
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            minDate={new Date()}
                            dateFormat="MMM d, yyyy"
                            className="w-full py-2 px-3 rounded bg-white text-black outline-none border border-transparent transition-all duration-500 focus:border-[#2977c4] focus:border"
                            id="from"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="to"
                            className="block mb-2 text-white font-medium"
                        >
                            To
                        </label>
                        <DatePicker
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            minDate={startDate}
                            dateFormat="MMM d, yyyy"
                            className="w-full py-2 px-3 rounded bg-white text-black outline-none border border-transparent transition-all duration-500 focus:border-[#2977c4] focus:border"
                            id="to"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="bg-[#2977c4] text-white py-2 w-full rounded-md font-medium text-base transition-all duration-300 hover:bg-[#3498db]"
                >
                    Start Booking
                </button>
            </form>
        </div>
    );
};

export default BookingForm;
