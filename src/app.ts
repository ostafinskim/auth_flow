require('dotenv').config();
import express, { Response } from 'express';
import validateEnv from './utils/validateEnv';
import { PrismaClient } from '@prisma/client';
import redisClient from './utils/connectRedis';

validateEnv();

const prisma = new PrismaClient();
const app = express();

async function start() {
    app.get('/api/check', async (_, res: Response) => {
        const message = await redisClient.get('try');
        res.status(200).json({
            status: 'sucess',
            message,
        });
    });

    const port = process.env.PORT;

    app.listen(port, () => {
        console.log(`Server is running on: http://localhost:${port}`);
    });
}

start()
    .catch((err) => {
        throw err;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
