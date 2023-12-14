"use strict";
function ordernarDecrescente(numero) {
    let num;
    let digitos;
    let res;
    let resultadoFinal;
    let index;
    let indexFinal;
    let numMenor;
    let numMaior;
    res = '';
    num = numero.toString();
    digitos = num.split('');
    for (let i = 1; i < digitos.length; i++) {
        digitos.forEach(d => {
            index = digitos.indexOf(d);
            indexFinal = digitos.length - 1;
            numMaior = Number(d);
            if (Number(digitos[indexFinal]) > Number(digitos[0])) {
                numMenor = digitos[0];
                digitos.splice(0, 1, digitos[indexFinal]);
                digitos.splice(indexFinal, 1, numMenor);
            }
            else if (numMaior < Number(digitos[index + 1])) {
                numMenor = d;
                digitos.splice(index, 1, digitos[index + 1]);
                digitos.splice(index + 1, 1, numMenor);
            }
        });
    }
    digitos.forEach(d => {
        res = res.concat(d);
    });
    resultadoFinal = Number(res);
    return (`o número ${numero} ordenado em ordem decrescente fica: ${resultadoFinal}`);
}
console.log(ordernarDecrescente(145263));
//# sourceMappingURL=ordenarDecrescente.js.map