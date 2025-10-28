import type { Session } from "@supabase/supabase-js";


export type Product = {
  id?: string; 
  title: string;
  description?: string;
  price: number;
  category?: string;
  image: string;
  stock_quantity?: number;
  rate?: number;
  rating?:number;
  brand?: string;
  tags?: string[];
  discount_percent?: number;
  created_at?: string;
  updated_at?: string;
};

export type CartItem = {
    id: string;
    quantity:number;
}


export type AuthContextType = {
  session: Session | null;
  loading: boolean;
  user: User | null;
  products: Product[] | null;
  addToCart: (productId: string) => void;
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
};


export type User = {
  id: string          
  name: string        
  email: string       
  address: string     
  created_at: string 
  phone:string
}
