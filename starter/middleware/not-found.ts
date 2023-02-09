import { Response, Request } from "express";

export const notFoundMiddleware = (req: Request, res: Response) : void => {
    res.status(404).send('Route does not exist');
} 