const notas = [10, 9, 8, 7, 6]

const notasAtualizadas = notas.map(resp => resp == 10 ? resp : ++resp)

console.log(notasAtualizadas)