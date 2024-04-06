"use client";

import React, { useContext } from "react";
import cartIcon from "../../assets/icon-cart.svg";
import minusIcon from "../../assets/icon-minus.svg";
import plusIcon from "../../assets/icon-plus.svg";
import Image from "next/image";
import { CartContext } from "@/app/provider";
import { count } from "console";
type ProductInfoProps = {
  company: string;
  name: string;
  price: number;
  description: string;
  discount: number;
  photo: string;
};

function ProductInfo({
  company,
  name,
  price,
  description,
  discount,
  photo,
}: ProductInfoProps) {
  const { cart, setCart } = useContext(CartContext);
  console.log(cart);
  const handleAddToCart = () => {
    if (cart.some((item) => item.name === name)) {
      return;
    }
    const item = {
      company,
      name,
      price,
      description,
      discount,
      photo,
      count: 1,
    };
    setCart([...cart, item]);
  };

  const handleIncreaseCount = () => {
    const newCart = cart.map((item) => {
      if (item.name === name) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    });
    setCart(newCart);
  };

  const handleDecreaseCount = () => {
    const newCart = cart.map((item) => {
      if (item.name === name) {
        return { ...item, count: item.count - 1 };
      }
      return item;
    });
    setCart(newCart);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="text-orange font-bold text-sm tracking-wider">
        {company.toLocaleUpperCase()}
      </div>
      <div className="font-extrabold text-5xl">{name}</div>
      <div>{description}</div>
      <div>
        <div className="flex gap-4 items-center">
          <span className="text-3xl font-bold">
            ${(price - (discount / 100) * price).toFixed(2)}
          </span>
          <span className="py-0.5 px-3 rounded-lg bg-orange-light text-orange font-bold">
            {discount}%
          </span>
        </div>
        <div className="line-through text-lg mt-2 text-grayish-blue font-bold">
          ${price.toFixed(2)}
        </div>
      </div>
      <div className="flex gap-4">
        <button className="bg-light-grayish-blue flex justify-between w-36 items-center p-3 rounded-lg text-black py-3">
          <Image
            onClick={handleDecreaseCount}
            src={minusIcon}
            alt="minus"
            className="h-1 w-3"
          />
          <span className="font-bold">
            {cart.find((item) => item.name === name)?.count || 0}
          </span>
          <Image
            onClick={handleIncreaseCount}
            src={plusIcon}
            alt="plus"
            className="h-3 w-3"
          />
        </button>
        <button
          className="flex gap-4 items-center px-14 bg-orange text-white py-3 rounded-lg font-bold"
          onClick={handleAddToCart}
        >
          <Image src={cartIcon} alt="cart" className="w-5 h-5" />
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductInfo;
