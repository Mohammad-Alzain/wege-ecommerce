"use client";
import { IProduct } from "@/data/products";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "./products-apis";
import { useSearchParams } from "next/navigation";

export const useProducts = () => {
  const searchParams = useSearchParams();
  const filters = {
    search: searchParams.get("search") || "",
    minPrice: searchParams.get("minPrice")
      ? Number(searchParams.get("minPrice"))
      : undefined,
    maxPrice: searchParams.get("maxPrice")
      ? Number(searchParams.get("maxPrice"))
      : undefined,
    categories: searchParams.get("categories")
      ? searchParams.get("categories")!.split(",")
      : [],
  };
  return useQuery<IProduct[]>({
    queryKey: ["products", filters],
    queryFn: () => fetchProducts(filters),
  });
};
