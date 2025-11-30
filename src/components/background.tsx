'use client'
import { CategoryGrid } from "./categoryGrid";
import { JSX, ReactNode, useState } from "react";
import { useAuth } from "../../lib/context";

interface BackgroundProps {
  children?: ReactNode;
}

export default function Background({ children }: BackgroundProps): JSX.Element {


  return (
    <>
      <div className="relative w-full h-[500px] overflow-hidden">
        <img
          src="/backgroundImg.jpg"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent"></div>
      </div>

      <div className="relative -mt-48 z-10 ">
        
             {Array.from({ length: 10 }).map((_, i) => (
                  
            <CategoryGrid key={i} />
           
          ))}
      </div>
    </>
  );
}
