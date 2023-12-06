function elementosEmComum (arrayString: string[]=[]) {
    let numeros1: string[]=[];
    numeros1 = arrayString[0].split(', ');
    let numeros2: string[]=[];
    numeros2 = arrayString[1].split(', ');
    let numeros3: string[]=[];
    let menorArray: string[]=[];
    let maiorArray: string[]=[];
    let numerosRetirar: string;
    let index: number;
    let numero: string;
    let resultado: string;
    let arrayNumerosRetirar: string[]=[];
    let resultadoFinal: string;
    index = 0;
    numerosRetirar = arrayString[0];
    resultado = arrayString[0];
    resultadoFinal = '';

    if(numeros1.length > numeros2.length) {
        menorArray = numeros2;
        maiorArray = numeros1;
    } else {
        menorArray = numeros1;
        maiorArray = numeros2;
    }

    for(let c = 0; c < menorArray.length; c++){
        for(let i = 0; i < maiorArray.length; i++){
            if(menorArray[c] == maiorArray[i]) {
                numeros3.push(menorArray[c]);
            }
        }
    }

    numeros3.forEach(n => {
        index = numeros3.indexOf(n);
        
        if(index != numeros3.length - 1){
            resultadoFinal = resultadoFinal.concat(n, ', ');
        } else {
            resultadoFinal = resultadoFinal.concat(n);
        }
    });

    console.log(numeros3);

    console.log(`os números das listas [${arrayString[0]}], [${arrayString[1]}] que se repetem são [${resultadoFinal}]`);
}

let arrayString: string[]=[];
arrayString.push('2, 3, 5, 9, 11');
arrayString.push('0, 2, 3, 9, 11, 12');
elementosEmComum(arrayString);