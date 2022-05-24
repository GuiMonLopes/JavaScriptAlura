import chalk from 'chalk';
import * as fs from 'node:fs';
// const fs = require('node:fs/promises');

function trataErro(erro){
    throw new Error(chalk.red(erro.code, 'Não há arquivos no Path'));
}

//async/await

async function pegaArquivo(caminhoDoArquivo){
    try{
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        console.log(chalk.green(texto))
    }catch(e){
        trataErro(e)
    }finally{
        console.log(chalk.yellow("\nOperação Finalizada!"))
    }
}


// function pegaArquivo(caminhoDoArquivo){
//     const encoding = 'utf-8';
//     fs.promises.readFile(caminhoDoArquivo, encoding)
//     .then((texto)=>console.log(chalk.green(texto)))
//     .catch((erro)=>trataErro(erro));
// }


// function pegaArquivo(caminhoDoArquivo){
//     const encoding = 'utf-8';
//     fs.readFile(caminhoDoArquivo, encoding, function(erro, texto){
//         console.log(caminhoDoArquivo)
//         if(erro){
//             trataErro(chalk.red(erro))
//         }
//         console.log(chalk.green(texto));
//     });
// }


pegaArquivo('./arquivos/text.md')

