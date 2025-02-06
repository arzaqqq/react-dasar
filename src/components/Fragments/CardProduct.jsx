import React from 'react'
import ButtonFunction from '../Elements/Button/Index';

const CardProduct = (props) => {
  const {children} = props;
  return (
    <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow">
        {children}        
    </div>
  )
}


const Body = (props) => {
  const {children, title} = props;
   return(
    <div className="px-8 pb-5">
    <a href="">
    <h5 className='text-2xl font-semibold tracking-tight text-white'>{title}</h5>
  
    <p className="texy-m text-white">
   {children}
  </p>
  </a>
  </div>
   )
}


const Header = (props) => {
  const {images} = props
  return(
    <a href="#">
    <img src={images}
         alt="product"
          className='p-8 rounded-t-lg'/>
  </a>
  )
}

const Footer = (props) => {
  const {prices} = props;
  return(
    <div className='flex items-center justify-between px-5 pb-5'>
    <span className='text-xl font-bold text-white'>{prices}</span>
    <ButtonFunction className='bg-blue-500'>add to cart</ButtonFunction>
  </div>
  )
}


CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;


export default CardProduct
