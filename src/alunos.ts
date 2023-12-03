class Aluno {
    nome: string;
    idade: number;
    altura: number;
    sexo: string;

    constructor (nome: string, idade: number, altura: number, sexo: string) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.sexo = sexo;
    }
}

function exibirAlunosMenores(alunos: Aluno[]=[]){
    let media: number;
    let soma: number;
    let alunosMenores: Aluno[]=[];
    soma = 0;

    alunos.forEach(aluno => {
        soma = soma + aluno.altura;
    });

    media = soma/alunos.length;

    alunos.forEach(aluno => {
        if(aluno.idade > 13 && aluno.altura < media) {
            alunosMenores.push(aluno);
        }
    });

    console.log(alunosMenores);
}

function exibirMulherMaior (alunos: Aluno[]=[]) {
    let maiorAltura: number;
    maiorAltura = 0;

    alunos.forEach(aluno => {
        if(aluno.sexo == 'feminino' && aluno.altura > maiorAltura) {
            maiorAltura = aluno.altura;
        }
    });

    return maiorAltura;
}

function exibirHomemMaisNovo (alunos: Aluno[]=[]) {
    let maisNovo: string;
    maisNovo = '';
    let menorIdade: number;
    menorIdade = alunos[0].idade;

    alunos.forEach(aluno => {
        if(aluno.sexo == 'masculino' && aluno.idade < menorIdade) {
            menorIdade = aluno.idade;
        }
    });

    alunos.forEach(aluno => {
        if(aluno.idade == menorIdade) {
            maisNovo = aluno.nome;
        }
    });
    
    return maisNovo;
}

function exibirAlunoEspecifico (alunos: Aluno[]=[]){ 
    let alunoEspecifico: Aluno;
    alunoEspecifico = alunos[0];

    for(let i = 0; i < alunos.length; i++) {
        if(alunos[i].idade % 2 == 0 || alunos[i].altura > 1.90) {
            alunoEspecifico = alunos[i];
            break;
        }
    }

    return alunoEspecifico;
}

let alunos: Aluno[]=[];
alunos.push(new Aluno('Thiago', 19, 1.75, 'masculino'));
alunos.push(new Aluno('Mari', 31, 1.56, 'feminino'));
alunos.push(new Aluno('Natan', 27, 1.70, 'masculino'));
alunos.push(new Aluno('Mauro', 11, 1.55, 'masculino'));
alunos.push(new Aluno('Sergio', 19, 1.71, 'masculino'));
alunos.push(new Aluno('Layla', 19, 1.65, 'feminino'));
alunos.push(new Aluno('Gabriel', 17, 1.91, 'masculino'));


exibirAlunosMenores(alunos);
console.log(exibirMulherMaior(alunos));
console.log(exibirHomemMaisNovo(alunos));
console.log(exibirAlunoEspecifico(alunos));
