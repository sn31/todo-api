import express from 'express';
import db from './db/db';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/api/v1/todos',(req,res)=>{
    res.status(200).send({
        success:'true',
        message: 'todos retrieved successfully',
        todos: db
    })
});
app.post('/api/v1/todos/:id', (req,res) =>{
    
})
const PORT = 5000;

// creating a server
app.listen(PORT,() =>{
    console.log(`server running on port ${PORT}`)
});