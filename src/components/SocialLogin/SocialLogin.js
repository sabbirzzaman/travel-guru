import React, { useEffect, useState } from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineGoogle } from 'react-icons/ai';
import { useLocation, useNavigate } from 'react-router-dom';
import {
    useSignInWithFacebook,
    useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import toast from 'react-hot-toast';

const SocialLogin = () => {
    // handle button disable state
    const [buttonDisabled, setButtonDisabled] = useState(true);

    // navigator
    const navigate = useNavigate();

    // social login hooks
    const [signInWithGoogle, googleUser, gLoading, gError] =
        useSignInWithGoogle(auth);
    const [signInWithFacebook, facebookUser, fLoading, fError] =
        useSignInWithFacebook(auth);

    // handle
    useEffect(() => {
        if (googleUser || facebookUser) {
            navigate('/');
        }
    }, [googleUser, facebookUser, navigate]);

    // auth errors
    if (
        gError?.message === 'Firebase: Error (auth/popup-closed-by-user).' ||
        fError?.message === 'Firebase: Error (auth/popup-closed-by-user).'
    ) {
        toast.error('Popup closed.', {
            toastId: 'warning341',
        });
    }

    // handle submit button availability
    useEffect(() => {
        if (gLoading || fLoading) {
            setButtonDisabled(true);
        } else {
            setButtonDisabled(false);
        }
    }, [gLoading, fLoading]);

    return (
        <div className="flex justify-center gap-5">
            <button
                onClick={() => signInWithGoogle()}
                disabled={buttonDisabled}
                className={`flex justify-center items-center w-9 hover:ring hover:ring-offset-1 hover:ring-white bg-[#2977c4] hover:bg-[#3498db] h-9 rounded-full font-medium text-white transition-all duration-300 ${
                    buttonDisabled && 'cursor-not-allowed'
                }`}
            >
                {!gLoading ? (
                    <AiOutlineGoogle className="text-xl" />
                ) : (
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
                    </svg>
                )}
            </button>
            <button
                onClick={() => signInWithFacebook()}
                disabled={buttonDisabled}
                className={`flex justify-center items-center w-9 hover:ring hover:ring-offset-1 hover:ring-white bg-[#2977c4] hover:bg-[#3498db] h-9 rounded-full font-medium text-white transition-all duration-300 ${
                    buttonDisabled && 'cursor-not-allowed'
                }`}
            >
                {!fLoading ? (
                    <FaFacebookF className="text-xl" />
                ) : (
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
                    </svg>
                )}
            </button>
        </div>
    );
};

export default SocialLogin;
