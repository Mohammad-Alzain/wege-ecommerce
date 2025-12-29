import { IProduct } from "@/data/products";

export interface IProductsFilters {
  search?: string;
  categories?: string[];
  minPrice?: number;
  maxPrice?: number;
}

export const fetchProducts = async (
  filters?: IProductsFilters
): Promise<IProduct[]> => {
  const params = new URLSearchParams();

  if (filters?.search) params.set("search", filters.search);
  if (filters?.categories)
    params.set("categories", JSON.stringify(filters.categories));
  if (filters?.minPrice !== undefined)
    params.set("minPrice", String(filters.minPrice));
  if (filters?.maxPrice !== undefined)
    params.set("maxPrice", String(filters.maxPrice));

  const res = await fetch(`/api/products?${params.toString()}`);

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
};
