export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento,role, ativo = true){
        this.#nome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || 'estudante';
        this.#ativo = ativo;
    }

    get nome(){
        return this.#nome;
    }

    get email(){
        return this.#email;
    }

    get nascimento(){
        return this.#nascimento;
    }

    get role(){
        return this.#role;
    }

    get ativo(){
        return this.#ativo;
    }

    set nome(novoNome){
        if(novoNome === ''){
            throw new Error('Formato não válido.')
        }
        this.#nome = novoNome
    }

    exibirInfos(){
        return `${this.nome}, ${this.email}`
    }
}

// const newUser = new User("Guilherme", "g@g.com", "2021-01-01");
// console.log(newUser);
// console.log(newUser.exibirInfos())


// console.log(User.prototype.isPrototypeOf(newUser))