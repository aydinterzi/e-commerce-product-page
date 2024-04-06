import Navbar from "@/components/ui/navbar";
import ProductGallery from "@/components/ui/product-gallery";
import ProductInfo from "@/components/ui/product-info";
import CartProvider from "./provider";

const product = {
  name: "Fall Limited Edition Sneakers",
  price: 250,
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  discount: 50,
  company: "Sneaker Company",
  photo: "/assets/image-product-1.jpg",
};

export default function Home() {
  return (
    <CartProvider>
      <div className="h-dvh container bg-white">
        <Navbar />
        <div className="mt-20 px-16 flex gap-40">
          <div className="">
            <ProductGallery />
          </div>
          <div className="py-12">
            <ProductInfo {...product} />
          </div>
        </div>
      </div>
    </CartProvider>
  );
}
