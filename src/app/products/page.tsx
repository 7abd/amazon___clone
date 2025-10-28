'use client'

import { JSX } from "react";
import Link from "next/link";
import { useAuth } from "../../../lib/context";
import { Product } from "../../../lib/types";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { productRating } from "./ruesableFunctions";
import { formatCurrency } from "./ruesableFunctions";
import Useparam from "@/components/useparam";
type CartItem ={
    id: string | undefined;
    quantity:number;
}
export default function Products(): JSX.Element {
  const categParams = Useparam()
const category = categParams.get('categ')
  const {products,addToCart} = useAuth()
const categorizedProducts = products?.filter(product => 
  product.category === category
)
  return (
    <div className="px-6 py-8">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6 items-stretch">
 
        {categorizedProducts?.map((product, i) => (
           
      <div
  key={i}
  className="
    h-full
    bg-white border border-gray-200 rounded-xl p-4 shadow-sm
    flex flex-col justify-between gap-3
    hover:shadow-lg hover:border-gray-300 transition
  "
>
  <Link href={`/products/${product.id}`} className="flex-grow">
    <div className="flex flex-col gap-3">
      <img
        src={product.image}
        alt={product.title}
        className="h-48 object-contain mx-auto"
      />
      <p className="text-sm text-gray-800 line-clamp-3">{product.title}</p>
      <img
        src={productRating(product.rating)}
        alt="rating stars"
        className="w-24"
      />
      <p className="text-lg font-bold text-red-600">{formatCurrency(product.price)}</p>
    </div>
  </Link>

  <button
    className="bg-[#FFD814] hover:bg-[#F7CA00] text-black text-sm font-semibold rounded-md py-2"
    onClick={() => {if (product.id)  {
      addToCart(product.id)
    }
    }}
  >
    Add to Cart
  </button>
</div>


         
        ))}
      </div>
    </div>
  );
}
