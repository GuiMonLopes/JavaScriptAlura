import app from "./src/app.js";

// const http = require("http");
const port = process.env.PORT || 3000;

// const route= {
//     '/': "Curso de Node",
//     '/livros':"Entrei na pagina de livros",
//     '/autores': "Pagina de autores",
//     '/editora': "Pagina de editoras",
//     '/sobre': "Informação sobre o projeto"
// };

// const server = http.createServer((req,res)=>{
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end(route[req.url]);
// });

app.listen(port, ()=>{
    console.log(`Servidor escutando em http://localhost:${port}`);
});