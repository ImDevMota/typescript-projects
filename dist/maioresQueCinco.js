"use strict";
let arrayA = [];
let arrayB = [];
let arrayC = [];
let indA;
let indB;
let i1;
let i2;
let resltA;
let resltB;
i1 = 0;
i2 = 0;
arrayA.push(10);
arrayA.push(9);
arrayA.push(2);
arrayA.push(6);
arrayA.push(8);
arrayA.push(4);
arrayA.push(0);
arrayA.push(6);
arrayA.push(2);
arrayA.push(1);
arrayB.push(9);
arrayB.push(2);
arrayB.push(7);
arrayB.push(1);
arrayB.push(5);
arrayB.push(12);
arrayB.push(18);
arrayB.push(7);
arrayB.push(4);
arrayB.push(11);
arrayA.forEach(n => {
    indA = arrayA.indexOf(n);
    if (n > 5) {
        if (indA > 0) {
            for (let i = i1 - 1; i >= 0; i--) {
                if (n == arrayA[i]) {
                    resltA = false;
                    break;
                }
                else {
                    resltA = true;
                }
            }
            if (resltA == true) {
                arrayC.push(n);
            }
        }
        else {
            arrayC.push(n);
        }
    }
    i1++;
});
arrayB.forEach(n => {
    indB = arrayB.indexOf(n);
    if (n > 5) {
        if (indB > 0) {
            for (let i = i2 - 1; i >= 0; i--) {
                if (n == arrayB[i]) {
                    resltB = false;
                    break;
                }
                else {
                    resltB = true;
                }
            }
            if (resltB == true) {
                arrayC.push(n);
            }
        }
        else {
            arrayC.push(n);
        }
    }
    i2++;
});
console.log(`os números maiores que 5 dos arrays: [${arrayA}], [${arrayB}],\nsão: [${arrayC}]`);
//# sourceMappingURL=maioresQueCinco.js.map