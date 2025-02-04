//SEBENARNAY HALAAKN INI TIDAK DIPAAKI LAGI KARENA SUDAH KE MAIN LANGSUNG

import React from 'react';
import FormLogin from './components/Fragments/FormLogin';
import Loginpage from './pages/LOGIN.JSX';
import FormRegister from './components/Fragments/FormRegister';
import RegisterPage from './pages/register';


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
     <RegisterPage/>
     
    </div>
  );
}

export default App;
