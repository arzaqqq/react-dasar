import React from 'react'
import { useRef ,useEffect, useState} from 'react';

// Componets dari elements
import ButtonFunction from '../Elements/Button/Index';
import InputForm from '../Elements/Input';

import { login } from '../../services/auth-service';

const FormLogin = () => {
    const [loginFailed, setLoginFailed] = useState("");
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
    login(data, (status, res) => {
      if(status){
        localStorage.setItem("token", res);
        window.location.href = "/products";
      }else{
        setLoginFailed(res.response.data);
        console.log(res.response.data);
      }

    });

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
             {loginFailed &&   <p className='text-red-500 text-center mt-5'> {loginFailed} </p>}
        </form>
  )
}

export default FormLogin
