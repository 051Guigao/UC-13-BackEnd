import { omit } from "zod/mini";
import { AppDataSource } from "../config/dataSource";
import { UnauthorizeError } from "../errors";
import { User } from "../models/User";
import { comparePassword } from "../utils/comparePassword";
import { generateToken } from "../utils/jwt";

const repo = AppDataSource.getRepository(User)

export class AuthService{
    async login(email: string, password: string){
        const user = await repo.findOneBy({email})

        if(!user){
            throw new UnauthorizeError('Invalid Credentials')
        }

        const passwordMatch = await comparePassword(password, user.password)

        if(!passwordMatch){
            throw new UnauthorizeError('Invalid Credentials')
        }

        const token = generateToken({
            id: user.id,
            email: user.email
        })

        return passwordMatch
}
}