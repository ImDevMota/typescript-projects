"use strict";
function formatString(palavra) {
    let letras = [];
    let letraMaisc;
    let letraMinusc;
    let quantMaisc;
    let quantMinusc;
    quantMaisc = 0;
    quantMinusc = 0;
    letras = palavra.split('');
    letras.forEach(l => {
        letraMaisc = l.toLocaleUpperCase();
        letraMinusc = l.toLocaleLowerCase();
        if (l == letraMaisc) {
            quantMaisc++;
        }
        else if (l == letraMinusc) {
            quantMinusc++;
        }
    });
    if (quantMaisc > quantMinusc) {
        return (`palavra original: ${palavra}, palavara formatada: ${palavra.toLocaleUpperCase()}`);
    }
    else if (quantMaisc < quantMinusc) {
        return (`palavra original: ${palavra}, palavara formatada: ${palavra.toLocaleLowerCase()}`);
    }
    else {
        return (`palavra original: ${palavra}, palavara formatada: ${palavra.toLocaleLowerCase()}`);
    }
}
console.log(formatString('CoDiGo'));
//# sourceMappingURL=formatString.js.map