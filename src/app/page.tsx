'use client'

import Background from "@/components/background";
import { supabase } from "../../lib/supabaseClient";
import {useState,useEffect, } from "react";
import { Session } from '@supabase/supabase-js';
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
