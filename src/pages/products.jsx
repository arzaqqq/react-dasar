import React from 'react'

import Button from '../components/Elements/Button/Index';
import ButtonFunction from '../components/Elements/Button/Index';
import CardProduct from '../components/Fragments/CardProduct';

const products = [
  {
    id:1,
    title:"Kopi",
    images:"../images/kopi.jpg",
    prices:"100000",
    desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis aperiam odio, similique ipsam quis, at, aliquid laudantium illum cum eveniet dolores perferendis tenetur quod velit saepe doloremque aspernatur officiis impedit",
  },
  {
    id:2,
    title:"Kopi",
    images:"../images/kopi.jpg",
    prices:"100000",
    desc:"Lorem ipsum dolord velit saepe doloremque aspernatur officiis impedit",
  },
  {
    id:3,
    title:"Kopi",
    images:"../images/kopi.jpg",
    prices:"100000",
    desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis aperiam odio, similique ipsam quis, at, aliquid laudantium illum cum eveniet ",
  },

];

// Mendapatkan data email dari localStorage darii hasil login
const email = localStorage.getItem("email");

const ProductPages = () => {

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  }
  return (
    <>
    <div className='flex justify-end gap-4 h-12 bg-blue-500 text-white items-center px-10'>
      {email}
      <ButtonFunction className="ml-4 h-9 flex items-center justify-center bg-black" onClick={handleLogout}>Logout</ButtonFunction>
    </div>
    <div className='flex justify-center py-5 h-full'>
      {products.map((product) => (
            <CardProduct key={product.id}>
            <CardProduct.Header images={product.images}></CardProduct.Header>
          <CardProduct.Body title={product.title}>{product.desc}</CardProduct.Body>
            <CardProduct.Footer prices={product.prices}></CardProduct.Footer>
          </CardProduct>
      ))}

      
    </div>
    </>
  )
}

export default ProductPages
