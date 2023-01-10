import express from "express";
import db from "./config/dbConnect.js"
import livros from "./models/Livro.js"
import routes from "./routes/index.js"


db.on("error", console.log.bind(console, 'Erro de conexão'));
db.once("open", ()=>{
    console.log('Conexão com o banco feita com sucesso.')
});

const app = express();

app.use(express.json());

routes(app);

// const livros = [
//     {id:1, "titulo":"Senhor dos aneis"},
//     {id:2, "titulo":"Guerra dos Tronos"}
// ];


app.get('/livros/:id', (req,resp)=>{
    let index = buscaLivro(req.params.id);
    resp.json(livros[index])
})

app.post('/livros', (req,resp)=>{
    livros.push(req.body);
    resp.status(201).send('Livros foi cadastrado com sucesso.');
});

app.put('/livros/:id', (req,resp)=>{
    let index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    resp.json(livros)
})

app.delete('/livros/:id', (req,resp)=>{
    let {id} = req.params;
    let index = buscaLivro(id);
    livros.splice(index,1);
    resp.send(`Livro ${id} apagado com sucesso!`);
})

function buscaLivro(id){
    return livros.findIndex(livro =>livro.id == id)
}

export default app