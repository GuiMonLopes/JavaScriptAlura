import User from "./User.js";

class Admin extends User {
    constructor(nome, email, nascimento, role = "admin", ativo = true){
        super(nome, email, nascimento, role, ativo);
    }
    criarCurso(nomeDoCurso, numeroDeVagas){
        return `Curso de ${nomeDoCurso} criado com ${numeroDeVagas} vagas`
    }
}

const novoAdmin = new Admin("Rodrigo", "r@r.com", '2021-01-01');
console.log(novoAdmin);
console.log(novoAdmin.criarCurso("JS", 20));