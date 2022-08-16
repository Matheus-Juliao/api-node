import  express  from 'express';
import router from './routes.js';
import { createTable } from './controler/Pessoa.js';
import fs from 'fs';
import https from 'https';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

createTable();

app.listen(3000, ()=>console.log("API rodando"));

https.createServer({
    cert: fs.readFileSync('src/SSL/code.crt'),
    key: fs.readFileSync('src/SSL/code.key')
}, app).listen(3001, ()=> console.log('Rodando em https'));