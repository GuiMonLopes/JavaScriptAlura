const cliente = {
    nome:"Andre",
    idade: 36,
    cpf: "1234567925",
    email:"andre@email.com"
}


const chaves = ["nome", "idade", "cpf", "email"]
//console.log(cliente[chaves[0]])

chaves.forEach(resp => console.log(cliente[resp]))