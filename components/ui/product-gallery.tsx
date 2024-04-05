"use client";
import Image from "next/image";
import { useState } from "react";

import product1 from "../../assets/image-product-1.jpg";
import product2 from "../../assets/image-product-2.jpg";
import product3 from "../../assets/image-product-3.jpg";
import product4 from "../../assets/image-product-4.jpg";
function ProductGallery() {
  const [selectedImage, setSelectedImage] = useState(product1);
  return (
    <div className="flex flex-col gap-4 w-[440px]">
      <Image
        src={selectedImage}
        alt="product1"
        className="h-[440px] w-[440px] rounded-lg cursor-pointer"
      />
      <div className="flex justify-between">
        <Image
          src={product1}
          alt="product1"
          onClick={() => setSelectedImage(product1)}
          className="cursor-pointer h-24 w-24 rounded-xl"
        />
        <Image
          src={product2}
          alt="product2"
          onClick={() => setSelectedImage(product2)}
          className="cursor-pointer h-24 w-24 rounded-xl"
        />
        <Image
          src={product3}
          alt="product3"
          onClick={() => setSelectedImage(product3)}
          className="cursor-pointer h-24 w-24 rounded-xl"
        />
        <Image
          src={product4}
          alt="product4"
          onClick={() => setSelectedImage(product4)}
          className="cursor-pointer h-24 w-24 rounded-xl"
        />
      </div>
    </div>
  );
}

export default ProductGallery;
