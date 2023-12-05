function calcularQuadrado(n: number, d: number) {

    if(n < 0) {
        return('Error! O valor de N deve ser positivo');

    } else if (d < 0 || d > 9 ){
        return('Error! O valor de D deve ser entre 0 e 9');

    } else {
        let result: string;
        let quant: number;
        let quantidadeFinal: string;
        let quadrado: number;
        let quadradoString: string;
        let quadrados: string[]=[];
        let digitos: string[]=[];
        quantidadeFinal = '';
        result = '';
        quant = 0;

        for(let i = 0; i <= n; i++) {
            quadrado = i*i;
            quadradoString = quadrado.toString();
            quadrados.push(quadradoString);
            digitos = (quadradoString).split('');

            digitos.forEach(dig => {
                if(dig === d.toString()) {
                    quant++
                }
            });
            
            
        }

        quantidadeFinal = quant.toString();

        for(let ct = 0; ct < quadrados.length; ct++){
            if(ct == 0) {
                result = result.concat(quantidadeFinal);
                result = result.concat(' ');
                result = result.concat('(');
                result = result.concat(quadrados[ct]);
                result = result.concat(',');
            } else if(ct == n) {
                result = result.concat(quadrados[ct]);
                result = result.concat(')');
            } else {
                result = result.concat(quadrados[ct]);
                result = result.concat(',');
            }
        }

        return (`a quantidade de vezes que o número ${d} se repete entre os números de 0 a ${n} elevados ao quadrado e os valores desses números são, respectivamente:\n${result}`);
    }
}

console.log(calcularQuadrado(11, 6));