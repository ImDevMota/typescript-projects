"use strict";
function terminaCom(palavra, termina) {
    let palavraLt = [];
    let terminaLt = [];
    let index;
    let c;
    let res;
    res = false;
    c = 0;
    palavraLt = palavra.split('');
    terminaLt = termina.split('');
    index = palavraLt.length - terminaLt.length;
    for (let i = index; i <= terminaLt.length; i++) {
        if (palavraLt[i] == terminaLt[c]) {
            res = true;
        }
        else {
            res = false;
            break;
        }
        c++;
    }
    return (`A resposta para se a palavra '${palavra}' termina com '${termina}', é: ${res}`);
}
console.log(terminaCom('academia', 'demia'));
//# sourceMappingURL=terminaCom.js.map