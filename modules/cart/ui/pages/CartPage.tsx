"use client";
import useCartStore from "../../core/stores/CartStore";
import { ICartItem } from "../../core/interfaces";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Trash } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import Link from "next/link";

const CartPage = () => {
  const cartItems = useCartStore((state) => state.cart);

  return cartItems.length === 0 ? (
    <EmptyCart />
  ) : (
    <div
      style={{
        background: "linear-gradient(115deg, #591e2f 5%, #8f183d 20%, #fa5388)",
      }}
      className={twMerge(
        "grid grid-cols-4 gap-6 sm:p-6 ",
        "lg:max-w-[90%] rounded-xl py-10 mx-auto min-h-[80vh] text-white text-2xl  "
      )}
    >
      {/* items */}
      <div
        className={twMerge(
          " space-y-4 px-4 overflow-auto max-h-[75vh] rounded-xl",
          "col-span-3 max-md:col-span-2 max-sm:col-span-4"
        )}
      >
        {cartItems.map((item) => (
          <div key={item.id}>
            <CartItemCard product={item} />
          </div>
        ))}
      </div>
      {/* Order Summary */}
      <div className="max-md:col-span-2 col-span-1 max-sm:col-span-4">
        <OrderSummary />
      </div>
    </div>
  );
};

export default CartPage;

const CartItemCard = ({ product }: { product: ICartItem }) => {
  const [quantity, setQuantity] = useState(product.quantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const handleRemoveItemFromCart = () => {
    removeFromCart(product.id);
  };
  const handleChangeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (isNaN(newQuantity) || newQuantity < 1) return;
    setQuantity(newQuantity);
    updateQuantity(product.id, newQuantity);
  };

  return (
    <div className="flex w-full items-center gap-4 p-4 rounded-xl bg-white text-stone-900">
      {/* Image of Product */}
      <Image
        width={112}
        height={112}
        className="w-28 h-28 max-sm:w-24 max-sm:h-24 object-cover rounded"
        src={product?.images?.[0]}
        alt={product?.title + " image"}
      />
      <div className="flex flex-col items-start gap-4 grow">
        {/* name */}
        <div className="flex flex-col gap-2">
          <p className="text-sm truncate w-full">{product.title}</p>
        </div>
        {/* description */}
        <div className="flex flex-col gap-2">
          <p className="text-xs text-gray-600 ">{product.description}</p>
        </div>
        {/* Quantity */}
        <div className="flex flex-col gap-2">
          <div className="text-sm  flex items-center gap-2 w-full">
            <span>Quantity:</span>{" "}
            <Input
              type="number"
              min={1}
              value={quantity}
              onChange={handleChangeQuantity}
            />
          </div>
        </div>

        {/* price & ACtions */}
        <div className="flex items-center justify-between w-full">
          <span className="font-semibold text-sm text-primary">
            ${(product.price * product.quantity).toFixed(2)}
          </span>
          <Button
            onClick={handleRemoveItemFromCart}
            className="text-xs cursor-pointer border bg-transparent text-red-500 border-red-600 hover:bg-red-700/10 px-2 py-1 "
          >
            <Trash size={24} />
          </Button>
        </div>
      </div>
    </div>
  );
};
const OrderSummary = () => {
  const totalPrice = useCartStore((state) => state.getTotalPrice()).toFixed(2);
  const shipping = (Number(totalPrice) / 95).toFixed(2);
  const total = (Number(shipping) + Number(totalPrice)).toFixed(2);
  return (
    <div className="bg-white text-stone-900 text-sm gap-2 h-fit  flex items-center flex-col p-4 rounded-lg col-span-1">
      <p className="text-primary text-lg">Order Summary</p>
      {/* subTotal */}
      <div className="flex items-center justify-between w-full">
        <p> SubTotal</p>
        <span className="font-semibold text-primary">${totalPrice}</span>
      </div>
      {/* Shipping */}
      <div className="flex items-center justify-between w-full">
        <p> Shipping</p>
        <span className="font-semibold text-primary">${shipping}</span>
      </div>
      <span className="border-t-2   w-full h-1 border-gray-400 my-5" />
      {/* Total */}
      <div className="flex items-center justify-between w-full">
        <p> Total</p>
        <span className="font-semibold text-primary ">${total}</span>
      </div>
      <Button className="w-full my-4">Next</Button>
    </div>
  );
};

const EmptyCart = () => {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <ShoppingCart size={48} />
        </EmptyMedia>
        <EmptyTitle>No Items Added Yet</EmptyTitle>
        <EmptyDescription>
          You haven&apos;t added any items yet.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Link href={"/"} className="flex gap-2 cursor-pointer">
          <Button>Products Page</Button>
        </Link>
      </EmptyContent>
    </Empty>
  );
};
