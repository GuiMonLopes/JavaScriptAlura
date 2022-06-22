'use strict'
import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const newUser =  new User('Maria', "m@m.com", "2012-01-01");
// console.log(newUser.exibirInfos());

const newAdmin = new Admin("Amaro", "a@a.com", "2012-01-01")

console.log(newAdmin.nome);

newAdmin.nome = '';

console.log(newAdmin.nome);