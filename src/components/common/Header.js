import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div className="h-20 flex items-center justify-between">
            <Link to={'/'}>
                <img
                    className="cursor-pointer"
                    src={logo}
                    width="100px"
                    alt="site logo"
                />
            </Link>

            <div className="flex items-center gap-10">
                <nav className="flex gap gap-10">
                    <Link
                        to="/destination"
                        className="text-white cursor-pointer transition-all duration-300 font-medium hover:text-blue-400"
                    >
                        Destination
                    </Link>
                    <Link
                        to="/"
                        className="text-white cursor-pointer transition-all duration-300 font-medium hover:text-blue-400"
                    >
                        Blog
                    </Link>
                    <Link
                        to="/"
                        className="text-white cursor-pointer transition-all duration-300 font-medium hover:text-blue-400"
                    >
                        Contact
                    </Link>
                </nav>

                <Link to={'/login'}>
                    <button className="bg-[#2977c4] text-white py-1 px-7 rounded-md font-medium text-base transition-all duration-300 hover:bg-[#3498db]">
                        Login
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Header;
