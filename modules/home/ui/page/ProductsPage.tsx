"use client";
import React from "react";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../../core/api/products-queries";
import ProductsFilter from "../components/ProductsFilter";

const ProductsPage = () => {
  const { data: products, isPending } = useProducts();
  console.log(products);

  return (
    !isPending && (
      <div className=" flex flex-col items-center py-4   gap-16">
        <ProductsFilter />
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
