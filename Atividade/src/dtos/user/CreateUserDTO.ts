import z from "zod";

export const CreateUserDTO = z.object({
    name: z.string()
        .min(3, "O nome deve conter no mínimo 3 caracteres.")
        .max(100, " O nome deve conter no máximo 100 caracteres."),

    email: z.email("E-mail inválido"),

    password: z.string()
        .min(6, "A senha deve conter pelo menos 6 caracteres.")
        .max(256, "A senha deve conter no máximo 256 caracteres.")
        .regex(/^("?=.*[A-Z]")/, "A senha deve conter uma letra maiúscula")
        .regex(/^(?=.*[a-z])/, "A senha dece conter uma letra minúscula")
        .regex(/^(?=.*[0-9])/, "A senha dece conter um número")
        .regex(/^(?=.*[!@#$%&*_{}\[\]\/~^])/, "A senha dece conter um caractere especial")
})

export type CreateUserDTO = z.infer<typeof CreateUserDTO>