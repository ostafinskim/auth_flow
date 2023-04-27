import { TypeOf, object, string } from "zod";

export const createUserSchema = object({
    body: object({
        name: string({ required_error: 'Name is required'}),
        email: string({ required_error: 'Email is required'}).email('Invalid email'),
        password: string({ required_error: 'Password is required' }).min(8, 'Password must have more than 8 characters').max(32, 'Password cannot be longer than 32 characters'),
        passwordConfirm: string({ required_error: 'Please confirm your password' })
    }).refine((data) => data.password === data.passwordConfirm, {
        path: ['passwordConfirm'],
        message: 'Passwords do not match',
    }),
})

export const loginUserSchema = object({
    body: object({
        email: string({required_error: 'Email is required'}).email('Invalid email or password'),
        password: string({ required_error: 'Password is required'}).min(8, 'Invalid email or password')
    })
})

export type CreateUserInput = TypeOf<typeof createUserSchema>;
export type LoginUserInput = TypeOf<typeof loginUserSchema>;