import React from 'react';
import { Link } from 'react-router-dom';
import loginBg from '../../images/login-bg.jpg';
import Header from '../common/Header';

const Login = () => {
    return (
        <div
            className="h-screen w-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${loginBg})` }}
        >
            <div className="h-screen w-full bg-slate-900/60">
                <div className="max-w-6xl mx-auto">
                    <Header />

                    <div className="h-[calc(95vh-80px)] flex justify-center items-center">
                        <div className="max-w-2xl mx-auto p-10 rounded-lg backdrop-blur-sm bg-slate-900/40">
                            <h2 className="text-3xl mb-8 font-extrabold text-white">
                                Login your account!
                            </h2>
                            <form>
                                <div className="mb-5">
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        className="relative w-full p-1 bg-transparent outline-none text-white transition-all duration-500 border-b-gray-400 border-b focus:border-b-blue-400 focus:border-b"
                                    />
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="password"
                                        placeholder="Enter your password"
                                        className="relative w-full p-1 bg-transparent outline-none text-white transition-all duration-500 border-b-gray-400 border-b focus:border-b-blue-400 focus:border-b"
                                    />
                                </div>

                                <div className="mb-7 text-sm text-right transition-all duration-300 text-white hover:text-blue-300">
                                    <Link to="/">Forget Password?</Link>
                                </div>

                                <button
                                    type="submit"
                                    className="bg-[#2977c4] text-white py-1 px-7 w-full rounded-md font-medium text-base transition-all duration-300 hover:bg-[#3498db]"
                                >
                                    Login
                                </button>
                            </form>

                            <div className='text-white mt-5 text-center transition-all duration-300 hover:text-blue-300'>
                                <Link to="/signup">Don't have an account?</Link>
                            </div>

                            <div className="relative flex py-5 items-center">
                                <div className="flex-grow border-t border-gray-400"></div>
                                <span className="flex-shrink mx-4 text-gray-400">
                                    OR
                                </span>
                                <div className="flex-grow border-t border-gray-400"></div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <button className="bg-[#2977c4] text-white py-1 px-7 w-full rounded-md font-medium text-base transition-all duration-300 hover:bg-[#3498db]">
                                    Facebook
                                </button>
                                <button className="bg-[#2977c4] text-white py-1 px-7 w-full rounded-md font-medium text-base transition-all duration-300 hover:bg-[#3498db]">
                                    Google
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
