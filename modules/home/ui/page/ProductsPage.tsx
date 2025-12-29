"use client";
import React from "react";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../../core/api/products-queries";

const ProductsPage = () => {
  const { data: products, isPending } = useProducts();
  console.log(products);

  return (
    !isPending && (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 p-4">
          {products?.map((product, key) => {
            return <ProductCard product={product} key={key} />;
          })}
        </div>
      </div>
    )
  );
};

export default ProductsPage;
