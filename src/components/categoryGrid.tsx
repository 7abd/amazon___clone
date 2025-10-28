"use client"

import { useAuth } from "../../lib/context"
import Link from "next/link";


export function CategoryGrid() {
  const { products } = useAuth()

  // Group products by category

  const productImg = (img:string) => {
   const prod =   products?.find(product =>  product.image === img )
      const title = prod?.title;
      return title? title.split(' ').slice(0,3).join(' '): undefined;
  }
  
  const productThumbs =
    products?.reduce<Record<string, string[]>>((acc, product) => {
      const category = product.category ?? "uncategorized"
      if (!acc[category]) acc[category] = []
      acc[category].push(product.image)
      return acc
    }, {}) ?? {}

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-5 ">
      {Object.entries(productThumbs).map(([category, images]) => {
        // take up to 4 random images for this category

        const removeDuplicated = images.filter((img,index) => 
          images.indexOf(img) === index
        )
        const shuffled = [...removeDuplicated].sort(() => 0.5 - Math.random())
        const selected = shuffled.slice(0, 4)
         
        return (
          <Link href={{pathname : '/products' ,query:{categ :category}}} key={category}>
          <div
            className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 "
          >
            <h2 className="text-lg font-bold mb-3">Shop {category} for less</h2>
            <div className="grid grid-cols-2 gap-3">
              {selected.map((img, i) => (
                <div key={i} className="flex flex-col items-start">
                  <img
                    src={img}
                    alt={`${category} item ${i + 1}`}
                    className="w-full h-32 object-cover rounded"
                  />
                  <span className="text-xs font-medium mt-1">{productImg(img)}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm text-blue-600 hover:text-orange-600 cursor-pointer">
              See more
            </p>
          </div>
          </Link>
        )
      })}
    </div>
  )
}

