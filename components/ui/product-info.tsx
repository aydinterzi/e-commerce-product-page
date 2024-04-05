import React from "react";
import cartIcon from "../../assets/icon-cart.svg";
import minusIcon from "../../assets/icon-minus.svg";
import plusIcon from "../../assets/icon-plus.svg";
import Image from "next/image";
type ProductInfoProps = {
  company: string;
  name: string;
  price: number;
  description: string;
  discount: number;
};

function ProductInfo({
  company,
  name,
  price,
  description,
  discount,
}: ProductInfoProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="text-orange font-bold text-sm">
        {company.toLocaleUpperCase()}
      </div>
      <div className="font-extrabold text-4xl">{name}</div>
      <div>{description}</div>
      <div>
        <div className="flex gap-4 items-center">
          <span>${price - (discount / 100) * price}</span>
          <span>{discount}%</span>
        </div>
        <div className="line-through">${price}</div>
      </div>
      <div className="flex gap-4">
        <button className="bg-light-grayish-blue flex justify-between w-36 items-center p-3 rounded-lg text-black py-3">
          <Image src={minusIcon} alt="minus" />
          <span>1</span>
          <Image src={plusIcon} alt="plus" />
        </button>
        <button className="flex gap-2 px-14 bg-orange text-white py-3 rounded-lg">
          <Image src={cartIcon} alt="cart" className="w-6 h-6" />
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductInfo;
