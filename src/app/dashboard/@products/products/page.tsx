
import Link from 'next/link'
import { Suspense, use } from 'react';
import ProductComponent from '@/components/productComponent/Product-Component';
import { ProductTwo } from '@/lib/product/productTwo';
import LoadingComponent from '@/components/loadingComponent/Loading-Component';
async function GetProducts() {
  try{
    const res = await fetch("http://localhost:3000/api/product" , {
      cache: 'no-store'
    })

    const products = await res?.json();
    console.log(products)
    return products;
  
  }catch(err){
      throw Error("fail to fetch")
  }
}
export default function ProductPageRoute() {

// using use hook to fetch data from server
 const products = use(GetProducts());
  return (
    <div>
<Link href="/dashboard/create">Create</Link>
      <Link href="/dashboard/edit">Edit</Link>


      <Suspense fallback={<LoadingComponent/>}>
        <ProductListRender/>
      </Suspense>
    </div>
    
 
  )
}

 function ProductListRender() {

// using use hook to fetch data from server
 const products = use(GetProducts());
  return (
    
  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 p-6">
  {products?.data?.content?.map(
    ({ uuid, thumbnail, priceOut, name }: ProductTwo) => (
      <ProductComponent
        key={uuid}
        uuid={uuid}
        thumbnail={thumbnail}
        priceOut={priceOut}
        name={name}
      />
    )
  )}
</div>
  )
}
