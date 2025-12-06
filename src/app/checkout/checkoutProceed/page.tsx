"use client";

import CheckoutProceed from "@/components/CheckoutProceed";
import {convertToSubcurrency} from '@/app/products/ruesableFunctions'
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useSearchParams } from "next/navigation";

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);


export default function Home() {

  const searchParams = useSearchParams();

  
  const amountString = searchParams.get("amount"); 
  const amount = Number(amountString ?? 0);        




  return (
    <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-blue-500 to-purple-500">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2">Amazon</h1>
        <h2 className="text-2xl">
          has requested
          <span className="font-bold"> ${amount}</span>
        </h2>
      </div>

      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: convertToSubcurrency(amount)?? 49,
          currency: "usd",
        }}
      >
        <CheckoutProceed amount={amount} />
      </Elements>
    </main>
  );
}