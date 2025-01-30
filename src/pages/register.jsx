import React from 'react'
import { Link } from 'react-router-dom';

''
import AuthLayout from '../components/Layout/AuthLayout';
import FormRegister from '../components/Fragments/FormRegister';

const RegisterPage = () => {
  return (
    <div>
       <AuthLayout title="Register" type="register">
        <FormRegister/>
        
    </AuthLayout>
    </div>
  )
}

export default RegisterPage
