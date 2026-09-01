import jwt from "jsonwebtoken"
import * as dotenv from "dotenv";

dotenv.config()

interface Payload {
    id: number
    email: string
}

export function generateToken(payload: Payload) {
    return jwt.sign(payload, process.env.JWT_SECRET!, {
        expiresIn: Number(process.env.JWT_EXPIRES_IN)
    })
}

export function verifyToken(token: string) {
    try {
        return jwt.verify(token, process.env.JWT_SECRET!)
    } catch {
        return null
    }
}
