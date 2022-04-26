const livros = require('./listaLivros')
const menorValor = require('./ordenaçãoListaPreco')
const troca = require("./troca")

// for (let atual = 0; atual < livros.length -1; atual++) {
//     let menor = menorValor(livros, atual)
//     let livroAtual = livros[atual];
//     console.log("Posição Atual: ", atual)
//     console.log("Livro Atual: ", livros[atual])
//     let livroMenorPreco = livros[menor]
//     console.log("Livro menor: ", livros[menor])

//     livros[atual] = livroMenorPreco
//     livros[menor] = livroAtual
// }

livros.forEach((_,atual)=>{
    let menor = menorValor(livros, atual)
    let livroAtual = livros[atual];
    console.log("Posição Atual: ", atual)
    console.log("Livro Atual: ", livros[atual])
    let livroMenorPreco = livros[menor]
    console.log("Livro menor: ", livros[menor])

    livros[atual] = livroMenorPreco
    livros[menor] = livroAtual


})

console.log(livros)