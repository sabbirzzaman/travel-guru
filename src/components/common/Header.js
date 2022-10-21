import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);

    const { displayName, email } = user || {};

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

            <div className="z-[999] relative inline-block dropdown">
                <span className="rounded-md">
                    <button
                        className="inline-flex px-3 py-1 bg-blue-50/10 hover:bg-blue-100/50 transition-all duration-300 ease-in-out rounded-md items-center gap-3"
                        type="button"
                    >
                        <span className="font-bold text-white">
                            Hi, {user ? displayName : 'Guest'}
                        </span>
                        <div className={`w-8 h-8 flex items-center font-bold justify-center bg-blue-500 text-white rounded-full`}>
                            {user ? displayName?.toUpperCase()?.substring(0, 1) : 'G'}
                        </div>
                    </button>
                </span>

                <div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                    <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md">
                        <div className="px-4 py-3">
                            <p className="text-sm">Signed in as</p>
                            <p className="text-sm font-medium text-gray-900">
                                {user ? email : 'Guest user'}
                            </p>
                        </div>
                        {user ? (
                            <>
                                <Link
                                    to="/destination"
                                    className="text-gray-700 flex w-full px-4 py-3 text-sm rounded-md transition-all duration-300 hover:bg-gray-100"
                                >
                                    Destination
                                </Link>
                                <button
                                    onClick={() => signOut(auth)}
                                    className="text-gray-700 flex w-full px-4 py-3 text-sm rounded-md transition-all duration-300 hover:bg-gray-100"
                                >
                                    Sign out
                                </button>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    className="text-gray-700 flex w-full px-4 py-3 text-sm rounded-md transition-all duration-300 hover:bg-gray-100"
                                >
                                    My account
                                </Link>
                                <Link
                                    to="/signup"
                                    className="text-gray-700 flex w-full px-4 py-3 text-sm rounded-md transition-all duration-300 hover:bg-gray-100"
                                >
                                    Create account
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
