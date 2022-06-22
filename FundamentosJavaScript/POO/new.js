function User(nome, email){
    this.nome = nome;
    this.email = email;

    this.exibirInfos = function(){
        return `${this.nome}, ${this.email}`
    }
}

//Criando um obj a partir do new
// const novoUser = new User("Guilherme", "g@g.com")
// console.log(novoUser.exibirInfos())

//Criando um obj a partir do Object.create()
// function Admin (role){
//     User.call(this, "Guilherme", "g@g.com");
//     this.role = role || 'estudante';
// }

// Admin.prototype = Object.create(User.prototype)
// const novoUser = new Admin ('admin');
// console.log(novoUser.exibirInfos());
// console.log(novoUser.role)


const user = {
    init: function(nome, email){
        this.nome = nome;
        this.email = nome;
    },

    exibirInfos: function(){
        return this.nome;
    }
}

const newUser = Object.create(user);
newUser.init('Guilherme', "g@g.com");
// console.log(newUser.exibirInfos("Guilherme"))
// console.log(user.isPrototypeOf(newUser))
console.log(newUser.exibirInfos());
