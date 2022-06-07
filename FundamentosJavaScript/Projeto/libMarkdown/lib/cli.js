"use strict";

require("core-js/modules/es.promise.js");

var _index = require("./index.js");

var _chalk = _interopRequireDefault(require("chalk"));

var _httpValidacao = require("./httpValidacao.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const caminho = process.argv;

async function processaTexto(caminhoDoArquivo) {
  const resultado = await (0, _index.pegaArquivo)(caminhoDoArquivo[2]);

  if (caminhoDoArquivo[3] === 'validar') {
    console.log(_chalk.default.yellow('Links Validados'), await (0, _httpValidacao.validaUrls)(resultado));
  } else {
    console.log(_chalk.default.yellow('Lista de links'), resultado);
  }
}

processaTexto(caminho);