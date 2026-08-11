import { AppDataSource } from "../config/dataSource";
import { BadRequestError, NotFoundError } from "../errors";
import { Category } from "../models/Category";
import { Product } from "../models/Product";

const repo = AppDataSource.getRepository(Product)
const repoCategory = AppDataSource.getRepository(Category)

export class ProductService{

    async list(){
        const products = await repo.find({
            relations: {category: true},
            order: {id: 'ASC'}
        })
    }
    async create(name: string, description: string, price: number, categoryId: number){
        if(!name || !description || !price || categoryId){
            throw new BadRequestError('Name, description and price is mandatory')
        }

        const category = await repoCategory.findOneBy({id: categoryId})
        if(!category){
            throw new NotFoundError('Category not found')
        }

        const product = await repo.create({
            name,
            description,
            price,
            category
        })

        await repo.save(product)

        return product
    }
}