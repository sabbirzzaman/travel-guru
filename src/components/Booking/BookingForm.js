import React from 'react';

const BookingForm = ({ place }) => {
    return (
        <div className="w-96 ml-auto py-10 px-8 rounded-lg backdrop-blur-sm bg-blue-100/40">
            <form>
                <div className="mb-5">
                    <label
                        htmlFor="location"
                        className="block mb-1 text-white font-medium"
                    >
                        Current location
                    </label>
                    <input
                        type="text"
                        placeholder="Your location"
                        id="location"
                        className="relative w-full p-2 rounded bg-white text-black outline-none transition-all duration-500"
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="destination"
                        className="block mb-1 text-white font-medium"
                    >
                        Your destination
                    </label>
                    <input
                        type="text"
                        placeholder="Your destination"
                        value={place}
                        disabled
                        id="destination"
                        className="relative w-full p-2 rounded bg-white text-black outline-none transition-all duration-500"
                    />
                </div>

                <div className="mb-5 grid grid-cols-2 gap-3">
                    <div>
                        <label
                            htmlFor="from"
                            className="block mb-1 text-white font-medium"
                        >
                            From
                        </label>
                        <div className='relative'>
                            <input
                                type="text"
                                id="from"
                                placeholder='Select'
                                className="relative w-full p-2 rounded bg-white text-black outline-none transition-all duration-500"
                            />
                            <svg
                                className="absolute w-4 right-2 bottom-[30%] opacity-70"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                            >
                                <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="to"
                            className="block mb-1 text-white font-medium"
                        >
                            To
                        </label>
                        <input
                            type="text"
                            id="to"
                            placeholder='Select'
                            className="relative w-full p-2 rounded bg-white text-black outline-none transition-all duration-500"
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
