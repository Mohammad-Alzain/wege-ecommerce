import { NextRequest, NextResponse } from "next/server";
import { mockProducts } from "@/data/products";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const pr = await params;

  const product = mockProducts.find((p) => p.id.toString() === pr.id);

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}
