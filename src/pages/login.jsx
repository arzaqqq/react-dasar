import React from 'react'
import AuthLayout from '../components/Layout/AuthLayout'
import FormLogin from '../components/Fragments/FormLogin'

const Loginpage = () => {
  return (
    <AuthLayout title="Login">
        <FormLogin/>
    </AuthLayout>
  )
}

export default Loginpage
