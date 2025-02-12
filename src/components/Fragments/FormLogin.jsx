import React from 'react'
import { useRef ,useEffect} from 'react';

// Componets dari elements
import ButtonFunction from '../Elements/Button/Index';
import InputForm from '../Elements/Input';

import { login } from '../../services/auth-service';

const FormLogin = () => {
  const handleLogin = (event) => {
    // AGAR preventDefault HALAMAN TIDAK TERREFRESH
    event.preventDefault();

    // simpan ke localhost
   // localStorage.setItem("email", event.target.email.value);
   // localStorage.setItem("password", event.target.password.value);

    //console.log(event.target.email.value);
   // console.log(event.target.password.value);
    //console.log("login");

   // window.location.href = "/products";\
    const data = {
      username: event.target.username.value,
      password: event.target.password.value
    }
    login(data);

  }

  const usernameRef = useRef(null);

  useEffect(() => {
  usernameRef.current.focus();
    
  }, []);

  return (
    <form action="" onSubmit={handleLogin}>
         <InputForm label="username" 
                    type="text" 
                    placeholder="ahmada jarkakan" 
                    name="username"
                    ref={usernameRef} />
          <InputForm label="password" type="password" placeholder="masukan password" name="password"></InputForm>
          <ButtonFunction 
              variant='bg-blue-700 w-full'
              type='submit'
             >Login</ButtonFunction>
        </form>
  )
}

export default FormLogin
