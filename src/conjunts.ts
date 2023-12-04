var vetor1: number []=[];
var vetor2: number []=[];
var vetor3: number []=[];
let question: string | null;
let nb: number;
let newNumber: number;
let res: number;
question = window.prompt('Deseja inserir numero em um vetor? (digite 1 se sim)');
nb = Number(question); 

while(nb == 1 || vetor1.length !== vetor2.length) {

    if(nb !== 1 && vetor1.length == vetor2.length) {
        console.log('Finalizando programa...');
        break;
    } else if(vetor1.length !== vetor2.length && nb !== 1) {
        console.log('Você precisa deixar os vetores com a mesma quantidade de numeros!');
        question = window.prompt('Insira o novo numero: ');
        newNumber = Number(question); 
        question = window.prompt('Deseja adicionar o novo numero no vetor 1 (Digite 1) ou no vetor 2 (Digite 2)?');
        res = Number(question);

        if(res == 1) {
            vetor1.push(newNumber);

            if(newNumber % 2 != 0 && !vetor3.find(num => num == newNumber)) {
                vetor3.push(newNumber);
            }

            vetor2.forEach(n => {
                if(n == newNumber && !vetor3.find(num => num == newNumber)) {
                    vetor3.push(newNumber);
                }
            });    
        } else if (res == 2) {
            vetor2.push(newNumber);

            if(newNumber % 2 != 0 && !vetor3.find(num => num == newNumber)) {
                vetor3.push(newNumber);
            }
    
            vetor1.forEach(n => {
                if(n == newNumber && !vetor3.find(num => num == newNumber)) {
                    vetor3.push(newNumber);
                }
            });
        }
        
    } else if (nb == 1){
        question = window.prompt('Insira o numero: ');
        newNumber = Number(question); 
        question = window.prompt('Deseja adicionar o novo numero no vetor 1 (Digite 1) ou no vetor 2 (Digite 2)?');
        res = Number(question);

        if(res == 1) {
            vetor1.push(newNumber);

            if(newNumber % 2 != 0 && !vetor3.find(num => num == newNumber)) {
                vetor3.push(newNumber);
            }

            vetor2.forEach(n => {
                if(n == newNumber && !vetor3.find(num => num == newNumber)) {
                    vetor3.push(newNumber);
                }
            });    
        } else if (res == 2) {
            vetor2.push(newNumber);

            if(newNumber % 2 != 0 && !vetor3.find(num => num == newNumber)) {
                vetor3.push(newNumber);
            }
    
            vetor1.forEach(n => {
                if(n == newNumber && !vetor3.find(num => num == newNumber)) {
                    vetor3.push(newNumber);
                }
            });
        }
    }

    question = window.prompt('Deseja inserir numero em um vetor? (digite 1 se sim)');
    nb = Number(question); 
}
console.log(vetor1, vetor2)
console.log(vetor3);


