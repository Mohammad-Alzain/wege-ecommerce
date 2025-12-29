"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { IProduct } from "@/data/products";
import useCartStore from "@/modules/cart/core/stores/CartStore";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const ProductCard = ({ product }: { product: IProduct }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div>
      <Card
        className={twMerge(
          "rounded-sm p-0 max-w-69 shadow-sm xl:w-69 hover:shadow-2xl hover:border-b-primary border-b-2 border-gray-100",
          "transition-all group duration-300 cursor-pointer"
        )}
      >
        <CardContent className="space-y-1 p-0 m-0 overflow-hidden">
          <div className="  overflow-hidden max-h-65">
            <Image
              unoptimized
              src={product.images?.[0]}
              alt={product?.title}
              width={200}
              height={200}
              className="w-full group-hover:scale-110 transition-all duration-500 object-cover"
            />
          </div>
          {/* title + desctroption */}
          <div>
            <p className=" truncate p-2 group-hover:text-primary transition-all duration-500 font-medium text-sm">
              {product?.title}
            </p>
            <p className=" text-xs text-gray-400 text-start overflow-hidden ps-2  w-[90%] truncate  ">
              {product?.description}
            </p>
          </div>
        </CardContent>
        <CardFooter className="p-2 m-0 flex items-center justify-between">
          <span className="font-semibold text-sm text-gray-900">
            ${product.price.toFixed(2)}
          </span>

          <Button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
            className={twMerge(
              "flex items-center gap-1 rounded-sm bg-primary px-3 py-1 text-xs font-medium text-white transition hover:bg-primary/90",
              "bg-transparent cursor-pointer border border-primary hover:border-primary/90 text-primary hover:bg-primary/10"
            )}
          >
            <ShoppingCart size={14} />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductCard;
