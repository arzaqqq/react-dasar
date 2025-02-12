import React from 'react'
import { useLogin }from '../hooks/useLogin';

const ProfilPages = () => {
    const username = useLogin();
  return (
    <div>
      <h1 className='text-[90px] font-bold'>Halaman Profil</h1>
    </div>
  )
}

export default ProfilPages
