"use strict";
let numeros = [];
let n;
for (let c = 0; c < 5; c++) {
    n = window.prompt('insira 1 numero: ');
    let numb;
    numb = Number(n);
    if (numeros.length > 0) {
        numeros.forEach(num => {
            while (numb == num) {
                console.log('Esse número já foi cadastrado, insira outro! ');
                let newNum;
                newNum = window.prompt('insira o novo numero: ');
                numb = Number(newNum);
            }
        });
        numeros.push(numb);
    }
    else {
        numeros.push(numb);
    }
}
console.log('os 5 números que você escolheu que não se repetem são: ', numeros);
//# sourceMappingURL=noRepeat.js.map