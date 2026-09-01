import bcrypt from 'bcryptjs'
export async function passwordHash(password:string) {
    const salt = await bcrypt.genSalt(12)
    return await bcrypt.hash(password, salt)
}