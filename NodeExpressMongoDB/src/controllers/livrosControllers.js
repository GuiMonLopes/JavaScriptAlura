import livros from "../models/Livro.js"

class LivroController{
    static listarLivros = (req, resp) =>{
        livros.find((err, livros)=>{
            resp.status(200).json(livros)
        })  
    };
};

export default LivroController