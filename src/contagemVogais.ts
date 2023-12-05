function contagemVogais (palavra:string) {
    let letras: string[]=[];
    let vogais: number;

    vogais = 0;
    letras = palavra.split('');
    
    letras.forEach(l => {
        if(l == 'a' || l == 'e' || l == 'i' || l == 'o' || l == 'u') {
            vogais++;
        }
    });

    return (`o número de vogais da frase "${palavra}", é: ${vogais}`);
}

console.log(contagemVogais('eu fiz o meu almoço hoje'));
