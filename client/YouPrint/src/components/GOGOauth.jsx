import { Button } from 'flowbite-react'
import { AiFillGoogleCircle } from "react-icons/ai";
import React from 'react'
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { app } from '../firebase';
import { toast } from 'sonner';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router';

const GOGOauth = () => {
    const handleGoogleClick = async () => {
        const dispatch = useDispatch()
        const navigate = useNavigate()
        const auth = getAuth(app)
        const Provider = new GoogleAuthProvider()
        Provider.setCustomParameters({ prompt: 'select_account' })
        try {
            // await signInWithPopup(auth, Provider)
            const resultsFromGoogle = await signInWithPopup(auth, Provider)
            const res = await fetch('/api/auth/google', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                     name: resultsFromGoogle.user.displayName,
                        email: resultsFromGoogle.user.email,
                        photoURL: resultsFromGoogle.user.photoURL,
                     }),
            })
            const data = await res.json()
            if (data.success) {
                toast.success(data.message)
                dispatch(signInSuccess(data))
                navigate('/')
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.error(error)
        }
    }

  return (
        <Button outline  type='button' className='mt-2 w-full font-semibold ' onClick={handleGoogleClick}>
        <AiFillGoogleCircle className='w-6 h-6 mr-2 ' />
            Continue with Google
        </Button>
  )
}

export default GOGOauth
