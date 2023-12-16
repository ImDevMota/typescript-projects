function terminaCom (palavra:string, termina:string) {
    let palavraLt: string[]=[];
    let terminaLt: string[]=[];
    let index: number;
    let c: number;
    let res: boolean;
    res = false; 
    c = 0;
    palavraLt = palavra.split('');
    terminaLt = termina.split('');
    index = palavraLt.length - terminaLt.length;

    for(let i = index; i <= terminaLt.length; i++) { 
        if(palavraLt[i] == terminaLt[c]) {
            res = true;
        } else { 
            res = false;
            break;
        }
    c++
    }

    return (`A resposta para se a palavra '${palavra}' termina com '${termina}', é: ${res}`);
}

console.log(terminaCom('academia', 'demia'));