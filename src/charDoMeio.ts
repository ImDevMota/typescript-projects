function charDoMeio(palavra: string) {
    let letras: string[]=[];
    let comp: number;
    let index: number;
    let letraMeio: string[]=[];
    let resultado: string;
    resultado = '';

    letras = palavra.split('');
    comp = letras.length;

    letras.forEach(l => {
        index = letras.indexOf(l);

        if(comp % 2 == 0) {
            if(index == (comp / 2 - 1)) {
                letraMeio.push(l);
                letraMeio.push(letras[index + 1]);
            }
        } else {
            if(index == (comp / 2 - 0.5)) {
                letraMeio.push(l);
            }     
        }
    });

    if(letraMeio.length > 1) {
        resultado = resultado.concat(letraMeio[0], letraMeio[1]);
    } else {
        resultado = letraMeio[0];
    }

    return resultado;
}

console.log(charDoMeio('maratonando'));