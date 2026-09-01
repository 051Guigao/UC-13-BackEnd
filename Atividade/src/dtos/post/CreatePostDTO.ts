import z from "zod";

export const CreatePostDTO = z.object({
    title: z.string()
        .min(3, "O título deve conter pelo menos 3 caracteres")
        .max(100, "O título deve conter no máximo 100 caracteres"),

    userId: z.number('userId deve ser um número')
        .int('userId deve ser um número inteiro')
        .positive('userId deve ser um número positivo')
})

export type CreatePostDTO = z.infer<typeof CreatePostDTO>