import React from 'react';
import ButtonFunction from './components/Elements/Button/Index';
import InputForm from './components/Elements/Input';

// Komponen berbasis class
class Button extends React.Component {
  render() {
    return (
      <button className='h-10 px-6 bg-blue-600 text-white'>
        Button dengan class
      </button>
    );
  }
}

// Komponen berbasis function
const ButtonCont = () => {
  return (
    <button className="w-[100px] h-12 bg-red-500 text-white">
      Button dengan function
    </button>
  );
};



function App() {
  return (
    <div className='flex justify-center  items-center min-h-screen'>
      <div className="w-full max-w-xs">
        <h1 className='text-3xl font-bold mb-2 '>Login</h1>
        <p className='font-medium text-slate-500'>
          Hello selasmat datang.masukan data anda
        </p>

        <form action="">
         <InputForm label="email" type="email" placeholder="email@gmail.com" name="email" />
          <div className="mb-6">
            <label 
              htmlFor="password"
              className='block text-slate-700 text-sm font-bold mb-2'>
                Password
                </label>
                <input type="password" className="text-sm border rounded w-full py-2 text-slate-700 placeholder:opacity-55"
                placeholder='Masukan password' />
          </div>
          <ButtonFunction variant='bg-blue-700 w-full'>Login</ButtonFunction>
        </form>
      </div>
    </div>
  );
}

export default App;
