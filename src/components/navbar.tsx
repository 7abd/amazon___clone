import { JSX } from "react"


export default function Navbar():JSX.Element {

return(
<nav className="bg-[#232f3e] text-white font-semibold mt-[60px] text-[13px]">
  <div className="flex items-center justify-between px-4 py-2 whitespace-nowrap">
    
    {/* All (Hamburger) */}
    <div className="flex items-center gap-1 px-2 py-1 hover:bg-[#37475a] rounded cursor-pointer">
      <img src="/hamburger-menu.png" alt="menu" className="w-5 h-auto" />
      <span className="mr-4">All</span>
    </div>

    {/* Links */}
    <div className="flex-1 flex justify-around">
      <div className="px-2 py-1 hover:bg-[#37475a] rounded cursor-pointer">Amazon Haul</div>
      <div className="px-2 py-1 hover:bg-[#37475a] rounded cursor-pointer">
        Medical Care <span className="text-xs">▼</span>
      </div>
      <div className="px-2 py-1 hover:bg-[#37475a] rounded cursor-pointer">Luxury Stores</div>
      <div className="px-2 py-1 hover:bg-[#37475a] rounded cursor-pointer">Best Sellers</div>
      <div className="px-2 py-1 hover:bg-[#37475a] rounded cursor-pointer">Amazon Basics</div>
      <div className="px-2 py-1 hover:bg-[#37475a] rounded cursor-pointer">New Releases</div>
      <div className="px-2 py-1 hover:bg-[#37475a] rounded cursor-pointer">
        Groceries <span className="text-xs">▼</span>
      </div>
      <div className="px-2 py-1 hover:bg-[#37475a] rounded cursor-pointer">
        Prime <span className="text-xs">▼</span>
      </div>
      <div className="px-2 py-1 hover:bg-[#37475a] rounded cursor-pointer">Today&apos;s  Deals</div>
      <div className="px-2 py-1 hover:bg-[#37475a] rounded cursor-pointer">Registry</div>
      <div className="px-2 py-1 hover:bg-[#37475a] rounded cursor-pointer">Customer Service</div>
      <div className="px-2 py-1 hover:bg-[#37475a] rounded cursor-pointer">
        Gift Cards <span className="text-xs">▼</span>
      </div>
      <div className="px-2 py-1 hover:bg-[#37475a] rounded cursor-pointer">Smart Home</div>
      <div className="px-2 py-1 hover:bg-[#37475a] rounded cursor-pointer">Music</div>
    </div>
  </div>
</nav>

    
)
}