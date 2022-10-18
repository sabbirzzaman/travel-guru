import React from 'react';
import image from '../../images/img-1.jpg';
import Header from '../common/Header';

const Home = () => {
    return (
        <div
            style={{ backgroundImage: `url(${image})` }}
            className={`h-screen w-full bg-cover bg-center`}
        >
            <div className="bg-black/50 h-screen">
                <div className="max-w-6xl mx-auto">
                    <Header />
                </div>
            </div>
        </div>
    );
};

export default Home;
