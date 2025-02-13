import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../services/product-service";

const DetailProductPages = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getDetailProduct(id, (data) => {
      setProduct(data);
    });
  }, [id]);

  useEffect(() => {
    console.log("Product updated:", product);
  }, [product]);

  if (!product) {
    return <p className="text-center">Loading product details...</p>;
  }

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="flex font-sans max-w-xl bg-white shadow-lg rounded-lg p-6">
        <div className="flex-none w-48 relative">
          <img
            src={product.image}
            alt={product.title}
            className="absolute inset-0 w-full h-full object-cover rounded-md"
            loading="lazy"
          />
        </div>
        <div className="flex-auto pl-6">
          <h1 className="text-lg font-semibold text-gray-900">{product.title}</h1>
          <p className="text-sm text-gray-600">{product.rating.rate}/5 ({product.rating.count})</p>
          <p className="text-gray-600">{product.description}</p>
          <div className="text-lg font-semibold text-gray-800 mt-2">
            ${product.price}
          </div>

          <div className="flex space-x-4 mt-6">
            <button className="h-10 px-6 font-semibold rounded-md bg-black text-white">
              Buy now
            </button>
            <button className="h-10 px-6 font-semibold rounded-md border border-gray-300 text-gray-900">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProductPages;
