'use client'

import { useAuth } from "../../../lib/context";
import { formatCurrency } from "../products/ruesableFunctions";
import { useState } from "react";

export default function CheckoutPage() {
  const {cart,products,setCart} = useAuth();

  const removeItem = (id:string) => {
     setCart(prev => prev.filter(item => item.id !== id))
  }

const cartProducts = products?.filter(product => 
  cart.some(item => 
    item.id === product.id
  ) 
).map(product => {
   const CartItem = cart.find(item => item.id === product.id)

   return   {
    ...product,
     quantity:CartItem?.quantity
    };
})

const totalPrices = cartProducts?.reduce((acc,prod) => 
  acc + (prod.price *(prod.quantity?? 1) )
,0)
  return (
    <main className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
      <section className="lg:col-span-2 space-y-6">
        <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>


     
        { cartProducts?.map((product ,index) => {
           return(
            
        <div key={index} className="flex gap-6 border-b pb-4">
          <img
            src={product.image}
            alt="Product image"
            className="w-32 h-32 object-contain rounded-md"
          />

          <div className="flex flex-col justify-between w-full">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
               {product.title}
              </h2>
              <p className="text-sm text-gray-600">
               {product.description?.split(',').slice(0,1)}
              </p>
            <p className="mt-2 mb-2"> quantity:<span  className="text-[blue] font-semibold ml-2">{product.quantity} </span> </p>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-[#B12704]">{formatCurrency(product.price)} $</span>
              <button onClick={() => {
                if(product.id){
                  removeItem(product.id)}}} className="text-blue-600 text-sm hover:underline">
                Remove
              </button>
            </div>
          </div>
        </div>
           )
        })
        
}
      </section>

      <section className="border border-gray-300 rounded-xl p-4 shadow-md h-fit bg-white flex flex-col gap-4">
        <h2 className="text-lg font-semibold">Order Summary</h2>
        <div className="flex justify-between text-sm">
          <span>Subtotal (2 items)</span>
          <span> {totalPrices}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Shipping</span>
          <span className="text-green-700 font-semibold">FREE</span>
        </div>
        <div className="border-t pt-2 flex justify-between text-lg font-bold">
          <span>Total</span>
          <span>{totalPrices}</span>
        </div>

        <button className="bg-[#FFD814] hover:bg-[#F7CA00] text-black rounded-lg py-2 font-semibold">
          Proceed to Checkout
        </button>
      </section>
    </main>
  );
}
