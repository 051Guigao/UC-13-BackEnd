import z from "zod";

export const CreateUserDTO = z.object({
    name: z.string()
        .min(3, "O nome deve conter no mínimo 3 caracteres.")
        .max(100, " O nome deve conter no máximo 100 caracteres."),

    email: z.email("E-mail inválido"),

    password: z.string()
        .min(6, "A senha deve conter pelo menos 6 caracteres.")
        .max(256, "A senha deve conter no máximo 256 caracteres.")
        .regex(\^("?=.*[A-Z]")\)
})