"use client"; 

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { supabase } from "./supabaseClient";
import type { Session } from "@supabase/supabase-js";
import { Product,User,AuthContextType,CartItem } from "./types";




const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [user,setUser]  =  useState <User | null>(null)

  const [products,setProducts] = useState <Product[]| null>(null); 

 const [cart,setCart] = useState <CartItem[]>([]);

 const addToCart = (productId:string) => {


  setCart(prevCart => {
    const itemExists = prevCart.find(item => item.id === productId);

    if (itemExists) {
      return prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      return [...prevCart, { id: productId, quantity: 1 }];
    }
  });
}

const usersData = async () => {
  const { data, error } = await supabase
  .from('users')
  .select('*')
if (error) {
  throw new Error(`Supabase error: ${error.message}`)


} else   {
 const matchedUser = data.find(u => session?.user.email === u.email)
 if (matchedUser) {
 setUser(matchedUser)

 }
}
}
const productSelect = async () => {
  const {data,error} = await supabase.from('products').select('*')
  if(error) {
    throw new Error(`supabase error: ${error.message}`)
  }else {
   setProducts(data)
  }
} 

useEffect(() => {
    usersData()
},[session])


  useEffect(() => {
    productSelect()


    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });


    return () => subscription.unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{addToCart,cart,products, session, loading, user,setCart }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside an AuthProvider");
  }
  return context;
}






