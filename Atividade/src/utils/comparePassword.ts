import bcrypt from 'bcryptjs'

export async function comparePassword(password:string, passwordHash: string) {
    return await bcrypt.compare(password, passwordHash)
}