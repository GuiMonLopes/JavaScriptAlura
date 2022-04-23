const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "1234567925",
    email: "andre@email.com",
    fones: ["55587895", "123456789"],
    dependentes: [{
        nome: "Sara",
        parentesco: "filha",
        dataNasc: "30/03/2011"
    },
    { nome: "Samia Maria", parentesco: "filha", dataNasc: "04/01/2014" }
    ],
    saldo: 100,
    depositar: function (valor) {
        this.saldo += valor
    }
}


let relatorio = "";

for (let info in cliente) {
    if (typeof cliente[info] === "object" || typeof cliente[info] === "function") {
        continue
    } else {
        relatorio += `
        ${info} ==> ${cliente[info]}
        `
    }
}

console.log(relatorio)





