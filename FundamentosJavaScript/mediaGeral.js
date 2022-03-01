const salaJS = [7,8,8,7,10,6.5,4,10,7]
const salaJava=[6,5,8,9,5,6]
const salaPython = [7,3.5,8,9.5]

function mediaSala(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acumulador, atual) => atual + acumulador, 0)
    return somaDasNotas/notasDaSala.length
}

console.log(`Média da Sala JS ${mediaSala(salaJS)}`)
console.log(`Média da Sala Java ${mediaSala(salaJava)}`)
console.log(`Média da Sala Python ${mediaSala(salaPython)}`)

const notas = [10,6.5,8,7]

const media = notas.reduce((acum, atual)=> atual+ acum, 0) / notas.length

console.log(media)
