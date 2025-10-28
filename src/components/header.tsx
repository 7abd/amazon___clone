'use client'

import { JSX, useEffect } from "react"
import Link from "next/link"
import { supabase } from "../../lib/supabaseClient"
import { useAuth } from "../../lib/context"

export default function Header():JSX.Element {
const {user,cart}  = useAuth()
const userFirstName = user?.name.trim().split(' ')[0]

const cartItemSum = cart.reduce((acc,item) => 
    acc + item.quantity
,0)


    return (
   <header className="font-light flex flex-row justify-between gap-[30px] bg-black text-white fixed right-0 left-0 top-0 items-center px-4 py-2 shadow-md">
  {/* Left Section */}
  <div className="flex flex-row items-center gap-4">
    <Link href='/'>
    <div className="w-[100px] h-auto cursor-pointer hover:opacity-80 transition">
      <img src="/amazon-logo.png" alt="Amazon" />
    </div>
    </Link>
    <div className="hover:border-2 hover:border-[#ededed] px-2 py-1 rounded flex flex-row items-center cursor-pointer">
      <div className="w-[20px] h-auto mr-1">
        <img src="/position-icon.png" alt="Location" />
      </div>
      <span className="flex flex-col text-[10px] leading-tight">
        Deliver to {userFirstName} <span className="font-bold text-white">{user?.address}</span>
      </span>
    </div>
  </div>

  {/* Search Bar */}
  <form className="flex flex-row flex-1 max-w-[600px] mx-4">
    <button className="flex items-center gap-1 px-3 bg-[#f3f3f3] text-black rounded-l-md hover:bg-gray-200 transition">
      All <span className="text-xs">▼</span>
    </button>
    <input
      className="flex-1 px-3 py-2 text-white bg-[#232f3e] placeholder-white focus:outline-none"
      placeholder="Search Amazon"
    />
    <button className="px-4 bg-[#febd69] rounded-r-md hover:bg-[#f3a847] transition">
      <div className="w-[20px] h-auto">
        <img src="/search-icon.png" alt="Search" />
      </div>
    </button>
  </form>

  {/* Right Section */}
  <div className="flex flex-row items-center gap-6 text-sm">
    <div className="flex flex-row items-center gap-1 cursor-pointer">
      <img src="/us-flag.png" className="w-[30px] h-auto" alt="US Flag" />
      <span className="font-bold">EN</span>
    </div>
    <Link href='/sign'>
    <div className="cursor-pointer hover:underline">
      Hello, {userFirstName? userFirstName: 'sign in'}  <span className="block font-bold">Account & Lists</span>
    </div>
    </Link>
    <div className="cursor-pointer hover:underline">
      Returns <span className="block font-bold">& Orders</span>
    </div>
    <Link href='/checkout'>
    <div className="flex flex-row items-center gap-1 cursor-pointer relative">
      <img src="/shopping-cart-icon.png" className="w-[50px] h-auto" alt="Cart" />
      <span className="absolute top-2 left-4 text-[16px] text-[#febd69] text-xs font-bold rounded-full px-1">
        {cartItemSum}
      </span>
      <span className="font-bold absolute bottom-1 left-10 text-[12px]">Cart</span>
    </div>
    </Link>
  </div>
</header>

    )
}