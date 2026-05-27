import { ProductTwo } from "@/lib/product/productTwo";
import Image from "next/image";


export default function ProductComponent({
  uuid , thumbnail, priceOut , name
}:ProductTwo) {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition hover:shadow-xl">

      {/* Thumbnail */}
      <div className="h-56 w-full bg-gray-100">
        <Image
          src={thumbnail}
          alt={uuid}
          width={200}
          height={200}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="space-y-4 p-5">

        {/* Name + Price */}
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">
            {name}
          </h2>

          <span className="rounded-lg bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
            ${priceOut}
          </span>
        </div>

        {/* Actions */}
        <div className="flex gap-3">

          <button className="flex-1 rounded-xl bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            Buy Now
          </button>

          <button className="rounded-xl border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100">
            Details
          </button>

        </div>
      </div>
    </div>
  );
}