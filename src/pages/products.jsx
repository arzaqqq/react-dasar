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

]

const ProductPages = () => {
  return (
    <div className='flex justify-center py-5 h-full'>
      {products.map((product) => (
            <CardProduct>
            <CardProduct.Header images={product.images}></CardProduct.Header>
          <CardProduct.Body title={product.title}>{product.desc}</CardProduct.Body>
            <CardProduct.Footer prices={product.prices}></CardProduct.Footer>
          </CardProduct>
      ))}

      
    </div>
  )
}

export default ProductPages
