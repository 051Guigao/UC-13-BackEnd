import { Request, Response } from "express";
import { ProductService } from "../services/ProductService";
import { Product } from "../models/Product";

const service = new ProductService

export class ProductController{

    async list(req: Request, res: Response){
      
            const products = await service.list()
        return res.status(200).json({products})
       
    }

    async create(req: Request, res: Response){
        
            const {name, description, price, categoryId} = req.body
            const product = await service.create(name, description, price, categoryId)
            return res.status(201).json({message: 'Produto criado com sucesso', produto: Product})
        
    }
}