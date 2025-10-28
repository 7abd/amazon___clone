import { supabase } from "./supabaseClient";
import { Product } from "./types";

export async function seedProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
 console.log(products)
    const insertPayload = products.map((p: Product) => ({
      title: p.title,
      description: p.description,
      price: p.price,
      category: p.category,
      image_url: p.image,
      stock_quantity: Math.floor(Math.random() * 100) + 1,
      rating: p.rating || 0,
      brand: "DemoBrand",
      tags: [p.category],
      discount_percent: Math.floor(Math.random() * 20),
    }));

    const { error } = await supabase.from("products").insert(insertPayload);

    if (error) {
      console.error("❌ Error inserting products:", error.message);
    } else {
      console.log("✅ Products inserted successfully!");
    }
  } catch (err) {
    console.error("❌ Unexpected error:", err);
  }
}

seedProducts();
