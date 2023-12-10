class Lutador {
    nome: string
    vida: number
    ataque: number

    constructor (nome: string, vida: number, ataque: number) {
        this.nome = nome

        if(vida < 0) {
            console.log('o valor de vida deve ser inteiro maior que 0')
            this.vida = -1
        } else {
            this.vida = vida
        }
        
        if(ataque < 0) {
            console.log('o valor de ataque deve ser inteiro maior que 0')
            this.ataque = -1
        } else {
            
            this.ataque = ataque
        }

    }
}

function declararVencedor(lutador1: Lutador, lutador2: Lutador, primeiroAtacar: string) {
    let vida1: number;
    let vida2: number;
    let primeiroAtaque: Lutador;
    let segundoAtaque: Lutador;
    vida1 = 0;
    vida2 = 0;
    primeiroAtaque = lutador1;
    segundoAtaque = lutador2;

    if(primeiroAtacar == lutador1.nome) {
        primeiroAtaque = lutador1;
        segundoAtaque = lutador2;
        vida1 = lutador1.vida
        vida2 = lutador2.vida;
    } else if(primeiroAtacar == lutador2.nome) {
        primeiroAtaque = lutador2;
        segundoAtaque = lutador1;
        vida1 = lutador2.vida;
        vida2 = lutador1.vida
    }

    while(vida1 > 0 && vida2 > 0) {
        vida2 = vida2 - primeiroAtaque.ataque;
        vida1 = vida1 - segundoAtaque.ataque;

        if(vida2 <= 0) {
            console.log(`${primeiroAtaque.nome} ataca ${segundoAtaque.nome}; ${segundoAtaque.nome} agora tem ${vida2} e caiu`)
            console.log(`${primeiroAtaque.nome} ganhou!`);
            
        } else if(vida1 <= 0) {
            console.log(`${primeiroAtaque.nome} ataca ${segundoAtaque.nome}; ${segundoAtaque.nome} agora tem ${vida2}`)
            console.log(`${segundoAtaque.nome} ataca ${primeiroAtaque.nome}; ${primeiroAtaque.nome} agora tem ${vida1} e caiu`)
            console.log(`${segundoAtaque.nome} ganhou!`);
        } else {
            console.log(`${primeiroAtaque.nome} ataca ${segundoAtaque.nome}; ${segundoAtaque.nome} agora tem ${vida2}`)
            console.log(`${segundoAtaque.nome} ataca ${primeiroAtaque.nome}; ${primeiroAtaque.nome} agora tem ${vida1}`)
        }
    }
}

declararVencedor(new Lutador('Ippo', 12, 2), new Lutador('Mashiba', 14, 1), 'Mashiba');