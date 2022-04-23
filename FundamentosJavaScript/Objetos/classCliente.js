class Cliente {
    constructor(nome, cpf, email, saldo) {
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.saldo = saldo;
    }
    depositar(valor) {
        this.saldo += valor
    }
    exibirSaldo() {
        console.log(this.saldo)
    }
}


const cliente = new Cliente("Andre", "13244657897564", "andre@email.com", 300)

cliente.depositar(200)
cliente.exibirSaldo()

