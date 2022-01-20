function apresentar(nome){
    return `meu nome é ${nome}`;
}

const apresentarArrow = nome => `meu nome é ${nome}`;
const somar = (num1,num2) => num1+num2;

//Arrow function com +1 linha de instrução

const somaNumerosPequenos = (num1,num2) => {
    if(num1 || num2 >10){
        return "Somento numeros de 1 a 9"
    }else{
        return num1 + num2
    }
}

// Hoisting: arrow function e comporta como expressão de fuction