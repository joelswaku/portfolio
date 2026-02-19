import jwt from "jsonwebtoken";
// export type jwtPayload = {
// id: string
// //email: string
// //name: string
// }


const Secret =  process.env.JWT_SECRET as string;
 export const generateTokens = (userId: string) =>{
return jwt.sign({userId}, Secret,{
    expiresIn: "1d"
})
}




// import jwt from "jsonwebtoken"

// const SECRET = process.env.JWT_SECRET!

// export function generateToken(userId: string) {
//   return jwt.sign(
//     { userId }, // ✅ payload object
//     SECRET,
//     { expiresIn: "1d" }
//   )
// }

// export function verifyToken(token: string) {
//   return jwt.verify(token, SECRET) as { userId: string }
// }
