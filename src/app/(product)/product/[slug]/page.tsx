import { ProductCardComponent } from "@/components/product/ProductComponent";
import { Product } from "@/lib/product/product-type";

export default async function ProductPage({
  params,
}: {params:Promise<{slug:string}>}) {


    const {slug} = await params ;
  
    async function Product() {
        const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/posts/${slug}`)
        const res =  data.json();
        return res ;
    }

    const pro:Product = await Product();

  return (
    <main className="min-h-screen bg-neutral-100 px-6 py-16 text-black">
      <ProductCardComponent
                  key={pro.id}
                  id={pro.id}
                  title={pro.title}
                  body={pro.body}
    />
    </main>
  );
}
