let numbs: number[]=[];
let numPar: number[]=[];
let numImpar: number[]=[];
let quest: string | null;
let result: number;

window.alert('Escolha 10 números para uma lista.')
for(let c = 0; c < 10; c++) {
    quest = window.prompt('Insira 1 numero: ');
    result = Number(quest);
    numbs.push(result);

    if(result % 2 == 0) {
        numPar.push(result);
    } else {
        numImpar.push(result); 
    }
}

console.log(`A lista com os números que você escolheu foi: [${numbs}], os números pares dessa lista são: [${numPar}], e os números impares dessa lista são: [${numImpar}]`);