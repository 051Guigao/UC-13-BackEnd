import jwt from "jsonwebtoken"
import * as dotenv from "dotenv";

dotenv.config()

interface Payload {
    id: number
    email: string
}

//Gera um token
//Ele precisa que passemos as informaço~es do usário(id, por exemplo)
//payLoad é a parte do token que carrega os dados do usário logado

export function generateToken(payload: Payload) {
    //Chama o método da biblioteca do JWT 'sign'
    //O sign precisa que passemos, nessa ordem:
    //1 - payload
    //2 - segredo, que vem pelo dotenv
    //3 - um objeto com o atributo 'expiresIn' que carrega a informação do dotenv
    return jwt.sign(payload, process.env.JWT_SECRET!, {
        expiresIn: Number(process.env.JWT_EXPIRES_IN || "1d")
    })
}


export function verifyToken(token: string) {
    //dentro do try catch
    //ele precisa que passemos nessa ordem
    //1 - o proprio token
    //2 - o segredo
    try {
        return jwt.verify(token, process.env.JWT_SECRET!)
    } catch {
        return null
    }
}