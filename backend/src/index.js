import express from "express";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

//configure env variable
dotenv.config();

const app = express();

//middleware's
app.use(helmet());
app.use(express.json());
app.use(cookieParser());


const PORT = 9000 || process.env.PORT;

app.listen(PORT,()=>{
 console.log(`Server is Up and Running On PORT ${PORT}`)
})