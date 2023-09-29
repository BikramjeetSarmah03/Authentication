import React from 'react'
import { useEffect } from 'react';
import {GoogleAuthProvider,signInWithPopup,getAuth} from 'firebase/auth';
import { app } from '../lib/firebase.js';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
import {useNavigate} from 'react-router-dom';

export default function Auth () {
  const dispatch=useDispatch();
const navigate=useNavigate();

const handleGoogleAuth=async() =>{
  try {
    const provider= new GoogleAuthProvider();
    const auth=getAuth(app);
    const result= await signInWithPopup(auth,provider);
    const res = await fetch ('/api/auth/google',{
      method:'POST',
    headers:{
      'Content-type': 'application/json',
    },
    body:JSON.stringify({
      name:result.user.displayName,
      email:result.user.email,
      photo:result.user.photoURL
    }),
    });
    const data=await res.json();

    dispatch(signInSuccess(data));
    navigate('/');
  } catch (error) {
    console.log("Coulnt login with google",error);
  }
}
  
  return (
    <button type='button' onClick={handleGoogleAuth} className='bg-blue-800 text-white rounded-md uppercase p-3 hover:bg-red-400 opacity-60'>Continue with Google</button>
  )
}
