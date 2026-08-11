import { Request, Response } from 'express';
import { PostService } from '../services/PostService';

const postService = new PostService();

export class PostController {
    async list(req: Request, res: Response) {
        
            return res.json(await postService.list());
        
    }

    async show(req: Request, res: Response) {
        
            return res.json(await postService.show(Number(req.params.id)));
        
    }

    async create(req: Request, res: Response) {
        
            const { title, userId } = req.body;

            const post = await postService.create(title, Number(userId));

            return res.status(201).json(post);
       
    }

    async update(req: Request, res: Response) {
        
            const { title, userId } = req.body;

            const post = await postService.update(
                Number(req.params.id),
                title,
                userId ? Number(userId) : undefined
            );

            return res.json(post);
        
    }

    async delete(req: Request, res: Response) {
      
            await postService.delete(Number(req.params.id));

            return res.status(204).send();
        

            return res.status(500).json({ message: 'Internal server error' });
        }
    }
