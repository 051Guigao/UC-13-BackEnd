import jwt from "jsonwebtoken"
import * as dotenv from "dotenv";

// JWT = JSON WEB TOKEN

dotenv.config()

interface Payload {
    id: number
    email: string
}
// Gera um token
export function generateToken(payload: Payload) {
    return jwt.sign(payload, process.env.JWT_SECRET!, {
        expiresIn: Number(process.env.JWT_EXPIRES_IN)
    })
}
// Verifica se um token é valido
export function verifyToken(token: string) {
    try {
        return jwt.verify(token, process.env.JWT_SECRET!)
    } catch {
        return null
    }
}
