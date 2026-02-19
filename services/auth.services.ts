// import prisma from "@/app/lib/prisma";
// import bcryp from "bcryptjs";
// import { generateTokens, verifyToken } from "@/app/lib/jwt";



// type userType = {
//      name : string
//      password: string
//      email: string
// }


// export async function register(data: userType) {
//     const existingUser  =  await prisma.user.findUnique(
//         { where: { email:  data.email}}
//     )
//     if (existingUser) {
//         throw new Error(" user already exist")
//     }

//     const hashPassword: string =await bcryp.hash(data.password, 10);
//     return prisma.user.create(
//        {
//         password: data.hashPassword
//        }
       
//     )
// }

// export userService = {
//      const
// }