import React from 'react'
import ButtonFunction from '../Elements/Button/Index';

const CardProduct = () => {
  return (
    <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow">
        <a href="#">
          <img src="/images/kopi.jpg" 
               alt="product"
                className='p-8 rounded-t-lg'/>
        </a>  
       <Body/>
        <div className='flex items-center justify-between px-5 pb-5'>
          <span className='text-xl font-bold text-white'>Rp. 1.000.000</span>
          <ButtonFunction className='bg-blue-500'>add to cart</ButtonFunction>
        </div>
      </div>
  )
}


const Body = () => {
   return(
    <div className="px-8 pb-5">
    <a href="">
      <h5 className='text-2xl font-semibold tracking-tight text-white'>Kopi</h5>
    
    <p className="texy-m text-white">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ullam, minus dignissimos reiciendis ad ipsum, enim accusamus quaerat nam, provident commodi debitis recusandae cumque ipsam!
    </p>
    </a>
  </div>
   )
}

export default CardProduct
