import { ProductCardComponent } from "@/components/product/ProductComponent";
import { Product } from "@/lib/product/product-type";

async function getProducts(): Promise<Product[]> {
  const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/posts`);

  const res = await data.json();

  return res.posts;
}

export default async function ProductPage() {
  const products = await getProducts();

  return (
    <main className="min-h-screen bg-neutral-100 px-6 py-16 text-black">
      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-3 lg:grid-cols-3">
        {products.map(({id , title , body}:Product) => (
          <ProductCardComponent
            key={id}
            id={id}
            title={title}
            body={body}
          />
        ))}
      </div>
    </main>
  );
}