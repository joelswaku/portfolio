import { login } from "@/app/lib/auth.service";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
try {
    const { email , password } = await req.json();
    const { user , token } = await login( email,password);

const res  = NextResponse.json({ message: " login successful", user})
   

res.cookies.set("access token ", token,{
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24,
    
})
return res

// ✅ Secure Cookie (Production Ready)
// res.cookies.set("accessToken", token, {
//   httpOnly: true,
//   secure: process.env.NODE_ENV === "production",
//   sameSite: "strict",
//   path: "/",
//   maxAge: 60 * 60 * 24, // 1 day



// })
} catch (error) {
   return NextResponse.json(
    { error: error instanceof Error ? error.message : "Login error" },
          { status: 401 }
   ) 
}  
}