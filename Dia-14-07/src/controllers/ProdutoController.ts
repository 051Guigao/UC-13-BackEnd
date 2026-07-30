import { Produto, produtos } from "../models/Produto";
import { Response, Request } from "express";
export class ProdutoController{

    createProduto(req: Request, res: Response){
        const {nome, preco, quantidade} = req.body

        if(!nome || !preco || !quantidade){
            return res.status(400).json({message: 'nome, preco, quantidade são obrigatorios'})
        }

        const id = produtos.length === 0 ? 1 : produtos.length +1
        const novoProduto = new Produto(id, nome, preco, quantidade)

        produtos.push(novoProduto)
        return res.status(201).json({message: 'Produto adicionado com sucesso'})
    }

    getProdutos(req: Request, res: Response){
        return res.status(200).json({produtos})
    }

    updateProduto(req: Request, res: Response){
        const {nome, preco, quantidade} = req.body
        const id = Number(req.params.id)

        if(!id || !nome || !preco || !quantidade){
            return res.status(400).json({message: 'id, nome, preco e quantidade são obrigatorios'})
        }

        const produto = produtos.find((produto) => produto.id === id)

        if(!preco){
            return res.status(404).json({message: 'Produto não encontrado'})
        }

        produto?.nome === nome
        produto?.preco === preco
        produto?.quantide === quantidade

        return res.status(200).json({message: 'Produto atualizado com sucesso'})
    }

    deletProduto(req: Request, res: Response){
        const id = Number(req.params.id)

        if(!id){
            return res.status(404).json({message: 'Id não encontrado'})
        }

        const produtoIndex = produtos.findIndex((p) => p.id === id)

        if(produtoIndex === -1){
            return res.status(404).json({message: 'Produto não encontrado'})
        }
        produtos.splice(produtoIndex, 1)
        return res.status(204).send()
    }
}