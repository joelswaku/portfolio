import jwt from "jsonwebtoken";


const Secret =  process.env.JWT_SECRET as string;
 export const generateTokens = (userId: string) =>{
return jwt.sign({userId}, Secret,{
    expiresIn: "1d"
})
}


