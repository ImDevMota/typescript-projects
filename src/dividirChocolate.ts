function dividirChocolate(n: number, m: number) {
    if(n == 0 || m == 0) {
        return -1;
    } else {
        let res: number;
        res = (n*m) - 1 
        return (`o chocolate de tamanho ${n}x${m}, pode ser dividio ${res} vezes`);
    }
}

console.log(dividirChocolate(2,5));