'use client'


import { useState } from "react";
import { supabase } from "../../../../lib/supabaseClient";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React from "react";

export default function SignUpPage() {

const [userInfo,setUserInfo] = useState({name:'' , phone:'',address:'', email:'',password:'',confPassword:''})
const [errorMsg ,setErrorMsg] = useState <string | null>(null);
const router = useRouter();


 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
  setUserInfo((prev) => ({ ...prev, [name]: value }));
  };
 console.log(userInfo)

 const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (userInfo.confPassword !== userInfo.password) {
    setErrorMsg("Passwords do not match!");
    return;
  } 
  if(userInfo.password.length < 6) {
    setErrorMsg('password must be at least 6 charachters.')
    return;
  } 
  if (!/\d|[^a-zA-Z]/.test(userInfo.password)) {
    setErrorMsg("Password must contain a number or special character");
    return; 
  }
  

  if (!userInfo.email.includes("@")) {
    setErrorMsg("Please enter a valid email");
    return; 
  }

    const {error,data} = await  supabase.from('users')
  .insert({name:userInfo.name,phone:userInfo.phone ,
     address:userInfo.address, email:userInfo.email})

    if (error) {
    setErrorMsg(` error reading your info : ${error.message}`)
    return;
  } 


const {error:authError,data:authData} = await supabase.auth.
signUp({email:userInfo.email,password:userInfo.password})
if(authError) {
  setErrorMsg(`authentication error: ${authError.message}`)
  return;
} else {
  setErrorMsg(null);
    router.push('.')
    localStorage.setItem('signUp_success' , '1')

}
 }
  

  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white border border-gray-300 rounded-xl shadow-md p-8 w-full max-w-md">
         
        <h1 className="text-2xl font-semibold mb-6">Create account</h1>
 
 <form onSubmit={handleSubmit}>
        {/* Name */}

        <label className="block text-sm font-medium text-gray-700 mb-1">Your name</label>
        <input
          type="text"
          name='name'
          value={userInfo.name}
          onChange={handleChange}
          className="w-full border border-gray-400 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          placeholder="First and last name"
        />

        {/* Mobile Number */}
        <label className="block text-sm font-medium text-gray-700 mb-1">Mobile number</label>
        <input
          type="tel"
          name="phone"
          value={userInfo.phone}
          onChange={handleChange}
          className="w-full border border-gray-400 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          placeholder="(+212) 612-345-678"
        />
        <label className="block text-sm font-medium text-gray-700 mb-1">Your address</label>
        <input
          type="text"
          name='address'
          value={userInfo.address}
          onChange={handleChange}
          className="w-full border border-gray-400 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          placeholder="your full address"
        />

        {/* Email */}
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={userInfo.email}
          onChange={handleChange}
          className="w-full border border-gray-400 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          placeholder="you@example.com"
        />

        {/* Password */}
        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
        <input
          type="password"
          name="password"
          value={userInfo.password}
          onChange={handleChange}
          className="w-full border border-gray-400 rounded-md px-3 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          placeholder="At least 6 characters"
        />
        <p className="text-xs text-gray-600 mb-4">
          Passwords must be at least 6 characters and contain a number or special character.
        </p>

        {/* Re-enter Password */}
        <label className="block text-sm font-medium text-gray-700 mb-1">Re-enter password</label>
        <input
          type="password"
          name="confPassword"
         value={userInfo.confPassword}
          onChange={handleChange}
          className="w-full border border-gray-400 rounded-md px-3 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          placeholder="Confirm password"
        />
         {/* error msg*/} 

      {errorMsg && <p className="text-red-600 text-sm mb-4">{errorMsg}</p>}
        {/* Sign Up Button */}

          
          <button type="submit" className="w-full bg-[#FFD814] hover:bg-[#F7CA00] text-black rounded-lg py-2 font-semibold mb-6">
            Create your Amazon account
          </button>
    
        <p className="text-xs text-gray-500">
          By creating an account, you agree to Amazon 
          <span className="text-blue-600 hover:underline cursor-pointer"> Conditions of Use</span>
          and
          <span className="text-blue-600 hover:underline cursor-pointer"> Privacy Notice</span>.
        </p>

        <div className="border-t border-gray-300 my-6"></div>

        <p className="text-sm">
          Already have an account?
          <Link href='.'>
          <span className="text-blue-600 hover:underline cursor-pointer"> Sign in</span>
          </Link>
        </p>
        </form>
      </div>
    </main>
  );
}
