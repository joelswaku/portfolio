
"use client";

import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const emailRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError("Invalid credentials");
        setLoading(false);
        return;
      }

      router.push("/dashboard");
    } catch (err) {
      setError("Something went wrong");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-blue-200 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="border p-5 w-96 bg-blue-100 flex flex-col"
      >
        <p className="text-center font-bold text-2xl mb-4">Login</p>

        {error && (
          <p className="text-red-900 mb-3 text-center">{error}</p>
        )}

        {/* EMAIL */}
        <div className="bg-white mb-4 border">
          <input
            ref={emailRef}
            className="p-2.5 w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
          />
        </div>

        {/* PASSWORD */}
        <div className="bg-white border relative mb-4">
          <input
            className="p-2.5 w-full pr-10"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={show ? "text" : "password"}
            placeholder="Enter your password"
          />

          <button
            type="button"
            className="absolute right-2 top-1/2 -translate-y-1/2"
            onClick={() => setShow((prev) => !prev)}
          >
            {show ? <Eye size={20} /> : <EyeOff size={20} />}
          </button>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="text-2xl border bg-blue-100 mt-3.5 cursor-pointer
          hover:bg-black hover:text-blue-100 font-bold transition-all p-1.5"
        >
          {loading ? "Loading..." : "Login"}
        </button>

        <div className="hover:underline flex justify-between mt-3 text-sm">
          <p>{"Don't have an account?"}</p>
          <Link href="/signup" className="hover:underline">
            Signup
          </Link>
        </div>
      </form>
    </div>
  );
}














// "use client";

// import { Eye, EyeOff } from "lucide-react";
// import Link from "next/link";
// //import router from "next/router";
// import { useRouter } from "next/navigation";


// import React, { ChangeEvent, useEffect, useRef, useState } from "react";


// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading , setLoading] = useState(false)
//   const [show, setShow] = useState<boolean>(false);

//   // const inputRef = useRef <HTMLInputElement>( null)
//   const router = useRouter();
 

//   async function handleSubmit(e: React.FormEvent) {

   
   
//     e.preventDefault();
//   if (!email || !password) {
//     setError("all field are required *")
//     return
//   }
//     setError("");
//     setLoading(false)
//     try {
//       const res = await fetch("/api/auth/login", {
//         method: "POST",
//         headers: {
//           "content-type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });
      
//       const data = await res.json();
//       console.log(data);
      
//       if(!res.ok){
      
//         setError(" invalid credential");
       
        
  

//         setLoading(false)
//         return
//       } 
//            router.push("/dashboard")
//     } catch (error) {
//     setError("something went wrong")
//     }
   
//   }
 

 

//   return (
//     <div className="min-h-screen bg-blue-200 items-center flex justify-center ">
      
//       <form onSubmit={handleSubmit} className=" border p-5 md:w-md bg-blue-100 flex flex-col justify-center">
//       <p className="items-center justify-center flex font-bold text-2xl mb-3.5">login</p>
//       { error && 
//       <p className="text-red-900 m-2"> {error}</p>
//       }
//       <div  className="bg-white   mb-4 border">
//         <input
//         className=" p-2.5 w-full"
//           value={email}
//           onChange={(e) =>
//             setEmail(e.target.value)
//           }
//           type="email"
//           placeholder="enter your email"
        
//         />
//       </div>
//       <div className="bg-white border flex relative">
   
//         <input
//           className=" p-2.5 w-full"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           type={ !show ? "password"  : "text" } 
//           placeholder="enter your password"
         
       
        
      
//         />
//         <button  className="cursor-pointer absolute right-0 top-1/4 pr-2"  onClick={() => setShow(prev => !prev)}>{show?   <Eye /> :     <EyeOff />}</button>
//       </div>
    
//       <button type="submit" className="text-2xl border bg-blue-100 mt-3.5 cursor-pointer
//        hover:bg-black hover:text-blue-100 font-bold transition-all p-1.5">{loading ? 
//         <p>loading...</p> :
        
//         <p>login</p>
//        }</button>
//         <div className="flex justify-between mt-2"><p className="hover:underline cursor-pointer">{" don't have an account ?"} </p>
//          <Link href={"/signup"} className="hover:underline">signup</Link>
//         </div>
//       </form>
     
//     </div>
//   );
// }

