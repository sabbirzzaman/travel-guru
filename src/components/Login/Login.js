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
    const [emailFocused, setEmailFocused] = useState(false)
    const [passwordFocused, setPasswordFocused] = useState(false)
    // const [validation, setValidation] = useState(false);

    // navigator form router
    const navigate = useNavigate();

    // login hook form firebase hook
    const [signInWithEmailAndPassword, user, error] =
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

    console.log(emailFocused);

    return (
        <div
            className="h-screen w-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${loginBg})` }}
        >
            <div className="h-screen w-full bg-slate-900/60">
                <div className="xl:max-w-6xl lg:max-w-5xl md:max-w-4xl mx-auto md:px-10 px-3">
                    <Header />

                    <div className="h-[calc(95vh-80px)] flex justify-center items-center">
                        <div className="md:w-[400px] sm:w-96 w-80 sm:p-10 p-5 py-8 rounded-lg backdrop-blur-sm bg-slate-900/40">
                            <h2 className="sm:text-2xl text-xl mb-8 text-center font-extrabold text-white">
                                Login to your account!
                            </h2>
                            <form onSubmit={handleOnSubmit}>
                                <div className='mb-5 relative overflow-hidden'>
                                    <div className={`after:transition-all after:duration-500 after:content-[''] after:h-[1px] after:w-full after:absolute after:left-0 after:bottom-0 after:bg-blue-400 after:rounded-md after:-translate-x-full ${emailFocused && 'after:translate-x-0'}`}>
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                            onFocus={() => setEmailFocused(true)}
                                            onBlur={() => setEmailFocused(false)}
                                            className="relative w-full p-1 after:w-5 after:h-5 bg-transparent md:text-base text-sm outline-none text-white transition-all duration-500 border-b-gray-400 border-b"
                                        />
                                    </div>
                                </div>
                                <div className='mb-3 relative overflow-hidden'>
                                    <div className={`after:transition-all after:duration-500 after:content-[''] after:h-[1.5px] after:w-full after:absolute after:left-0 after:bottom-0 after:bg-blue-400 after:rounded-md after:-translate-x-full ${passwordFocused && 'after:translate-x-0'}`}>
                                        <input
                                            type="password"
                                            placeholder="Enter your password"
                                            value={password}
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                            onFocus={() => setPasswordFocused(true)}
                                            onBlur={() => setPasswordFocused(false)}
                                            className="relative w-full p-1 after:w-5 after:h-5 bg-transparent md:text-base text-sm outline-none text-white transition-all duration-500 border-b-gray-400 border-b"
                                        />
                                    </div>
                                </div>

                                <div className="mb-4 text-sm text-right transition-all duration-300 text-white hover:text-blue-400">
                                    <Link to="/">Forget Password?</Link>
                                </div>

                                <button
                                    type="submit"
                                    className="bg-[#2977c4] text-white py-1 px-7 md:text-base text-sm w-full rounded-md font-medium transition-all duration-300 hover:bg-[#3498db]"
                                >
                                    Login
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

                            <div className="grid grid-cols-2 gap-3">
                                <button className="bg-[#2977c4] text-white py-1 md:text-base text-sm w-full rounded-md font-medium transition-all duration-300 hover:bg-[#3498db]">
                                    Facebook
                                </button>
                                <button className="bg-[#2977c4] text-white py-1 md:text-base text-sm w-full rounded-md font-medium transition-all duration-300 hover:bg-[#3498db]">
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

export default Signup;
