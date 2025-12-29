"use client";
import { ShoppingCart } from "lucide-react";
import useCartStore from "../../core/stores/CartStore";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

const CartButton = () => {
  const itemCount = useCartStore((state) =>
    state.cart.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <div className="relative inline-block">
      <Link href={"/cart"}>
        <ShoppingCart className="text-primary" size={24} />
      </Link>

      {
        <span
          className={twMerge(
            "absolute -top-2 -right-3 flex h-4 min-w-4 items-center",
            " justify-center rounded-full bg-stone-800 px-1 text-[6pt] font-bold text-white"
          )}
        >
          {itemCount}
        </span>
      }
    </div>
  );
};

export default CartButton;
