import React from 'react'


// Componets dari elements
import ButtonFunction from '../Elements/Button/Index';
import InputForm from '../Elements/Input';

const FormRegister = () => {
  return (
    <form action="">
         <InputForm label="Fullname" type="text" placeholder="Masukkan nama full anda" name="fullname" />
         <InputForm label="email" type="email" placeholder="email@gmail.com" name="email" />
          <InputForm label="password" type="password" placeholder="masukan password" name="password"></InputForm>
          <InputForm label="Confirm Password" type="password" placeholder="masukan password" name="password"></InputForm>
          <ButtonFunction variant='bg-blue-700 w-full'>Login</ButtonFunction>
        </form>
  )
}

export default FormRegister
