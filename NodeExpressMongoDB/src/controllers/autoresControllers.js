import autores from "../models/Autor.js"

class AutorController {
    static listarAutores = (req, resp) => {
        autores.find((err, autores) => {
            resp.status(200).json(autores)
        })
    };

    static listarAutorById = (req, resp) => {
        const { id } = req.params;
        autores.findById(id, (err, autores) => {
            if (err) {
                resp.status(400).send({ message: err.message });
            } else {
                resp.status(200).send(autores);
            }
        });
    };

    static cadastrarAutor = (req, resp) => {
        let autor = new autores(req.body);
        autor.save((err) => {
            if (err) {
                resp.status(500).send({ message: `${err.message} - falha ao cadastrar autor.` });
            } else {
                resp.status(201).send(autor.toJSON());
            }
        })
    };

    static atualizarAutor = (req, resp) => {
        const { id } = req.params;
        autores.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                resp.status(200).send({ message: `Autor atualizado com sucesso` });
            } else {
                resp.status(500).send({ message: err.message });
            }
        });
    }

    static excluirAutor = (req, resp) => {
        const { id } = req.params;
        autores.findByIdAndDelete(id, (err) => {
            if (!err) {
                resp.status(200).send({ message: "Autor excluido com sucesso" });
            } else {
                resp.status(500).send({ message: err.message });
            }
        })

    }

};

export default AutorController