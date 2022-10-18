import React from 'react';
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div className='h-20 flex items-center justify-between'>
            <img src={logo} width="100px" alt="site logo" />

            <div className='flex items-center gap-10'>
            <nav className='flex gap gap-10'>
                <span className='text-white cursor-pointer transition-all duration-300 font-medium hover:text-[#F9A51A]'>News</span>
                <span className='text-white cursor-pointer transition-all duration-300 font-medium hover:text-[#F9A51A]'>Destination</span>
                <span className='text-white cursor-pointer transition-all duration-300 font-medium hover:text-[#F9A51A]'>Blog</span>
                <span className='text-white cursor-pointer transition-all duration-300 font-medium hover:text-[#F9A51A]'>Contact</span>
            </nav>

            <button className='bg-[#F9A51A] py-3 px-7 rounded-md text-base transition-all duration-300 hover:bg-[#f19a09]'>Login</button>
            </div>
        </div>
    );
};

export default Header;
