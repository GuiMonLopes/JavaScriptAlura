import express from "express";

const app = express();

const livros = [
    {id:1, "titulo":"Senhor dos aneis"},
    {id:2, "titulo":"Guerra dos Tronos"}
];

app.get('/',(req,resp)=>{
    resp.status(200).send('Curso de Node');
});

app.get('/livros',(req,resp)=>{
    resp.status(200).json(livros)
});

export default app