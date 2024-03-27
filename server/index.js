import express from 'express';
import router from './routes/route.js';
import cors from 'cors';
import DBconnection  from './database/db.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config();
DBconnection();

app.use(cors());
app.use('/',router);

const PORT= process.env.PORT;




app.listen(PORT,()=> console.log(`server is running on ${PORT}`));