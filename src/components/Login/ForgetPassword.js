import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../../firebase.init';
import validateEmail from '../../utils/validateEmail';
import Header from '../common/Header';
import loginBg from '../../images/login-bg.jpg';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
    // local states
    const [email, setEmail] = useState('');

    // input focus states
    const [emailFocused, setEmailFocused] = useState(false);

    // validation states
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [isEmailInvalid, setIsEmailInvalid] = useState(true);

    // login hook form firebase hook
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    // handle login
    const handleOnSubmit = async (e) => {
        e.preventDefault();

        await sendPasswordResetEmail(email);
        toast.success('Sent email for password reset.');
    };

    // handle form validation
    useEffect(() => {
        if (email.length > 0) {
            if (!validateEmail(email)) {
                setIsEmailInvalid(true);
            } else {
                setIsEmailInvalid(false);
            }
        } else {
            setIsEmailInvalid(false);
        }
    }, [email]);

    // handle submit button availability
    useEffect(() => {
        if (email.length > 0 && !isEmailInvalid) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }

        if (sending) {
            setButtonDisabled(true);
        } else {
            setButtonDisabled(false);
        }
    }, [email, isEmailInvalid, sending]);
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
                                Recover password!
                            </h2>
                            <form onSubmit={handleOnSubmit}>
                                <div className="mb-5 relative overflow-hidden">
                                    <div
                                        className={`after:transition-all after:duration-500 after:content-[''] after:h-[2px] after:w-full after:absolute after:left-0 after:bottom-0 after:bg-blue-400 after:rounded-md after:-translate-x-full ${
                                            emailFocused &&
                                            'after:translate-x-0'
                                        } ${
                                            isEmailInvalid && 'after:bg-red-400'
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

                                <div className="grid grid-cols-6 items-center gap-3">
                                    <button
                                        type="submit"
                                        className={`bg-[#2977c4] col-span-5 text-white flex justify-center items-center h-10 md:text-base text-sm w-full rounded-md font-medium transition-all duration-300 hover:bg-[#3498db] disabled:cursor-not-allowed ${
                                            isEmailInvalid &&
                                            'bg-red-400 hover:bg-red-500'
                                        }`}
                                        disabled={buttonDisabled}
                                    >
                                        {sending ? (
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
                                                Sending...
                                            </>
                                        ) : isEmailInvalid ? (
                                            'Invalid email'
                                        ) : (
                                            'Send Reset Email'
                                        )}
                                    </button>
                                    <Link to={'/login'}>
                                        <button className="bg-white col-span-1 flex justify-center items-center h-10 md:text-base text-sm w-full rounded-md font-medium transition-all duration-300 hover:bg-[#2977c4] hover:text-white">
                                            <AiOutlineArrowLeft className="text-xl font-bold" />
                                        </button>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;
