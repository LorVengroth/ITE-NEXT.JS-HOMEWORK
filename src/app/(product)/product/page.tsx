import { ProductCardComponent } from "@/components/product/ProductComponent";
import { Product } from "@/lib/product/product-type";
import Link from "next/link";

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
          <Link 
          key={id}
          href={`/product/${id}`} >
            <ProductCardComponent
            key={id}
            id={id}
            title={title}
            body={body}
          />
          </Link>
          
        ))}
      </div>
    </main>
  );
}
