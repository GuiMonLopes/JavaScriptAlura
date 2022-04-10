const cliente = {
    nome:"Andre",
    idade: 36,
    cpf: "1234567925",
    email:"andre@email.com",
    fones : ["55587895","123456789"]
}

cliente.dependentes = {
    nome:"Sara",
    parentesco:"filha",
    dataNasc: "30/03/2011"
}

console.log(cliente)

cliente.dependentes.nome = "Sara Silva"

console.log(cliente)


