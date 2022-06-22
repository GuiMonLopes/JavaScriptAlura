'use strict'
import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const newUser =  new User('Maria', "m@m.com", "2012-01-01");
console.log(newUser.exibirInfos());

const newAdmin = new Admin("Amaro", "a@a.com", "2012-01-01")
console.log(newAdmin.exibirInfos());


// newAdmin.nome = '';

// console.log(newAdmin.nome);

// const novoUser = new User('Juliana', 'Souza', 'j@j.com', '2021-01-01')
// console.log(novoUser.nome) //'Juliana'
// novoUser.nome = 'Juliana Silva Souza'
// console.log(novoUser.nome) //'Juliana'
// console.log(novoUser.sobrenome) //'Silva Souza'