import { ProductOne } from "@/lib/product/productOne"
import Image from "next/image"

export default async function GreetingPage() {

  const response = await fetch(
    "http://localhost:3000/api/greeting"
  )

  const products = await response.json()

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl font-bold mb-10 text-center">
        Fake Store Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {products.map((product: ProductOne) => (

          <div
            key={product.id}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 hover:scale-105 transition-all duration-300 shadow-lg"
          >

            <div className="relative h-52 w-full bg-white rounded-xl p-4">

              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain p-4"
              />

            </div>

            <div className="mt-5">

              <h1 className="text-lg font-semibold line-clamp-2">
                {product.title}
              </h1>

              <p className="text-zinc-400 text-sm mt-2 line-clamp-3">
                {product.description}
              </p>

              <div className="flex items-center justify-between mt-5">

                <p className="text-2xl font-bold text-green-400">
                  ${product.price}
                </p>

                <button
                  className="bg-white text-black px-4 py-2 rounded-xl font-medium hover:bg-zinc-200 transition"
                >
                  Buy
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </main>
  )
}