"use strict";
function exibirPalavraMaisLonga(frase) {
    let palavras = [];
    palavras = frase.split(" ");
    let letras = [];
    let tamanhoPalavra;
    let tamanhoPalavraMaior;
    tamanhoPalavraMaior = 0;
    tamanhoPalavra = 0;
    let palavraMaior;
    palavraMaior = '';
    palavras.forEach(p => {
        tamanhoPalavra = p.length;
        letras = p.split("");
        letras.forEach(l => {
            if (l == '!' || l == '?' || l == '-' || l == '.' || l == '#' || l == '$' || l == '&' || l == '*' || l == '@') {
                tamanhoPalavra = tamanhoPalavra - 1;
            }
        });
        if (tamanhoPalavra > tamanhoPalavraMaior) {
            tamanhoPalavraMaior = tamanhoPalavra;
            palavraMaior = p;
        }
    });
    console.log(`A palavra mais longa da frase "${frase}", é: ${palavraMaior}`);
}
exibirPalavraMaisLonga('astralopitecus vivem menos que neandertais');
//# sourceMappingURL=palavraMaisLonga.js.map