import { Request, Response } from "express";
import { CategoryService } from "../services/CategoryService";
import { Category } from "../models/Category";

const service = new CategoryService

export class CategoryController{

    async list(req: Request, res: Response){
       
            const categories = await service.list()
            return res.status(201).json({categories})
        
        
    }

    async create(req: Request, res: Response){
      
            const {name} = req.body
            const category = await service.create(name)
            return res.status(201).json({
            message: 'Categoria criada com sucesso', 
            category: Category})
        

    }
}