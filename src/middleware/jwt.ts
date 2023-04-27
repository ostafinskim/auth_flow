import jwt, { SignOptions } from 'jsonwebtoken';


export const signJWT = (payload: Object, options: SignOptions = {}) => {
    const privateKey = process.env.ACCESS_TOKEN_PRIVATE_KEY as unknown as string;

    return jwt.sign(payload, privateKey, {
        ...(options && options),
        algorithm: 'RS256'
    })
}

export const verifyJWT = <T>(token: string): T | null => {
    try {
        const publicKey = process.env.ACCESS_TOKEN_PUBLIC_KEY as unknown as string;
        return jwt.verify(token, publicKey) as T;
    } catch (error) {
        return null;
    }
}