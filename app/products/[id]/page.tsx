import { fetchProductById } from "@/modules/products/product-details/core/api/product-apis";
import ProductDetails from "@/modules/products/product-details/ui/pages/ProductDetails";

interface PageProps {
  params: {
    id: string | number;
  };
}

export default async function ProductPage({ params }: PageProps) {
  const pr = await params;
  const id = String(pr.id);

  const product = await fetchProductById(id);

  return (
    <main>
      <ProductDetails product={product} />;
    </main>
  );
}
