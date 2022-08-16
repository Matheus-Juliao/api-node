import { createTable } from './controler/Pessoa.js';
import  express  from 'express';

const app = express();
app.use(express.json());

createTable();

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.post('/pessoa', (req, res) => {
    //console.log(res);
    console.log(req.body);
    res.json({
        "statusCode": 200
    })
});

app.listen(3000, ()=>console.log("API rodando"));