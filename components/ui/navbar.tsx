import Link from "next/link";
import cartIcon from "../../assets/icon-cart.svg";
import Image from "next/image";
import avatar from "../../assets/image-avatar.png";

function Navbar() {
  return (
    <>
      <div className="py-10 flex justify-between">
        <div className="flex items-center gap-8">
          <Link href="" className="mr-4">
            sneakers
          </Link>
          <Link href="">Collections</Link>
          <Link href="">Men</Link>
          <Link href="">Women</Link>
          <Link href="">About</Link>
          <Link href="">Contact</Link>
        </div>
        <div className="flex items-center gap-12">
          <Image src={cartIcon} alt="cart" className="w-6 h-6" />
          <Image src={avatar} alt="profile photo" className="w-12 h-12" />
        </div>
      </div>
      <hr />
    </>
  );
}

export default Navbar;
