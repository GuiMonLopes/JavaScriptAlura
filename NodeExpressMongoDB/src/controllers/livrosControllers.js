import livros from "../models/Livro.js"

class LivroController {
    static listarLivros = (req, resp) => {
        livros.find()
            .populate('autor')
            .exec((err, livros) => {
                resp.status(200).json(livros)
            })
    };

    static listarLivroById = (req, resp) => {
        const { id } = req.params;
        livros.findById(id)
            .populate('autor', 'nome')
            .exec((err, livro) => {
                if (err) {
                    resp.status(400).send({ message: err.message });
                } else {
                    resp.status(200).send(livro);
                }
            });
    };

    static cadastrarLivro = (req, resp) => {
        let livro = new livros(req.body);
        livro.save((err) => {
            if (err) {
                resp.status(500).send({ message: `${err.message} - falha ao cadastrar livro.` });
            } else {
                resp.status(201).send(livro.toJSON());
            }
        })
    };

    static atualizarLivro = (req, resp) => {
        const { id } = req.params;
        livros.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                resp.status(200).send({ message: `Livro atualizado com sucesso` });
            } else {
                resp.status(500).send({ message: err.message });
            }
        });
    }

    static excluirLivro = (req, resp) => {
        const { id } = req.params;
        livros.findByIdAndDelete(id, (err) => {
            if (!err) {
                resp.status(200).send({ message: "Livro excluido com sucesso" });
            } else {
                resp.status(500).send({ message: err.message });
            }
        })

    }

    static listarLivroByEditora = (req,resp)=>{
        const editora = req.query.editora;
        livros.find({'editora': editora}, {}, (err, livros)=>{
           resp.status(200).send(livros);
        })
    }

};

export default LivroController