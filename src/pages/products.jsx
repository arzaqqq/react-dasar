import React from 'react'
import { Fragment, useState, useEffect, useRef } from 'react';


import Button from '../components/Elements/Button/Index';
import ButtonFunction from '../components/Elements/Button/Index';
import CardProduct from '../components/Fragments/CardProduct';
import { getProducts } from '../services/product-service';
import { use } from 'react';
import { getUsername } from '../services/auth-service';

import { useLogin } from '../hooks/useLogin';

// const products = [
//   {
//     id:1,
//     title:"Kopi",
//     image:"../image/kopi.jpg",
//     price:56000,
//     desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis aperiam odio, similique ipsam quis, at, aliquid laudantium illum cum eveniet dolores perferendis tenetur quod velit saepe doloremque aspernatur officiis impedit",
//   },
//   {
//     id:2,
//     title:"Kopi",
//     image:"../image/kopi.jpg",
//     price:2030000,
//     desc:"Lorem ipsum dolord velit saepe doloremque aspernatur officiis impedit",
//   },
//   {
//     id:3,
//     title:"Kopi",
//     image:"../image/kopi.jpg",
//     price:3000000,
//     desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis aperiam odio, similique ipsam quis, at, aliquid laudantium illum cum eveniet ",
//   },

// ];

// Mendapatkan data email dari localStorage darii hasil login


const ProductPages = () => {
  const [cart, setCart] = useState([]);
  // tOTAL PRODUCT YANG DI CART
  const [totalPrice, setTotalPrice] = useState();
  const [products, setProducts] = useState([]);


  const username = useLogin();

  useEffect(() => {
    setCart (JSON.parse(localStorage.getItem("cart")) || []);
  }, []);
  
 

useEffect(() => {
  if (products.length > 0 && cart.length > 0) {
  const sum =cart.reduce((acc, item) => {
    const product = products.find((product) => product.id === item.id);
   return acc + product.price * item.qty;
  }, 0);
  setTotalPrice(sum);
  localStorage.setItem("cart", JSON.stringify(cart));
   }
}, [cart]);


// useeffect dengan get API
useEffect(() =>{
  getProducts((data)=>{
    setProducts(data);
  });
}, [])

// untuk tombol logout dan  mengahpsu isi emai dan password login
  const handleLogout = () => {
    localStorage.removeItem("token");
    
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


  // useRef
  const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);;

  const handleAddToCartRef = (id) => {
    cartRef.current = [...cartRef.current, { id, qty: 1 }];
    localStorage.setItem("cart", JSON.stringify(cartRef.current));
  };

  const totalPriceRef = useRef(null);  

  useEffect(() => {
    if (cart.length > 0 ) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart, products]);

  return (
    <>
    <div className='flex justify-end gap-4 h-12 bg-blue-500 text-white items-center px-10'>
      {username}
      <ButtonFunction className="ml-4 h-9 flex items-center justify-center bg-black" onClick={handleLogout}>Logout</ButtonFunction>
    </div>
    <div className='flex justify-center py-5 h-full'>
      <div className="w-3/4 flex flex-wrap mb-2">
      {products.length > 0 && products.map((product) => (
            <CardProduct key={product.id}>
            <CardProduct.Header image={product.image}></CardProduct.Header>
          <CardProduct.Body title={product.title}>{product.description}</CardProduct.Body>
            <CardProduct.Footer 
            price={product.price} 
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
            {products.length > 0 && cart.map((item) => {
              const product = products.find((product) => product.id === item.id);

             

              return (
                <tr key={item.id}>
                  <td>{product.title.substring(0, 20)}</td>
                  <td> {product.price.toLocaleString('id-ID', { style: "currency", currency: 'USD' })}</td>
                  <td>{item.qty}</td>
                  <td> {(product.price * item.qty).toLocaleString('id-ID', { style: "currency", currency: 'USD' })}</td>
                </tr>
              );
            })}
            <tr ref={totalPriceRef}>
              <td colSpan="3"><b>Total:</b></td> 
              <td >
                <b>
                  Rp{""}
                {(totalPrice || 0).toLocaleString("id-ID", {
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
