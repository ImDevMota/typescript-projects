"use strict";
function trocarChar(palavra) {
    let letras = [];
    let index;
    let letrasMod = [];
    let result;
    result = '';
    letras = palavra.split('');
    letrasMod = palavra.split('');
    for (let ct = 0; ct < letras.length; ct++) {
        index = ct;
        if (index != letras.length - 1) {
            for (let c = index + 1; c < letras.length; c++) {
                if (letras[ct] == letras[c] && letrasMod[ct] != ')') {
                    letrasMod.splice(c, 1, ')');
                    for (let cont = 0; cont < letras.length; cont++) {
                        if (letras[c] == letras[cont]) {
                            letrasMod.splice(cont, 1, ')');
                        }
                    }
                    break;
                }
                else if (letrasMod[ct] == ')') {
                    continue;
                }
                else {
                    letrasMod.splice(index, 1, '(');
                }
            }
        }
        else {
            if (letrasMod[ct] != ')') {
                letrasMod.splice(index, 1, '(');
            }
        }
        if (ct != letras.length - 1) {
            result = result.concat(letrasMod[ct]);
            result = result.concat(',');
        }
        else {
            result = result.concat(letrasMod[ct]);
        }
    }
    return (`a palavra "${palavra}" foi formatada com suas letras repetidas trocadas por ")", e as que não se repetem trocadas por "(". O resultado final foi "${result}"`);
}
console.log(trocarChar('ariranha'));
//# sourceMappingURL=trocarChar.js.map