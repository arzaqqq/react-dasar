import React from 'react'


// Componets dari elements
import ButtonFunction from '../Elements/Button/Index';
import InputForm from '../Elements/Input';

const FormLogin = () => {
  const handleLogin = (event) => {
    // AGAR preventDefault HALAMAN TIDAK TERREFRESH
    event.preventDefault();

    // simpan ke localhost
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);

    console.log(event.target.email.value);
    console.log(event.target.password.value);
    console.log("login");

    window.location.href = "/products";
  }

  return (
    <form action="" onSubmit={handleLogin}>
         <InputForm label="email" type="email" placeholder="email@gmail.com" name="email" />
          <InputForm label="form" type="password" placeholder="masukan password" name="password"></InputForm>
          <ButtonFunction 
              variant='bg-blue-700 w-full'
              type='submit'
             >Login</ButtonFunction>
        </form>
  )
}

export default FormLogin
