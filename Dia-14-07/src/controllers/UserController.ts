import {User, users} from "../models/User";
import { Request, Response } from "express";
export class UserController{

    createUser(req:Request, res: Response){
        const {name, email, age, password} = req.body
        
        if(!name || !email || !age || !password){
            return res.status(400).json({message: 'name, email, age and password are necessary!'})
        }

        for(let i =0; i < users.length; i++){
            if(email === users[i].email){
                return res.status(409).json({message: 'This email already exists'})
            }
        }

        const id = users.length === 0 ? 1 : users.length +1
        const newUser:User = new User(id, name, email, age, password)
        users.push(newUser)
        return res.status(201).json({message: 'User create with success'})
    }

    getUsers(req:Request, res:Response){
        return res.status(200).json(users)
    }

    updateUser(req:Request, res:Response){
        const {name, email, age, password} = req.body
        const id = Number(req.params.id)

        if(!id || !name || !email || !age || !password){
            return res.status(400).json({message: 'id, name, email, age and password are necessary!'})
        }

        const user = users.find((user) => user.id === id)

        if(!user){
            return res.status(404).json({message : 'User not found'})
        }

        user.name = name
        user.email = email
        user.age = age
        user.password = password

        const safeUser = {...user, password}

        return res.status(200).json({
            Message : 'User updated with success',
            user: safeUser
        })
    }

    deleteUser(req: Request, res: Response) {
        const id = Number(req.params.id);
        
        if (!id) {
          return res.status(400).json({ message: 'O ID é obrigatório!' });
        }
        
        const userIndex = users.findIndex((u) => u.id === id);
        
        if (userIndex === -1) {
          return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        
        users.splice(userIndex, 1);
        
        
        return res.status(204).send();
      }
      
}