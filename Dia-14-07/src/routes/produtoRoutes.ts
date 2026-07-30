import { Router } from "express";
import { ProdutoController } from "../controllers/ProdutoController";

const router =  Router()
const controller = new ProdutoController()

router.get('/produtos', controller.getProdutos)
router.post('/produtos', controller.createProduto)
router.put('/produtos/:id', controller.updateProduto)
router.delete('/produtos/:id', controller.deletProduto)

export default router