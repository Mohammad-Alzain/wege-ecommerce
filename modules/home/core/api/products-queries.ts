import { IProduct } from "@/data/products";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts, ProductsFilters } from "./products-apis";

export const useProducts = (filters?: ProductsFilters) => {
  return useQuery<IProduct[]>({
    queryKey: ["products", filters],
    queryFn: () => fetchProducts(filters),
  });
};
