function exibirPalavraMaisLonga (frase: string): void {
    let palavras: string[]=[];
    palavras = frase.split(" ");
    let letras: string[]=[];
    let tamanhoPalavra: number;
    let tamanhoPalavraMaior: number;
    tamanhoPalavraMaior = 0;
    tamanhoPalavra = 0;

    let palavraMaior: string;
    palavraMaior = '';   

    palavras.forEach(p => {
        tamanhoPalavra = p.length;
        letras = p.split("");

        letras.forEach(l => {
            if(l == '!' || l == '?' || l == '-' || l == '.' || l == '#' || l == '$' || l == '&' || l == '*' || l == '@') {
                tamanhoPalavra = tamanhoPalavra - 1;
            }
        });
        
        if(tamanhoPalavra > tamanhoPalavraMaior) {
            tamanhoPalavraMaior = tamanhoPalavra;
            palavraMaior = p; 
        } 
        
    });
   

    console.log(`A palavra mais longa da frase "${frase}", é: ${palavraMaior}`);
}

exibirPalavraMaisLonga('astralopitecus vivem menos que neandertais');