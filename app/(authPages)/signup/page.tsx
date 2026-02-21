"use client";

import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

import { useRouter } from "next/navigation";


import React, { ChangeEvent, useEffect, useRef, useState } from "react";

export default function Signup() {
    const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);


  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name  || !email || !password) {
      setError("all field are required *");
      return;
    }
    setError("");
    setLoading(false);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({name, email, password }),
      });

      const data = await res.json();
      console.log(data);

      if (!res.ok) {
        setError(" invalid credential");

        setLoading(false);
        return;
      }
     
      router.push("/login");
     
    } catch (error) {
     setError("something went wrong")
    }
  }

  return (
    <div className="min-h-screen bg-blue-200 items-center flex justify-center ">
      <form
        onSubmit={handleSubmit}
        className=" border p-5 md:w-md bg-blue-100 flex flex-col justify-center"
      >
        <p className="items-center justify-center flex font-bold text-2xl mb-3.5">
          signup
        </p>
        {error && <p className="text-red-900 m-2"> {error}</p>}
        <div className="bg-white   mb-4 border">
          <input
            className=" p-2.5 w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="enter your name"
            ref={inputRef}
          />
        </div>
        <div className="bg-white   mb-4 border">
          <input
            className=" p-2.5 w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="enter your email"
            ref={inputRef}
          />
        </div>
        
        <div className="bg-white border flex relative">
          <input
            className=" p-2.5 w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={show ? "password" : "text"}
            placeholder="enter your password"
            ref={inputRef}
          />
          <button
            className="cursor-pointer absolute right-0 top-1/4 pr-2"
            onClick={() => setShow((prev) => !prev)}
          >
            {show ? <Eye /> : <EyeOff />}
          </button>
        </div>

        <button
          type="submit"
          className="text-2xl border bg-blue-100 mt-3.5 cursor-pointer
       hover:bg-black hover:text-blue-100 font-bold transition-all p-1.5"
        >
          {loading ? <p>loading...</p> : <p>create an account </p>}
        </button>
        <div className="flex justify-between mt-2">
          <p className="hover:underline cursor-pointer">
            {" already an account ?"}{" "}
          </p>
          <Link href={"/login"} className="hover:underline">
            login
          </Link>
        </div>
      </form>
    </div>
  );
}
