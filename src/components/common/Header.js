import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div className='h-20 flex items-center justify-between'>
            <img className='cursor-pointer' src={logo} width="100px" alt="site logo" />

            <div className='flex items-center gap-10'>
                <nav className='flex gap gap-10'>
                    <Link to='/' className='text-white cursor-pointer transition-all duration-300 font-medium hover:text-[#3498db]'>News</Link>
                    <Link to='/' className='text-white cursor-pointer transition-all duration-300 font-medium hover:text-[#3498db]'>Destination</Link>
                    <Link to='/' className='text-white cursor-pointer transition-all duration-300 font-medium hover:text-[#3498db]'>Blog</Link>
                    <Link to='/' className='text-white cursor-pointer transition-all duration-300 font-medium hover:text-[#3498db]'>Contact</Link>
                </nav>

                <Link>
                    <button className='bg-[#2977c4] text-white py-2 px-7 rounded-md font-medium text-base transition-all duration-300 hover:bg-[#3498db]'>Login</button>
                </Link>
            </div>
        </div>
    );
};

export default Header;
