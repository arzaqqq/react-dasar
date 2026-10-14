// ini bagain dari folder layout yang mana letah di folder pages

import React, { useContext } from 'react'
import { Link } from 'react-router-dom';

import { DarkMode } from '../../context/DarkMode.jsx';

const AuthLayout = ({children, title, type}) => {
    // const {children, title, type} = props;
const {isDarkMode, setIsDarkMode} = useContext(DarkMode);
  return (
    
    <div className={`flex justify-center  items-center min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <button
          className="absolute right-2 top-2 bg-blue-600 p-2 text-white rounded"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? "Light" : "Dark"}
        </button>
    <div className="w-full max-w-xs">
    <h1 className='text-3xl font-bold mb-2 '>{title}</h1>
    <p className='font-medium text-slate-500'>
      Hello selamat datang.masukan data anda
    </p>

    {children}
    <p className='text-sm mt-5 text-center'>
        {type === 'login' 
         ? "Don't have an account ? " 
         : "Already have an account ? "}

        {type === "login" &&(
            <Link to="/register" className=' font-bold text-blue-600'>
        Sign in</Link>
        )}
        {type === "register" &&(
            <Link to="/login" className=' font-bold text-blue-600'>
        Login</Link>
        )}

        </p>
  </div>
  </div>
  )
}

export default AuthLayout
