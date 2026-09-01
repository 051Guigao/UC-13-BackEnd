import { AuthController } from "../services/AuthController";
import { Router } from "express";

const router =  Router()
const controller = new AuthController()

router.post('/login', controller.login)

export default router