'use client'

import { JSX, useEffect, useState } from "react"
import Link from "next/link"
import { supabase } from "../../lib/supabaseClient"
import { useAuth } from "../../lib/context"

export default function Header(): JSX.Element {
  const { user, cart } = useAuth()
  const [isLangOpen, setIsLangOpen] = useState(false);
const [selectedLang, setSelectedLang] = useState("EN");

  const [searchTerm, setSearchTerm] = useState('')
  const userFirstName = user?.name.trim().split(' ')[0]

  const cartItemSum = cart.reduce((acc, item) => acc + item.quantity, 0)

  const handleIputChanges = (e: any) => {
    setSearchTerm(e.target.value)
  }

  const languages = [
  { code: "EN", label: "English", flag: "/us-flag.png" },
  { code: "ES", label: "Español", flag: "/es-flag.png" },
  { code: "FR", label: "Français", flag: "/fr-flag.png" },
  { code: "DE", label: "Deutsch", flag: "/de-flag.png" },
  { code: "AR", label: "العربية", flag: "/ar-flag.png" },
];



  return (
    <header className="
      font-light flex flex-row justify-between gap-4 bg-black text-white
      fixed right-0 left-0 top-0 items-center px-4 py-2 shadow-md
      z-50
      flex-wrap md:flex-nowrap
    ">
      {/* Left Section */}
      <div className="flex flex-row items-center gap-3 min-w-[150px]">
        <Link href='/'>
          <div className="w-[80px] h-auto cursor-pointer hover:opacity-80 transition">
            <img src="/amazon-logo.png" alt="Amazon" />
          </div>
        </Link>

        
        <div className="hover:border-2 hover:border-[#ededed] px-2 py-1 rounded hidden sm:flex flex-row items-center cursor-pointer">
          <div className="w-[20px] h-auto mr-1">
            <img src="/position-icon.png" alt="Location" />
          </div>
          <span className="flex flex-col text-[10px] leading-tight">
            Deliver to {userFirstName} <span className="font-bold text-white">{user?.address}</span>
          </span>
        </div>
      </div>

      {/* Search Bar */}
      <form
        className="
          flex flex-row flex-1 max-w-full md:max-w-[600px] mx-2
          order-3 md:order-none w-full md:w-auto
        "
      >
        <button className="flex items-center gap-1 px-3 bg-[#f3f3f3] text-black rounded-l-md hover:bg-gray-200 transition text-xs sm:text-sm">
          All <span className="text-xs">▼</span>
        </button>

        <input
          className="
            flex-1 px-3 py-2 text-white bg-[#232f3e] placeholder-white focus:outline-none
            text-xs sm:text-sm
          "
          placeholder="Search Amazon"
          value={searchTerm}
          onChange={handleIputChanges}
        />

        <Link
          href={{ pathname: '/products', query: { search: searchTerm } }}
          className="px-4 bg-[#febd69] rounded-r-md hover:bg-[#f3a847] flex items-center justify-center transition"
        >
          <div className="w-[20px] h-auto">
            <img src="/search-icon.png" alt="Search" />
          </div>
        </Link>
      </form>

      {/* Right Section */}
      <div className="
        flex flex-row items-center gap-4 text-xs sm:text-sm
        min-w-fit
      ">
        <div className="hidden sm:flex flex-row items-center gap-1 cursor-pointer relative">
          

     <div className="hidden sm:flex flex-row items-center gap-1 cursor-pointer relative">
  <img 
    src={languages.find(l => l.code === selectedLang)?.flag || "/us-flag.png"} 
    className="w-[25px]" 
    alt="Selected Language Flag" 
  />

  <select
    name="language"
    id="language"
    value={selectedLang}
    onChange={(e) => setSelectedLang(e.target.value)}
    className="ml-2 block rounded-md border-gray-300 shadow-sm 
               focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-black text-white"
  >
    {languages.map((lang) => (
      <option key={lang.code} value={lang.code}>
        {lang.label} - {lang.code}
      </option>
    ))}
  </select>
</div>


           </div>
      


        <Link href='/sign'>
          <div className="cursor-pointer hover:underline hidden sm:block">
            Hello, {userFirstName ? userFirstName : 'sign in'}
            <span className="block font-bold">Account & Lists</span>
          </div>
        </Link>

        <div className="cursor-pointer hover:underline hidden sm:block">
          Returns <span className="block font-bold">& Orders</span>
        </div>

        <Link href='/checkout'>
          <div className="flex flex-row items-center gap-1 cursor-pointer relative">
            <img src="/shopping-cart-icon.png" className="w-[40px]" alt="Cart" />
            <span className="absolute top-1 left-4 text-[12px] text-[#febd69] font-bold rounded-full">
              {cartItemSum}
            </span>
            <span className="font-bold  absolute bottom-0 left-8 text-[10px]">Cart</span>
          </div>
        </Link>
      </div>
    </header>
  )
}
