'use client'

import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Sidebar  from "@/components/sidbar";
import Background from "@/components/background";
import SubNav from "@/components/subNav";
import Products from "@/app/products/page"
import Link from "next/link";
import { supabase } from "../../lib/supabaseClient";
import { createContext,useState,useEffect, JSX } from "react";
import { Session } from '@supabase/supabase-js';
import { AuthProvider } from "../../lib/context";
export default function Home() {



const [session, setsession] = useState<Session | null>(null);

useEffect(() => {
  supabase.auth.getSession().then(({ data: { session } }) => {
    if (session) {
      setsession(session)
      
    }
})
},[])

  return (
   
    <div className="overflow-hidden relative" >

     <Background/>

    </div>
  
  );
}
