import { IProduct } from "@/data/products";
import { useQuery } from "@tanstack/react-query";
import { fetchProductById } from "./product-apis";
import { useParams } from "next/navigation";

export const useProductById = () => {
  const { id } = useParams();
  return useQuery<IProduct>({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(String(id)),
  });
};
