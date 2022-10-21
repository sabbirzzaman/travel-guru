import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loginBg from '../../images/login-bg.jpg';
import Header from '../common/Header';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';

const Signup = () => {
    // local states
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailFocused, setEmailFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);
    // const [validation, setValidation] = useState(false);

    // navigator form router
    const navigate = useNavigate();

    // login hook form firebase hook
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);

    // handle login
    const handleOnSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    };

    // handle firebase authentication error
    if (error) {
        error?.code === 'auth/user-not-found' &&
            toast.error('Account does not exist');

        error?.code === 'auth/wrong-password' &&
            toast.error('Password incorrect.');
    }

    // navigate user
    useEffect(() => {
        if (user) {
            navigate('/');
            toast.success(`Welcome!`);
        }
    }, [user, navigate]);

    return (
        <div
            className="h-screen w-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${loginBg})` }}
        >
            <div className="h-screen w-full bg-slate-900/60">
                <div className="xl:max-w-6xl lg:max-w-5xl md:max-w-4xl mx-auto md:px-10 px-3">
                    <Header />

                    <div className="h-[calc(95vh-80px)] flex justify-center items-center">
                        <div className="md:w-[400px] sm:w-96 w-80 sm:p-10 p-5 py-8 rounded-lg backdrop-blur-sm bg-slate-900/60">
                            <h2 className="sm:text-2xl text-xl mb-8 text-center font-extrabold text-white">
                                Login to your account!
                            </h2>
                            <form onSubmit={handleOnSubmit}>
                                <div className="mb-5 relative overflow-hidden">
                                    <div
                                        className={`after:transition-all after:duration-500 after:content-[''] after:h-[2px] after:w-full after:absolute after:left-0 after:bottom-0 after:bg-blue-400 after:rounded-md after:-translate-x-full ${
                                            emailFocused &&
                                            'after:translate-x-0'
                                        }`}
                                    >
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                            onFocus={() =>
                                                setEmailFocused(true)
                                            }
                                            onBlur={() =>
                                                setEmailFocused(false)
                                            }
                                            className="relative w-full p-1 after:w-5 after:h-5 bg-transparent md:text-base text-sm outline-none text-white transition-all duration-500 border-b-gray-400 border-b"
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 relative overflow-hidden">
                                    <div
                                        className={`after:transition-all after:duration-500 after:content-[''] after:h-[2px] after:w-full after:absolute after:left-0 after:bottom-0 after:bg-blue-400 after:rounded-md after:-translate-x-full ${
                                            passwordFocused &&
                                            'after:translate-x-0'
                                        }`}
                                    >
                                        <input
                                            type="password"
                                            placeholder="Enter your password"
                                            value={password}
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                            onFocus={() =>
                                                setPasswordFocused(true)
                                            }
                                            onBlur={() =>
                                                setPasswordFocused(false)
                                            }
                                            className="relative w-full p-1 after:w-5 after:h-5 bg-transparent md:text-base text-sm outline-none text-white transition-all duration-500 border-b-gray-400 border-b"
                                        />
                                    </div>
                                </div>

                                <div className="mb-4 text-sm text-right transition-all duration-300 text-white hover:text-blue-400">
                                    <Link to="/">Forget Password?</Link>
                                </div>

                                <button
                                    type="submit"
                                    className={`bg-[#2977c4] text-white flex justify-center items-center py-2 px-7 md:text-base text-sm w-full rounded-md font-medium transition-all duration-300 hover:bg-[#3498db] ${
                                        loading && 'cursor-not-allowed'
                                    }`}
                                    disabled={loading ? true : false}
                                >
                                    {loading ? (
                                        <>
                                            <svg
                                                className="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                ></circle>
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                ></path>
                                            </svg>{' '}
                                            Logging in...
                                        </>
                                    ) : (
                                        'Login'
                                    )}
                                </button>
                            </form>

                            <div className="text-white mt-5 text-center transition-all md:text-base text-sm duration-300 hover:text-blue-400">
                                <Link to="/signup">Don't Have an account?</Link>
                            </div>

                            <div className="relative md:text-base text-sm flex py-5 items-center">
                                <div className="flex-grow border-t border-gray-400"></div>
                                <span className="flex-shrink mx-4 text-gray-400">
                                    OR
                                </span>
                                <div className="flex-grow border-t border-gray-400"></div>
                            </div>

                            <div className="flex justify-center gap-5">
                                <button className="bg-white flex justify-center items-center w-9 hover:ring hover:ring-offset-1 hover:ring-blue-400 h-9 rounded-full font-medium transition-all duration-300">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 320 512"
                                        width="15"
                                    >
                                        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                                    </svg>
                                </button>
                                <button className="bg-white flex justify-center items-center w-9 hover:ring hover:ring-offset-1 hover:ring-blue-400 h-9 rounded-full font-medium transition-all duration-300">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 488 512"
                                        width="25"
                                    >
                                        <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
