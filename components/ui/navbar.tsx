"use client";
import Link from "next/link";
import cartIcon from "../../assets/icon-cart.svg";
import Image from "next/image";
import avatar from "../../assets/image-avatar.png";
import deleteIcon from "../../assets/icon-delete.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { CartContext } from "@/app/provider";
import { useContext } from "react";

function Navbar() {
  const { cart, setCart } = useContext(CartContext);
  return (
    <>
      <div className="py-10 flex justify-between">
        <div className="flex items-center gap-8">
          <Link href="" className="mr-4 font-extrabold text-3xl">
            sneakers
          </Link>
          <Link href="">Collections</Link>
          <Link href="">Men</Link>
          <Link href="">Women</Link>
          <Link href="">About</Link>
          <Link href="">Contact</Link>
        </div>
        <div className="flex items-center gap-12">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Image src={cartIcon} alt="cart" className="w-6 h-6" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-96 shadow-xl rounded-lg py-4 px-6 mt-10">
              <DropdownMenuLabel className="py-4 font-bold text-lg">
                Cart
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                {cart.length === 0
                  ? "Cart is empty"
                  : cart.map((item) => (
                      <div key={item.name} className="flex justify-between ">
                        <Image
                          src={item.photo}
                          alt="alt"
                          width={30}
                          height={30}
                        />
                        <div className="flex flex-col">
                          <div>{item.name}</div>
                          <div>
                            ${item.price} x {item.count}{" "}
                            <span className="font-bold">
                              ${item.price * item.count}
                            </span>
                          </div>
                        </div>
                        <div>
                          <button
                            onClick={() =>
                              setCart(cart.filter((i) => i.name !== item.name))
                            }
                          >
                            <Image src={deleteIcon} alt="delete" />
                          </button>
                        </div>
                      </div>
                    ))}
              </DropdownMenuItem>
              <DropdownMenuItem className="text-center mt-4">
                <button className="bg-orange text-white py-3 w-full rounded-lg">
                  Checkout
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Image src={avatar} alt="profile photo" className="w-12 h-12" />
        </div>
      </div>
      <hr />
    </>
  );
}

export default Navbar;
