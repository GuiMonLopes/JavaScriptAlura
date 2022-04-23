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

console.log(Object.keys(cliente))
console.log(Object.values(cliente))
console.log(Object.entries(cliente))

function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj)
    if(propsClientes.includes("dependentes")){
        console.log(`Oferta seguro de vida para ${obj.nome}`)
    }
}

oferecerSeguro(cliente)

