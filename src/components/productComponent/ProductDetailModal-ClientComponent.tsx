"use client";

import { useState } from "react";
import ProductDetailModalComponent from "./ProductDetailModalComponent";
import { ProductDetail } from "@/lib/product/Product-Detail-Type";


export default function ProductDetailModalClient({
  product,
}: {
  product: ProductDetail;
}) {
  const [open, setOpen] = useState(true);

  return (
    <ProductDetailModalComponent
      product={product}
      isOpen={open}
      onClose={() => setOpen(false)}
    />
  );
}