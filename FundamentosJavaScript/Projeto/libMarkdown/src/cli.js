import { pegaArquivo } from './index.js';
import chalk from 'chalk';
import { validaUrls } from './httpValidacao.js';

const caminho = process.argv;

async function processaTexto(caminhoDoArquivo) {
    const resultado = await pegaArquivo(caminhoDoArquivo[2]);
    if (caminhoDoArquivo[3] === 'validar') {
        console.log(chalk.yellow('Links Validados'), await validaUrls(resultado));
    } else {
        console.log(chalk.yellow('Lista de links'), resultado);
    }
}

processaTexto(caminho);