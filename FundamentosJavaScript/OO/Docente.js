import User from "./User.js";

export default class Docente extends User {
    constructor(nome, email, nascimento, role = "docente", ativo = true){
        super(nome, email, nascimento, role, ativo);
    }

    aprovarEstudante(estudante, curso){
        return `Estudante: ${estudante} aprovado no curso ${curso}`;
    }
}

// const novoDocente = new Docente("Rodrigo", "r@r.com", '2021-01-01');
// console.log(novoDocente);
// console.log(novoDocente.aprovarEstudante("João", "JS"));