'use client'

import { Suspense } from 'react'
import Products from '@/components/products'

export default function ProductsPage() {
  return (
    <Suspense fallback={<div>Loading products...</div>}>
      <Products />
    </Suspense>
  )
}
