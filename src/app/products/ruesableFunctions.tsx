'use client'

import { Product } from "../../../lib/types"
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { useSearchParams } from "next/navigation";



 export const productRating = (rating?: number): string => {
  if (rating == null) return '/rating/rating-0.png';

  const rounded = Math.round(rating * 2) / 2;
  const ratingKey = Math.floor(rounded * 10);

  return `/rating/rating-${ratingKey}.png`;
};

export function formatCurrency(priceCents:number) {
  return priceCents.toFixed(2);
}

export function useparam() {
const categParams = useSearchParams()

return categParams;
}