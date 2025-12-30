import { Spinner } from "@/components/ui/spinner";
import { fetchProducts } from "@/modules/home/core/api/products-apis";
import ProductsPage from "@/modules/home/ui/page/ProductsPage";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { Suspense } from "react";

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["products"],
    queryFn: () => fetchProducts(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-[70vh]">
            <Spinner className="text-2xl w-8 h-8 text-primary" />
          </div>
        }
      >
        <ProductsPage />
      </Suspense>
    </HydrationBoundary>
  );
}
