import { IProduct } from "@/data/products";

export const fetchProductById = async (
  id?: number | string
): Promise<IProduct> => {
  console.log("id in the fetchProductById:", id);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${id}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
};
