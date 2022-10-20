import React from 'react';
import './Loader.css';

const Loader = () => {
    return (
        <div className='h-screen bg-blue-100'>
            <div className="loader">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        </div>
    );
};

export default Loader;
