import express from "express";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import {connectDb} from "./config/config.js";
import {errorHandler} from "./utils/utils.js";

//configure env variable
dotenv.config();

const app = express();

//middleware's
app.use(helmet());
app.use(express.json());
app.use(cookieParser());
app.use(errorHandler);


connectDb().then(()=>{
    app.listen(process.env.PORT || 9000, () => {
        console.log(`Server is running at port : ${process.env.PORT}`);
    });
})
    