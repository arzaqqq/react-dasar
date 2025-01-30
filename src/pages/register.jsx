import React from 'react'
import { Link } from 'react-router-dom';

''
import AuthLayout from '../components/Layout/AuthLayout';
import FormRegister from '../components/Fragments/FormRegister';

const RegisterPage = () => {
  return (
    <div>
       <AuthLayout title="Register">
        <FormRegister/>
        <p className='text-sm mt-5 text-center'>Do you have an account? <Link to="/login" className=' font-bold text-blue-600'>Login</Link></p>
    </AuthLayout>
    </div>
  )
}

export default RegisterPage
