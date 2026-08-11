import { ProductController } from "../controllers/ProductController";
import { Router } from "express";

const router = Router()
const controller = new ProductController()

router.get('/products', controller.list)
router.post('/products', controller.create)

export default router