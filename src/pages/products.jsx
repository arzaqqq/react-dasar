import React from 'react'

import Button from '../components/Elements/Button/Index';
import ButtonFunction from '../components/Elements/Button/Index';
import CardProduct from '../components/Fragments/CardProduct';

const ProductPages = () => {
  return (
    <div className='flex justify-center py-5'>
      <CardProduct>
        <CardProduct.Header images="../images/kopi.jpg"></CardProduct.Header>
      <CardProduct.Body title=" Kopi">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis aperiam odio, similique ipsam quis, at, aliquid laudantium illum cum eveniet dolores perferendis tenetur quod velit saepe doloremque aspernatur officiis impedit.</CardProduct.Body>
        <CardProduct.Footern prices=""></CardProduct.Footern>
      </CardProduct>
    </div>
  )
}

export default ProductPages
