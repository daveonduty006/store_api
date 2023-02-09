import { NextFunction, Response, Request } from "express";

export const errorHandlerMiddleware = 
    async (err: Error, req: Request, res: Response, next: NextFunction) : Promise<Object> => {
        console.log(err);
        return res.status(500).json( {msg: 'Something went wrong, please try again'} );
    }