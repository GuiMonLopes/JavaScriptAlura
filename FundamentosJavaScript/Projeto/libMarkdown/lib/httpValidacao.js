"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validaUrls = validaUrls;

require("core-js/modules/es.promise.js");

require("core-js/modules/web.dom-collections.iterator.js");

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

async function validaUrls(arrayDeLinks) {
  const links = geraArrayDeUrls(arrayDeLinks);
  const statusLinks = await checaStatus(links);
  const resultados = arrayDeLinks.map((obj, index) => _objectSpread(_objectSpread({}, obj), {}, {
    status: statusLinks[index]
  }));
  return resultados;
}

function geraArrayDeUrls(arrayDeLinks) {
  return arrayDeLinks.map(resp => Object.values(resp).join());
}

async function checaStatus(arrayURLs) {
  try {
    const arrayStatus = await Promise.all(arrayURLs.map(async url => {
      const resp = await (0, _nodeFetch.default)(url);
      return "".concat(resp.status, " - ").concat(resp.statusText);
    }));
    return arrayStatus;
  } catch (e) {
    manejaErros(e);
  }
}

function manejaErros(erro) {
  throw new Error(erro.message);
}