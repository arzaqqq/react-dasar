import React from 'react';
import FormLogin from './components/Fragments/FormLogin';
import Loginpage from './pages/LOGIN.JSX';


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
     <Loginpage/>
    </div>
  );
}

export default App;
