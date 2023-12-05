"use strict";
function contagemVogais(palavra) {
    let letras = [];
    let vogais;
    vogais = 0;
    letras = palavra.split('');
    letras.forEach(l => {
        if (l == 'a' || l == 'e' || l == 'i' || l == 'o' || l == 'u') {
            vogais++;
        }
    });
    return (`o número de vogais da frase "${palavra}", é: ${vogais}`);
}
console.log(contagemVogais('eu fiz o meu almoço hoje'));
//# sourceMappingURL=contagemVogais.js.map