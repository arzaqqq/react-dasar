import React from 'react'
import { Fragment, useState, useEffect } from 'react';


import Button from '../components/Elements/Button/Index';
import ButtonFunction from '../components/Elements/Button/Index';
import CardProduct from '../components/Fragments/CardProduct';

const products = [
  {
    id:1,
    title:"Kopi",
    images:"../images/kopi.jpg",
    prices:56000,
    desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis aperiam odio, similique ipsam quis, at, aliquid laudantium illum cum eveniet dolores perferendis tenetur quod velit saepe doloremque aspernatur officiis impedit",
  },
  {
    id:2,
    title:"Kopi",
    images:"../images/kopi.jpg",
    prices:2030000,
    desc:"Lorem ipsum dolord velit saepe doloremque aspernatur officiis impedit",
  },
  {
    id:3,
    title:"Kopi",
    images:"../images/kopi.jpg",
    prices:3000000,
    desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis aperiam odio, similique ipsam quis, at, aliquid laudantium illum cum eveniet ",
  },

];

// Mendapatkan data email dari localStorage darii hasil login
const email = localStorage.getItem("email");

const ProductPages = () => {
  const [cart, setCart] = useState([]);
  // tOTAL PRODUCT YANG DI CART
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setCart ([{id:1, qty:1}]);
  }, []);


// untuk tombol logout dan  mengahpsu isi emai dan password login
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  }

  const handleAddToCart = (id) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === id);
  
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...prevCart, { id, qty: 1 }];
      }
    });
  };
  
  return (
    <>
    <div className='flex justify-end gap-4 h-12 bg-blue-500 text-white items-center px-10'>
      {email}
      <ButtonFunction className="ml-4 h-9 flex items-center justify-center bg-black" onClick={handleLogout}>Logout</ButtonFunction>
    </div>
    <div className='flex justify-center py-5 h-full'>
      <div className="w-3/4 flex flex-wrap mb-2">
      {products.map((product) => (
            <CardProduct key={product.id}>
            <CardProduct.Header images={product.images}></CardProduct.Header>
          <CardProduct.Body title={product.title}>{product.desc}</CardProduct.Body>
            <CardProduct.Footer 
            prices={product.prices} 
            id={product.id}
            handleAddToCart={handleAddToCart}
            ></CardProduct.Footer>
          </CardProduct>
      ))}
      </div>
      <div className="w-1/4">
          <h1 className='text-3xl font-bold text-blue-700'> Cart</h1>
          
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
  {cart.map((item) => {
    const product = products.find((product) => product.id === item.id);

    if (!product) return null; // Jika tidak ditemukan, lewati

    return (
      <tr key={item.id}>
        <td>{product.title}</td>
        <td>Rp {product.prices.toLocaleString('id-ID', { style: "currency", currency: 'IDR' })}</td>
        <td>{item.qty}</td>
        <td>Rp {(product.prices * item.qty).toLocaleString('id-ID', { style: "currency", currency: 'IDR' })}</td>
      </tr>
    );
  })}
  <tr>
    <td colSpan="3"><b>Total:</b></td>
    <td >
      <b>
        Rp{""}
      {(totalPrice).toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR"
    })}
      </b>
    </td>
  </tr>
</tbody>
          </table>
      </div>

      
    </div>
    </>
  )
}

export default ProductPages
