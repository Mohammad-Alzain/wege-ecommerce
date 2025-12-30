"use client";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../../core/api/products-queries";
import ProductsFilter from "../components/ProductsFilter";

const ProductsPage = () => {
  return (
    <div className=" flex flex-col items-center py-4   gap-16">
      <ProductsFilter />
      <ProductsList />
    </div>
  );
};

export default ProductsPage;
const ProductsList = () => {
  const { data: products, isPending } = useProducts();
  return (
    !isPending && (
      <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 p-4">
        {products?.map((product, key) => {
          return <ProductCard product={product} key={key} />;
        })}
      </div>
    )
  );
};
