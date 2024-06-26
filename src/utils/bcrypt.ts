import bcrypt from 'bcryptjs'

export const hashPassword = async (password : string)=> {
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(password, salt);
    return hash;
}