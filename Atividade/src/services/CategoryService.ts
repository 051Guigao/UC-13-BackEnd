import { AppDataSource } from "../config/dataSource";
import { Category } from "../models/Category";

const repo = AppDataSource.getRepository(Category)
export class CategoryService{

    async list(){
        return await repo.find()
    }

    async create(name: string){
        if(!name){
            throw new Error('Name is mandatory')
        }

        const category = await repo.create({name})
        await repo.save(category)

        return category
    }
}