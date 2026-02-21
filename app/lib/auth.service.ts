
import prisma from "./prisma"
import bcrypt from "bcryptjs"
import { generateTokens} from "@/app/lib/jwt"
import next from "next"
import { NextResponse } from "next/server"
import { redirect } from "next/navigation"


export async function signup(
  name: string,
  email: string,
  password: string
) {
  const existing = await prisma.user.findUnique({
    where: { email },
  })

  if (existing) {
    throw new Error("User already exists")
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  })

  // ✅ Generate JWT token
  const token = generateTokens(user.id)
//   console.log(token);
  
  // ✅ Return BOTH user + token
  return { user, token }
}

export async function login(email: string , password: string) {
    const user =  await prisma.user.findUnique(
        {
            where: {email}
        }
    )

  if(!user ){
    throw new Error("invalid Credentials");

   
    
  }
     const isMatch = await bcrypt.compare(password ,user.password);
     if (!isMatch) {
    throw new Error("invalid credential")
     }
     const token =   generateTokens(user.id)
     //redirect("/profil")

     return{
        user: {
            id: user?.id,
            email: user?.email,
            name: user?.name
        },
        token
     }
}


export async function LOGOUT() {
  const res = NextResponse.json({ message: "Logged out" })

  res.cookies.set("accessToken", "", {
    expires: new Date(0),
    path: "/",
  })

  return res
}
