import React from 'react'


// Componets dari elements
import ButtonFunction from '../Elements/Button/Index';
import InputForm from '../Elements/Input';

const FormLogin = () => {
  return (
    <form action="">
         <InputForm label="email" type="email" placeholder="email@gmail.com" name="email" />
          <InputForm label="form" type="password" placeholder="masukan password" name="password"></InputForm>
          <ButtonFunction variant='bg-blue-700 w-full'>Login</ButtonFunction>
        </form>
  )
}

export default FormLogin
