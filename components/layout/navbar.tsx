import CartButton from "@/modules/cart/ui/components/CartButton";
import Link from "next/link";
import React from "react";
import Logo from "../ui/Logo";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full fixed shadow-sm p-3 px-12 bg-white z-50">
      <Link href="/" aria-label="Go to homepage" className="text-primary ">
        <Logo />
      </Link>
      <CartButton />
    </div>
  );
};

export default Navbar;
