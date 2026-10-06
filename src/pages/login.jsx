import React from 'react'
import { Link } from "react-router-dom";


import AuthLayout from '../components/Layout/AuthLayout'
import FormLogin from '../components/Fragments/FormLogin'



export default function Loginpage() {
  return (
    <AuthLayout title="Login" type="login">
        <FormLogin/>
       
    </AuthLayout>
  )
}

// export default Loginpage
