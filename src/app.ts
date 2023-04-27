require('dotenv').config();
import express, { NextFunction, Request, Response } from 'express';
import connectDB from './utils/connect.db';
const app = express();

const port = process.env.PORT || 9595;

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    err.status = err.status || 'error';
    err.statusCode = err.statusCode || 500;
  
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  });

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
    connectDB();
})