import LoadingComponent from "@/components/loadingComponent/Loading-Component";
import ProductComponent from "@/components/productComponent/Product-Component";
import { ProductTwo } from "@/lib/product/productTwo";
import Link from "next/link";
import { Suspense } from "react";

async function GetProducts() {
  const res = await fetch("http://localhost:3000/api/product", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export default function ProductPageInDashboard() {
  return (
    <div>
      <h3>Welcome to product page</h3>

      <Suspense fallback={<LoadingComponent />}>
        <ProductListRender />
      </Suspense>
    </div>
  );
}

async function ProductListRender() {
  const products = await GetProducts();

  return (
    <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 xl:grid-cols-3">
      {products?.data?.content?.map(
        ({ uuid, thumbnail, priceOut, name }: ProductTwo) => (
          <Link
            key={uuid}
            href={`/dashboard/products/${uuid}`}
            scroll={false}
            className="group"
          >
            <ProductComponent
              uuid={uuid}
              thumbnail={thumbnail}
              priceOut={priceOut}
              name={name}
            />
          </Link>
        )
      )}
    </div>
  );
}