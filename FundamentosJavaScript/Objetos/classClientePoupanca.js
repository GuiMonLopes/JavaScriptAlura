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

class ClientePoupanca extends Cliente {
    constructor(nome, cpf, email, saldo, saldoPoup) {
        super(nome, cpf, email, saldo)
        this.saldoPoup = saldoPoup
    }

    depositarPoupanca(valor) {
        this.saldoPoup += valor
    }

    exibirSaldoPoupanca() {
        console.log(this.saldoPoup)
    }
}

const cliente2 = new ClientePoupanca("Ju","1316546498","ju@email.com",200,300)

cliente2.depositarPoupanca(100)

cliente2.exibirSaldo()
cliente2.exibirSaldoPoupanca()