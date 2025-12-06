'use client'




 export const productRating = (rating?: number): string => {
  if (rating == null) return '/rating/rating-0.png';

  const rounded = Math.round(rating * 2) / 2;
  const ratingKey = Math.floor(rounded * 10);

  return `/rating/rating-${ratingKey}.png`;
};





export function formatCurrency(priceCents:number | undefined) {
  return priceCents?.toFixed(2);
}



export function convertToSubcurrency(amount: number | undefined, factor = 100) {
  if(amount)  return Math.round(amount * factor);

}
