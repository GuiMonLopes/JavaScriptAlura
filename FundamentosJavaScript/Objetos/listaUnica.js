const clientes = [{
    nome: "Andre",
    idade: 36,
    cpf: "1234567925",
    email: "andre@email.com",
    fones: ["55587895", "123456789"],
    dependentes: [{nome: "Sara",parentesco: "filha",dataNasc: "30/03/2011"},
    { nome: "Samia Maria", parentesco: "filha", dataNasc: "04/01/2014" }]
}, {
    nome: "Juliana",
    cpf: "15498756421",
    dependentes: [{
        nome: "Sophia",
        parentesco: "filha",
        dataNasc: "30/06/2020"
    }]
}]



const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes]

console.table(listaDependentes)