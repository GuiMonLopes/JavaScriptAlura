import chalk from 'chalk';
import * as fs from 'node:fs';

function extraiLinks(texto){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultados=[];
    let temp;

    while((temp = regex.exec(texto)) !== null){
        arrayResultados.push({[temp[1]]:temp[2]});
    }

    return arrayResultados.length === 0 ? 'Não há links': arrayResultados ;
}

function trataErro(erro){
    throw new Error(chalk.red(erro.code, 'Não há arquivos no Path'));
}
//async/await

export async function pegaArquivo(caminhoDoArquivo){
    try{
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
        return extraiLinks(texto);
    }catch(e){
        trataErro(e);
    }finally{
        console.log(chalk.yellow("\nOperação Finalizada!"));
    }
}
