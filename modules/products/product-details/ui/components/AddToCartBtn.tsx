"use client";
import { Button } from "@/components/ui/button";
import { IProduct } from "@/data/products";
import useCartStore from "@/modules/cart/core/stores/CartStore";
import { ShoppingCart } from "lucide-react";

import { twMerge } from "tailwind-merge";

const AddToCartBtn = ({ product }: { product: IProduct }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <Button
      onClick={(e) => {
        e.stopPropagation();
        addToCart(product);
      }}
      className={twMerge(
        "flex items-center gap-1 grow rounded-sm bg-primary  font-medium text-white transition  ",
        " cursor-pointer h-full text-md "
      )}
    >
      <ShoppingCart />
      Add To Cart
    </Button>
  );
};

export default AddToCartBtn;
