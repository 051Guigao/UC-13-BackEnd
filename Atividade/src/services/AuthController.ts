import {AuthService} from '../services/AuthService'
import { Request, Response } from 'express'
const service = new AuthService

export class AuthController{
    async login(req: Request, res: Response){
        const {email, password} = req.body
        await service.login(email, password)
        return res.status(200).json({message: 'Logged'})
    }
}