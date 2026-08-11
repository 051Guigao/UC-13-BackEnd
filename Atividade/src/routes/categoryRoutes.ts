import { Router } from "express";
import { CategoryController } from "../controllers/CategoryController";

const router =  Router()
const controller = new CategoryController()

router.get('/categories', controller.list)
router.post('/categories', controller.create)

export default router