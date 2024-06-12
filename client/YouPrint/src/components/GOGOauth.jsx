import { FcGoogle } from "react-icons/fc";
import React from 'react';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { app } from '../firebase';
import { toast } from 'sonner';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router';


const GOGOauth = () => {
    const auth = getAuth(app);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleGoogleClick = async () => {
        const Provider = new GoogleAuthProvider();
        Provider.setCustomParameters({ prompt: 'select_account' });
        try {
            const resultsFromGoogle = await signInWithPopup(auth, Provider);
            const res = await fetch('http://localhost:5000/api/google', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: resultsFromGoogle.user.displayName,
                    email: resultsFromGoogle.user.email,
                    googlePhotoURL: resultsFromGoogle.user.photoURL,
                }),
            });
            const data = await res.json();
            if (res.ok) {
                toast.success(data.message);
                dispatch(signInSuccess(data));
                navigate('/');
            }
        } catch (error) {
            toast.error('An error occurred. Please try again');
        }
    }

    return (
        <button type="button"
            onClick={handleGoogleClick}
            className="w-full px-4 py-2 mt-4 flex items-center justify-center rounded-md text-[#333] text-base tracking-wider font-semibold border border-primaryGreen outline-none  hover:bg-gray-50">
            <FcGoogle  className='w-6 h-6 mr-2 inline' />
              Continue avec Google
            </button>
        // <Button outline type='button' className='mt-2 w-full font-semibold ' onClick={handleGoogleClick}>
        //     <AiFillGoogleCircle className='w-6 h-6 mr-2' />
        //     Continue with Google
        // </Button>
    );
};

export default GOGOauth;
