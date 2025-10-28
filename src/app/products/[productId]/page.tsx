'use client'
import { useState } from "react";
import { useParams } from "next/navigation";
import { useAuth } from "../../../../lib/context";
import { productRating } from "../ruesableFunctions";
import { Product } from "../../../../lib/types";
export default function ProductDetail() {
const {products,addToCart} = useAuth();

  const {productId} = useParams();
  const matchingProduct = products?.find(item => item.id === productId )
  console.log(matchingProduct)
  
  return (
    <main className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Left Column: Image Gallery */}
      <section className="flex flex-col gap-4">
        <img
          src={matchingProduct?.image}
          alt="Product"
          className="rounded-xl shadow-md object-contain w-full h-96"
        />
        <div className="flex gap-3 justify-center">
          <img
          src={matchingProduct?.image}
            alt="thumb"
            className="w-20 h-20 border border-yellow-500 rounded-md cursor-pointer"
          />
          <img
          src={matchingProduct?.image}
            alt="thumb"
            className="w-20 h-20 border border-gray-300 rounded-md hover:border-yellow-500 cursor-pointer"
          />
          <img
          src={matchingProduct?.image}
            alt="thumb"
            className="w-20 h-20 border border-gray-300 rounded-md hover:border-yellow-500 cursor-pointer"
          />
        </div>
      </section>

      {/* Middle Column: Product Info */}
      <section className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold text-gray-900">
         {matchingProduct?.title}
        </h1>

        <div className="flex items-center gap-2">
          <img src={productRating(matchingProduct?.rating)} alt="rating" className="w-28" />
          <span className="text-sm text-blue-600 hover:underline cursor-pointer">
            (132 ratings)
          </span>
        </div>

        <div className="text-3xl font-bold text-[#B12704]">{matchingProduct?.price}</div>
        <p className="text-green-700 font-semibold">{matchingProduct?.description}</p>

       
      </section>

      {/* Right Column: Buy Box */}
      <section className="border border-gray-300 rounded-xl p-4 shadow-md bg-white flex flex-col gap-4">
        <div className="text-2xl font-bold text-[#B12704]">{matchingProduct?.price}</div>
        <p className="text-green-700 text-sm font-semibold">
          FREE delivery by Tomorrow
        </p>

        <button className="bg-[#FFD814] hover:bg-[#F7CA00] text-black rounded-lg py-2 font-semibold" 
        onClick={() => {if (matchingProduct?.id)  {
      addToCart(matchingProduct.id)
    }
  }}>
          Add to Cart
        </button>

        <button className="bg-[#FFA41C] hover:bg-[#FA8900] text-black rounded-lg py-2 font-semibold">
          Buy Now
        </button>

        <p className="text-xs text-gray-500">
          Ships from and sold by
          <span className="text-blue-600 hover:underline cursor-pointer">
            {" "}Amazon.com
          </span>
        </p>
      </section>
    </main>
  );
}
