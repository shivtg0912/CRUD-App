import express from 'express';
import dotenv from 'dotenv'
import Connection from './database/db.js';
import cors from 'cors';
import router from './routes/route.js';
import bodyParser from 'body-parser';
dotenv.config();
const app = express();
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use('/',router);
const username=process.env.DB_USERNAME;
const pwd=process.env.DB_PASSWORD;
const PORT=8000;
Connection(username,pwd);
app.listen(PORT,()=> console.log(`Server is running successfully on PORT ${PORT}`));
app.listen()    