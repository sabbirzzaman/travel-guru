import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loginBg from '../../images/login-bg.jpg';
import Header from '../common/Header';
import auth from '../../firebase.init';
import {
    useCreateUserWithEmailAndPassword,
    useUpdateProfile,
} from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';

const Signup = () => {
    // local state
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [validation, setValidation] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');

    const [nameFocused, setNameFocused] = useState(false);
    const [emailFocused, setEmailFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);
    const [confirmPasswordFocused, setConfirmPasswordFocused] = useState(false);

    // navigate hook
    const navigate = useNavigate();

    // create user hook
    const [createUserWithEmailAndPassword, user, error] =
        useCreateUserWithEmailAndPassword(auth, {
            sendEmailVerification: true,
        });

    // update profile hook
    const [updateProfile] = useUpdateProfile(auth);

    // handle signup
    const handleOnSubmit = async (e) => {
        e.preventDefault();

        if (password.length <= 5) {
            toast.error('Password must be at least 6 characters!');
            return;
        }

        if (password !== confirmPassword) {
            toast.error(`Passwords don't matched!`);
            return;
        }

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
    };

    // handle auth errors
    if (error) {
        error?.code === 'auth/email-already-in-use' &&
            toast.error('User account already exists!');
    }

    // navigate user
    useEffect(() => {
        if (user) {
            navigate('/');
            toast.success(`Verification email send to your email!`);
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
                        <div className="md:w-[400px] sm:w-96 w-80 sm:p-10 p-5 py-8 rounded-lg backdrop-blur-sm bg-slate-900/40">
                            <h2 className="sm:text-2xl text-xl mb-8 text-center font-extrabold text-white">
                                Create your account!
                            </h2>
                            <form onSubmit={handleOnSubmit}>
                            <div className='mb-5 relative overflow-hidden'>
                                    <div className={`after:transition-all after:duration-500 after:content-[''] after:h-[1.5px] after:w-full after:absolute after:left-0 after:bottom-0 after:bg-blue-400 after:rounded-md after:-translate-x-full ${nameFocused && 'after:translate-x-0'}`}>
                                        <input
                                            type="text"
                                            placeholder="Enter your email"
                                            value={name}
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                            onFocus={() => setNameFocused(true)}
                                            onBlur={() => setNameFocused(false)}
                                            className="relative w-full p-1 after:w-5 after:h-5 bg-transparent md:text-base text-sm outline-none text-white transition-all duration-500 border-b-gray-400 border-b"
                                        />
                                    </div>
                                </div>
                                <div className='mb-5 relative overflow-hidden'>
                                    <div className={`after:transition-all after:duration-500 after:content-[''] after:h-[1.5px] after:w-full after:absolute after:left-0 after:bottom-0 after:bg-blue-400 after:rounded-md after:-translate-x-full ${emailFocused && 'after:translate-x-0'}`}>
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
                                <div className='mb-5 relative overflow-hidden'>
                                    <div className={`after:transition-all after:duration-500 after:content-[''] after:h-[2px] after:w-full after:absolute after:left-0 after:bottom-0 after:bg-blue-400 after:rounded-md after:-translate-x-full ${passwordFocused && 'after:translate-x-0'}`}>
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
                                <div className='mb-5 relative overflow-hidden'>
                                    <div className={`after:transition-all after:duration-500 after:content-[''] after:h-[1px] after:w-full after:absolute after:left-0 after:bottom-0 after:bg-blue-400 after:rounded-md after:-translate-x-full ${confirmPasswordFocused && 'after:translate-x-0'}`}>
                                        <input
                                            type="password"
                                            placeholder="Confirm password"
                                            value={password}
                                            onChange={(e) =>
                                                setConfirmPassword(e.target.value)
                                            }
                                            onFocus={() => setConfirmPasswordFocused(true)}
                                            onBlur={() => setConfirmPasswordFocused(false)}
                                            className="relative w-full p-1 after:w-5 after:h-5 bg-transparent md:text-base text-sm outline-none text-white transition-all duration-500 border-b-gray-400 border-b"
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="bg-[#2977c4] text-white py-1 px-7 md:text-base text-sm w-full rounded-md font-medium transition-all duration-300 hover:bg-[#3498db]"
                                >
                                    Create account
                                </button>
                            </form>

                            <div className="text-white mt-5 text-center transition-all md:text-base text-sm duration-300 hover:text-blue-400">
                                <Link to="/login">
                                    Already have an account?
                                </Link>
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
