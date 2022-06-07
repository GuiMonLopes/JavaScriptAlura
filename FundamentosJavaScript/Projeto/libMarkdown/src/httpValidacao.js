import fetch from 'node-fetch';

export async function validaUrls(arrayDeLinks) {
    const links = geraArrayDeUrls(arrayDeLinks);
    const statusLinks = await checaStatus(links);
    const resultados = arrayDeLinks.map((obj, index) => ({
        ...obj, status: statusLinks[index]
    }));
    return resultados
}

function geraArrayDeUrls(arrayDeLinks) {
    return arrayDeLinks
        .map(resp => Object
            .values(resp).join())
}

async function checaStatus(arrayURLs) {
    try {
        const arrayStatus = await Promise
            .all(arrayURLs
                .map(async url => {
                    const resp = await fetch(url);
                    return `${resp.status} - ${resp.statusText}`;
                }));
        return arrayStatus
    } catch (e) {
        manejaErros(e)
    }
}

function manejaErros(erro) {
    throw new Error(erro.message);
}
