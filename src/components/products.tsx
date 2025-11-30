'use client'

import { JSX } from "react";
import Link from "next/link";
import { useAuth } from "../../lib/context";
import { productRating } from "@/app/products/ruesableFunctions";
import { useSearchParams } from "next/navigation";
import { formatCurrency } from "@/app/products/ruesableFunctions";
import { Product } from "../../lib/types";
type CartItem ={
    id: string | undefined;
    quantity:number;
}



export default function Products(): JSX.Element {
const Params = useSearchParams()
const categ= Params.get('categ')
const searchTerm = Params.get('search')

  const {products,addToCart} = useAuth()



const categorizedProducts = categ
  ? products?.filter(product => product.category === categ)
  : [];

const searchProducts = searchTerm
  ? products?.filter(product =>
      Object.values(product).some(value =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
  : [];


const activeProducts =
  searchProducts?.length
    ? searchProducts
    : categorizedProducts?.length
      ? categorizedProducts
      : products;



const displayedProducts = (prods: Product[] | null) => {
  return prods?.map((product, i) => (
    <div
      key={product.id ?? i} 
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
          <p className="text-lg font-bold text-red-600">
            {formatCurrency(product.price)}
          </p>
        </div>
      </Link>

      <button
        className="bg-[#FFD814] hover:bg-[#F7CA00] text-black text-sm font-semibold rounded-md py-2"
        onClick={() => {
          if (product.id) {
            addToCart(product.id);
          }
        }}
      >
        Add to Cart
      </button>
    </div>
  ));
};


  return (
    <div className="px-6 py-8">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6 items-stretch">
 
        {displayedProducts(activeProducts)}
         
        
      </div>
    </div>
  );
}
