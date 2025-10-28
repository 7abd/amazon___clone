'use client'

import { Product } from "../../../lib/types"
import { createContext, useContext, useEffect, useState, ReactNode } from "react";



 export const productRating = (rating?: number): string => {
  if (rating == null) return '/rating/rating-0.png';

  const rounded = Math.round(rating * 2) / 2;
  const ratingKey = Math.floor(rounded * 10);

  return `/rating/rating-${ratingKey}.png`;
};

export function formatCurrency(priceCents:number) {
  return priceCents.toFixed(2);
}
