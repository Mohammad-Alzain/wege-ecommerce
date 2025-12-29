import { NextRequest, NextResponse } from "next/server";
import { mockProducts } from "@/data/products";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const search = searchParams.get("search")?.toLowerCase();
  const category = searchParams.get("category");
  const minPrice = Number(searchParams.get("minPrice"));
  const maxPrice = Number(searchParams.get("maxPrice"));

  let filteredProducts = [...mockProducts];
  if (!!search) {
    filteredProducts = filteredProducts.filter((product) =>
      product.title.toLowerCase().includes(search)
    );
  }
  if (!!category) {
    filteredProducts = filteredProducts.filter((product) =>
      product.category.includes(category)
    );
  }
  if (!isNaN(minPrice) && !!minPrice) {
    filteredProducts = filteredProducts.filter(
      (product) => product.price >= minPrice
    );
  }
  if (!isNaN(maxPrice) && !!maxPrice) {
    filteredProducts = filteredProducts.filter(
      (product) => product.price <= maxPrice
    );
  }

  return NextResponse.json(filteredProducts);
}
