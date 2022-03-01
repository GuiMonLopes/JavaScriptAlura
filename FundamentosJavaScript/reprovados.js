const alunos = ["Ana", "Bia", "João", "Maria"]
const notas = [7, 4.5,8,7.5]

const alunosReprovados = alunos.filter(( _, indice) =>notas[indice] < 5)
console.log(`Reprovados: ${alunosReprovados}`)