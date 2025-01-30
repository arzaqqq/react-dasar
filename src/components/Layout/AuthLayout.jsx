import React from 'react'

const AuthLayout = (props) => {
    const {children, title} = props;
  return (
    <div className='flex justify-center  items-center min-h-screen'>
    <div className="w-full max-w-xs">
    <h1 className='text-3xl font-bold mb-2 '>{title}</h1>
    <p className='font-medium text-slate-500'>
      Hello selasmat datang.masukan data anda
    </p>
   
    {children}
  </div>
  </div>
  )
}

export default AuthLayout
