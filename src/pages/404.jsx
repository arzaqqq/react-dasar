import { useRouteError } from "react-router-dom";
import React from 'react'

const ErrorPage = () => {
    const error = useRouteError();
    return(
    <div className="flex justify-center min-h-screen items-center">
     <div className="w-full max-w-xs">
     <h1 className="text-3xl font-bold"> Oops...!</h1>
      <p className=" my-5 text-xl">Halaman yang anda cari tidak ditemukan</p> 
      <p className=" text-lg">
        {error.statusText || error.message}
      </p>    
     </div>
    </div>
    );
};

export default ErrorPage