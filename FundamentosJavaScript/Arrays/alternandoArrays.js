//media 10, 6.5,8,7.5

// let nota1 = 10
// let nota2 = 6.5
// let nota3 = 8
// let nota4 = 7.5

// const notas = [10,6.5,8,7.5 ]

// let media = (notas[0]+notas[1]+notas[2]+notas[3])/notas.length

// console.log(media)

// notas.push(7);
// console.log(notas);

// notas.pop()
// console.log(notas)

// let media = (notas[0]+notas[1]+notas[2]+notas[3])/notas.length
// console.log(media)

// const nomes = ['Maria', 'Carlos', 'Eduardo', 'Samanta', 'André', 'Fernanda']

// const sala1 =nomes.slice(0,nomes.length/2)
// const sala2 = nomes.slice(nomes.length/2)

// console.log(`Alunos da sala 1: ${sala1}`)
// console.log(`Alunos da sala 2: ${sala2}`)

// const listaChamada = ['Maria', 'Carlos', 'Eduardo', 'Samanta', 'André', 'Fernanda']

// // listaChamada.splice(1, 2, 'Rodrigo')

// listaChamada.splice(2, 0, 'Rodrigo')

// console.log(listaChamada)


// const salaDePython = ['Maria', 'Carlos', 'Eduardo']
// const salaDeJavaScript = ['Samanta', 'André', 'Fernanda']

// const salaConcat = salaDePython.concat(salaDeJavaScript)

// console.log(salaConcat)

// const alunos = ['Maria', 'Carlos', 'Eduardo']
// const mediasAlunos = [10,9,8]

// let listaDeNotasEAlunos=[alunos, mediasAlunos]

// console.log(listaDeNotasEAlunos)

// const exibeNomeNota = (nomeDoAluno) =>{
//     if(listaDeNotasEAlunos[0].includes(nomeDoAluno)){
//         let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
//         return listaDeNotasEAlunos[0][indice] + ' , sua média é '+ listaDeNotasEAlunos[1][indice]
//     }else{
//         return "Aluno não cadastrado"
//     }
// }

// console.log(exibeNomeNota("João"))


// const numeros = [100, 200, 300, 400, 500, 600]

// for (let i = 0; i<numeros.length; i++){
//     console.log(i, numeros[i])
// }

const notas = [ 10,6.5,8,7.5]

let somaDasNotas = 0

// for (let i =0; i<notas.length;i++){
//     somaDasNotas+=notas[i]
// }

notas.forEach(resp=>{
    return somaDasNotas += resp
})

let media = somaDasNotas/notas.length

console.log(media)
