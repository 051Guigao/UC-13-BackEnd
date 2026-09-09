import { NextFunction, Request, Response } from "express"
import { UserService } from "../services/UserService"

export class UserController {

    async list(req: Request, res: Response, next: NextFunction) {
        try {
            const users = await UserService.listAll()
            return res.json(users)
        } catch (error) {
            next(error)
        }
    }

    async getById(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id)
            const user = await UserService.getById(id)
            return res.json(user)
        } catch (error) {
            next(error)
        }
    }

    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const { name, email, password } = req.body

            const user = await UserService.create({
                name,
                email,
                password
            })

            return res.status(201).json(user)

        } catch (error) {
            next(error)
        }
    }


    // =========================================================
    // MÉTODO ANTIGO
    // Esse método permitia escolher qual usuário seria atualizado
    // através do id enviado na URL.
    //
    // Isso permitiria, por exemplo:
    //
    // PATCH /users/5
    //
    // Um usuário logado poderia tentar alterar outro usuário
    // simplesmente mudando o id da URL.
    // =========================================================

    /*
    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id)
            const { name, email, password } = req.body

            const user = await UserService.update(id, { name, email, password })

            return res.json(user)
        } catch (error) {
            next(error)
        }
    }
    */


    // =========================================================
    // NOVO MÉTODO
    //
    // Agora NÃO pegamos mais o id pela URL.
    //
    // O id vem do usuário autenticado.
    // Esse usuário foi colocado dentro do req pelo middleware
    // de autenticação depois que o token foi validado.
    //
    // Dessa forma, o usuário só consegue atualizar a própria conta.
    // =========================================================

    async update(req: Request, res: Response, next: NextFunction) {
        try {

            // Pegamos o id que veio do token
            const id = (req as any).user.id

            const { name, email, password } = req.body

            const user = await UserService.updateMe(
                id,
                {
                    name,
                    email,
                    password
                }
            )

            return res.json(user)

        } catch (error) {
            next(error)
        }
    }


    // =========================================================
    // MÉTODO ANTIGO
    // Recebia o id do usuário pela URL.
    //
    // DELETE /users/5
    //
    // Isso não é adequado para a exclusão da própria conta,
    // pois o usuário poderia trocar o id manualmente.
    // =========================================================

    /*
    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id)
            await UserService.delete(id)
            return res.status(204).send()
        } catch (error) {
            next(error)
        }
    }
    */


    // =========================================================
    // NOVO MÉTODO
    //
    // O id do usuário vem do token.
    //
    // Portanto, não precisamos receber nenhum id pela URL.
    //
    // DELETE /users/me
    // =========================================================

    async delete(req: Request, res: Response, next: NextFunction) {
        try {

            // Pegamos o id do próprio usuário autenticado
            const id = (req as any).user.id

            await UserService.deleteMe(id)

            return res.status(204).send()

        } catch (error) {
            next(error)
        }
    }
}