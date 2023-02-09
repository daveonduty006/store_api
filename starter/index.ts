import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { errorHandlerMiddleware } from "./middleware/error-handler";
import { notFoundMiddleware } from "./middleware/not-found";


dotenv.config();
// async errors


const app: Express = express();
const port = process.env.PORT || 3000;

// middleware
app.use(express.json());

// root route
app.get("/", (req: Request, res: Response) => {
    res.send(`
    <h1>Store API</h1>
    <a href="/api/v1/products">
        products route
    </a>
    `);
})

// products route


app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);


const start = async () => {
    try{
        // connectDB
        app.listen(port)
        console.log(`Server is listening on port ${port}...`);
    }catch(err){
        console.log(err);
    }
}

start()

