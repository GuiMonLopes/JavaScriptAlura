const cliente = {
    nome:"Andre",
    idade: 36,
    cpf: "1234567925",
    email:"andre@email.com",
    fones : ["55587895","123456789"],
    dependentes :[ {
        nome:"Sara",
        parentesco:"filha",
        dataNasc: "30/03/2011"
    }]
}


cliente.dependentes.push({nome:"Samia Maria", parentesco: "filha", dataNasc:"04/01/2014"})

//console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter(resp => resp.dataNasc === "04/01/2014")

console.log(filhaMaisNova[0].nome)
