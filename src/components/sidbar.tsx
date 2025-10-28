import { JSX } from "react"

export default function Sidebar():JSX.Element {

return(
   <main className="w-64 h-screen overflow-y-auto font-semibold text-[13px] text-gray-900 bg-white ">
  {/* Top section */}
  <section className="border-b border-gray-200">
    <div className="flex items-center gap-2 px-4 py-3 bg-[#37475a] text-white cursor-pointer">
      <img src="/profile-img.png" alt="" className="w-6 h-6" />
      <span>Hello, sign in</span>
    </div>
    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Trending</div>
    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Best sellers</div>
    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">New Releases</div>
    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Movers & shakers</div>
  </section>

  {/* Digital content & Devices */}
  <section className="border-b border-gray-200">
    <div className="px-4 py-2 bg-[#37475a] text-white cursor-pointer">Digital content & Devices</div>
    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Prime Video</div>
    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Amazon Music</div>
    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Echo & Alexa</div>
    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Amazon Nova</div>
    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Fire Tablets</div>
    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Fire TV</div>
    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Amazon Luna-Cloud Gaming</div>
    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Kindle E-readers & Books</div>
    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Audible Books & Originals</div>
    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Amazon Photos</div>
    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Amazon Appstore</div>
  </section>

  {/* Shop by Department */}
  <section className="border-b border-gray-200">
    <div className="px-4 py-2 bg-[#37475a] text-white font-bold cursor-default">Shop by Department</div>
    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Clothing, Shoes, Jewelry & Watches</div>
    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Whole Foods Market</div>
    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Books</div>
    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Movies, Music & Games</div>
    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">See all</div>
  </section>

  {/* Programs & Features */}
  <section className="border-b border-gray-200">
    <div className="px-4 py-2 bg-[#37475a] text-white font-bold cursor-default">Programs & Features</div>
    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Medical Care & Pharmacy</div>
    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Amazon Physical Stores</div>
    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Amazon Haul</div>
    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Amazon Business</div>
    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">See all</div>
  </section>

  {/* Help & Settings */}
  <section>
    <div className="px-4 py-2 bg-[#37475a] text-white font-bold cursor-default">Help & Settings</div>
    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Your Account</div>
    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">English</div>
    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">United States</div>
    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Sign in</div>
  </section>
</main>


)
}