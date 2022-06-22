import User from "./User.js";

export default class Admin extends User {
    constructor(nome,sobrenome, email, nascimento, role = "admin", ativo = true){
        super(nome,sobrenome, email, nascimento, role, ativo);
    }

    // nomeAdmin(){
    //     return `${this.nome}`
    // }

    criarCurso(nomeDoCurso, numeroDeVagas){
        return `Curso de ${nomeDoCurso} criado com ${numeroDeVagas} vagas`
    }

    exibirInfos(){
        return `${this.nome}, ${this.role}`
    }
}

// const novoAdmin = new Admin("Rodrigo", "r@r.com", '2021-01-01');
// console.log(novoAdmin);
// console.log(novoAdmin.criarCurso("JS", 20));