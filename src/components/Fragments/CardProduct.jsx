// CardProduct.js
import React from 'react';
import ButtonFunction from '../Elements/Button/Index';

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-2 flex flex-col">
      {children}
    </div>
  );
};

/*************  ✨ Codeium Command ⭐  *************/
/**
 * Body component of CardProduct
 * 
 * @param {Object} props - component props
 * @param {String} props.title - title of the product
 * @param {String} props.children - description of the product
 * @returns {ReactElement} - Body component
 */
/******  ad545ac3-f97c-47bb-b76d-46a756723f6a  *******/const Body = (props) => {
  const { children, title } = props;
  return (
    <div className="px-8 pb-5 flex-grow">
      <a href="#">
        <h5 className="text-2xl font-semibold tracking-tight text-white">{title}</h5>
        <p className="text-sm text-white mt-2">{children}</p>
      </a>
    </div>
  );
};

const Header = (props) => {
  const { images } = props;
  return (
    <a href="#">
      <img
        src={images}
        alt="product"
        className="w-full h-64 object-cover rounded-t-lg"
      />
    </a>
  );
};

const Footer = (props) => {
  const { prices } = props;
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">{prices}</span>
      <ButtonFunction className="bg-blue-500">Add to Cart</ButtonFunction>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
