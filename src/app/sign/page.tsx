'use client'

import { useState, FormEvent, ChangeEvent, useEffect } from "react";
import { supabase } from "../../../lib/supabaseClient";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "../../../lib/context";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  
  const router = useRouter();
  const { session, loading } = useAuth();

  useEffect(() => {
    if (localStorage.getItem("signUp_success") === "1") {
      setSuccess(true);
      localStorage.removeItem("signUp_success");
    }
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMsg(error.message);
      return;
    }

    router.push(".");
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  if (loading) {
    return (
      <main className="flex justify-center items-center min-h-screen bg-gray-100">
        <p>Loading...</p>
      </main>
    );
  }

  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-100">
      {!session ? (
        <div className="bg-white border border-gray-300 rounded-xl shadow-md p-8 w-full max-w-md">
          <h1 className="text-2xl font-semibold mb-6">Sign In</h1>

          {success && (
            <p className="bg-green-100 text-green-800 p-3 rounded-md mb-4">
              ✅ Account created successfully!
              <span className="block mt-2">Please verify your email</span>
            </p>
          )}

          <form onSubmit={handleSubmit}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full border border-gray-400 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="you@example.com"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />

            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full border border-gray-400 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="••••••••"
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />

            <button className="w-full bg-[#FFD814] hover:bg-[#F7CA00] text-black rounded-lg py-2 font-semibold mb-4">
              Sign in
            </button>
          </form>

          {errorMsg && (
            <p className="text-red-600 text-sm mb-4">{errorMsg}</p>
          )}

          <div className="text-sm text-blue-600 space-y-1">
            <p className="hover:underline cursor-pointer">Forgot your password?</p>
            <p className="hover:underline cursor-pointer">Need help?</p>
          </div>

          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-2 text-gray-500 text-sm">New to Amazon?</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <Link href="/sign/signup">
            <button className="w-full bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-lg py-2 font-semibold">
              Create your Amazon account
            </button>
          </Link>
        </div>
      ) : (
        <div className="bg-white border border-gray-300 rounded-xl shadow-md p-8 w-full max-w-md text-center">
          <h1 className="text-2xl font-semibold mb-4">
            Hello, {session?.user.email}
          </h1>
          <p className="text-gray-700 mb-6">
            You are signed in. to your account From here, you can manage your
            orders, preferences, and more.
          </p>

          <button
            onClick={handleSignOut}
            className="w-full bg-yellow-400 hover:bg-yellow-300 text-black rounded-lg py-2 font-semibold mb-6"
          >
            Sign Out
          </button>

          <p className="text-xs text-gray-500">
            Need help? Visit our{" "}
            <a href="/help" className="text-blue-600 hover:underline">
              Customer Service
            </a>{" "}
            page.
          </p>
        </div>
      )}
    </main>
  );
}
