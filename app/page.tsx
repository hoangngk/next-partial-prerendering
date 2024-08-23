import { Ping } from "#/components/ping";
import { RecommendedProductsSkeleton, RecommendedProducts } from "#/components/recommended-products";
import { ReviewsSkeleton, Reviews } from "#/components/reviews";
import { SingleProduct } from "#/components/single-product";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="space-y-8 lg:space-y-14">
      <SingleProduct />

      <Ping />

      <Suspense fallback={<RecommendedProductsSkeleton />}>
        <RecommendedProducts />
      </Suspense>

      <Ping />

      <Suspense fallback={<ReviewsSkeleton />}>
        <Reviews />
      </Suspense>
    </div>
  );
}
