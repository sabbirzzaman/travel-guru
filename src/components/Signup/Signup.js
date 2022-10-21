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
import validateEmail from '../../utils/validateEmail';

const Signup = () => {
    // local state
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // validation states
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [isEmailInvalid, setIsEmailInvalid] = useState(true);
    const [isPasswordInvalid, setIsPasswordInvalid] = useState(true);
    const [isConfirmPassInvalid, setIsConfirmPassInvalid] = useState(true);

    // form focus states
    const [nameFocused, setNameFocused] = useState(false);
    const [emailFocused, setEmailFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);
    const [confirmPasswordFocused, setConfirmPasswordFocused] = useState(false);

    // navigate hook
    const navigate = useNavigate();

    // create user hook
    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth, {
            sendEmailVerification: true,
        });

    // update profile hook
    const [updateProfile] = useUpdateProfile(auth);

    // handle signup
    const handleOnSubmit = async (e) => {
        e.preventDefault();

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
    };

    // handle auth errors
    if (error) {
        error?.code === 'auth/email-already-in-use' &&
            toast.error('User account already exists!');
    }

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

        if (password.length > 0) {
            if (password.length < 6) {
                setIsPasswordInvalid(true);
            } else {
                setIsPasswordInvalid(false);
            }
        } else {
            setIsPasswordInvalid(false);
        }

        if (confirmPassword.length > 0) {
            if (password.length < 6 || password !== confirmPassword) {
                setIsConfirmPassInvalid(true);
            } else {
                setIsConfirmPassInvalid(false);
            }
        } else {
            setIsConfirmPassInvalid(false);
        }
    }, [email, password, confirmPassword]);

    // handle submit button availability
    useEffect(() => {
        if (
            name.length > 0 &&
            email.length > 0 &&
            password.length > 0 &&
            confirmPassword.length > 0 &&
            !isEmailInvalid &&
            !isPasswordInvalid &&
            !isConfirmPassInvalid
        ) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }

        if (loading) {
            setButtonDisabled(true);
        } else {
            setButtonDisabled(false);
        }
    }, [
        loading,
        name,
        email,
        password,
        confirmPassword,
        isEmailInvalid,
        isPasswordInvalid,
        isConfirmPassInvalid,
    ]);

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
                        <div className="md:w-[400px] sm:w-96 w-80 sm:p-10 p-5 py-8 rounded-lg backdrop-blur-sm bg-slate-900/60">
                            <h2 className="sm:text-2xl text-xl mb-8 text-center font-extrabold text-white">
                                Create your account!
                            </h2>
                            <form onSubmit={handleOnSubmit}>
                                <div className="mb-5 relative overflow-hidden">
                                    <div
                                        className={`after:transition-all after:duration-500 after:content-[''] after:h-[2px] after:w-full after:absolute after:left-0 after:bottom-0 after:bg-blue-400 after:rounded-md after:-translate-x-full ${
                                            nameFocused && 'after:translate-x-0'
                                        }`}
                                    >
                                        <input
                                            type="text"
                                            placeholder="Enter your name"
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
                                <div className="mb-5 relative overflow-hidden">
                                    <div
                                        className={`after:transition-all after:duration-500 after:content-[''] after:h-[2px] after:w-full after:absolute after:left-0 after:bottom-0 after:bg-blue-400 after:rounded-md after:-translate-x-full ${
                                            passwordFocused &&
                                            'after:translate-x-0'
                                        } ${
                                            isPasswordInvalid &&
                                            'after:bg-red-400'
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
                                <div className="mb-5 relative overflow-hidden">
                                    <div
                                        className={`after:transition-all after:duration-500 after:content-[''] after:h-[2px] after:w-full after:absolute after:left-0 after:bottom-0 after:bg-blue-400 after:rounded-md after:-translate-x-full ${
                                            confirmPasswordFocused &&
                                            'after:translate-x-0'
                                        } ${
                                            isConfirmPassInvalid &&
                                            'after:bg-red-400'
                                        }`}
                                    >
                                        <input
                                            type="password"
                                            placeholder="Confirm password"
                                            value={confirmPassword}
                                            onChange={(e) =>
                                                setConfirmPassword(
                                                    e.target.value
                                                )
                                            }
                                            onFocus={() =>
                                                setConfirmPasswordFocused(true)
                                            }
                                            onBlur={() =>
                                                setConfirmPasswordFocused(false)
                                            }
                                            className="relative w-full p-1 after:w-5 after:h-5 bg-transparent md:text-base text-sm outline-none text-white transition-all duration-500 border-b-gray-400 border-b"
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className={`bg-[#2977c4] text-white flex justify-center items-center py-2 px-7 md:text-base text-sm w-full rounded-md font-medium transition-all duration-300 hover:bg-[#3498db] disabled:cursor-not-allowed ${
                                        (isEmailInvalid ||
                                            isPasswordInvalid ||
                                            isConfirmPassInvalid) &&
                                        'bg-red-400 hover:bg-red-500'
                                    }`}
                                    disabled={buttonDisabled}
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
                                            Creating account...
                                        </>
                                    ) : isEmailInvalid ? (
                                        'Invalid email'
                                    ) : isPasswordInvalid ? (
                                        <>
                                            {6 - password.length}{' '}
                                            {password.length === 5
                                                ? 'Word'
                                                : 'Words'}{' '}
                                            left
                                        </>
                                    ) : isConfirmPassInvalid ? (
                                        'Password not matched'
                                    ) : (
                                        'Create account'
                                    )}
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

                            <div className="flex justify-center gap-5">
                                <button className="bg-white flex justify-center items-center w-9 hover:ring hover:ring-offset-1 hover:ring-blue-400 h-9 rounded-full font-medium transition-all duration-300">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 488 512"
                                        width="25"
                                    >
                                        <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                                    </svg>
                                </button>
                                <button className="bg-white flex justify-center items-center w-9 hover:ring hover:ring-offset-1 hover:ring-blue-400 h-9 rounded-full font-medium transition-all duration-300">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 320 512"
                                        width="15"
                                    >
                                        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
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
