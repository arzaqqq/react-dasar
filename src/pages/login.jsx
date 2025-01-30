import React from 'react'
import { Link } from "react-router-dom";


import AuthLayout from '../components/Layout/AuthLayout'
import FormLogin from '../components/Fragments/FormLogin'



const Loginpage = () => {
  return (
    <AuthLayout title="Login">
        <FormLogin/>
        <p className='text-sm mt-5 text-center'>Don't have am account? <Link to="/register" className=' font-bold text-blue-600'>Sign ini</Link></p>
    </AuthLayout>
  )
}

export default Loginpage
