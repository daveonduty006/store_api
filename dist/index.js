"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const error_handler_1 = require("./middleware/error-handler");
const not_found_1 = require("./middleware/not-found");
dotenv_1.default.config();
// async errors
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// middleware
app.use(express_1.default.json());
// root route
app.get("/", (req, res) => {
    res.send(`
    <h1>Store API</h1>
    <a href="/api/v1/products">
        products route
    </a>
    `);
});
// products route
app.use(not_found_1.notFoundMiddleware);
app.use(error_handler_1.errorHandlerMiddleware);
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // connectDB
        app.listen(port);
        console.log(`Server is listening on port ${port}...`);
    }
    catch (err) {
        console.log(err);
    }
});
start();
