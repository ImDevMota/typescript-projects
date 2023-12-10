function formatString(palavra: string) {
    let letras: string[]=[];
    let letraMaisc: string;
    let letraMinusc: string;
    let quantMaisc: number;
    let quantMinusc: number;
    quantMaisc = 0;
    quantMinusc = 0;
    letras = palavra.split('');

    letras.forEach(l => {
        letraMaisc = l.toLocaleUpperCase();
        letraMinusc = l.toLocaleLowerCase();

        if(l == letraMaisc) {
            quantMaisc++;
        } else if(l == letraMinusc) {
            quantMinusc++;
        }
    });

    if(quantMaisc > quantMinusc) {
        return (`palavra original: ${palavra}, palavara formatada: ${palavra.toLocaleUpperCase()}`);
    } else if(quantMaisc < quantMinusc) {
        return (`palavra original: ${palavra}, palavara formatada: ${palavra.toLocaleLowerCase()}`);
    } else {
        return (`palavra original: ${palavra}, palavara formatada: ${palavra.toLocaleLowerCase()}`);
    }
}

console.log(formatString('CoDiGo'));