let nums: number []=[];
let i: number;

nums.push(1);
nums.push(2);
nums.push(6);
nums.push(0);
nums.push(9);
nums.push(7);
nums.push(0);
nums.push(3);
nums.push(0);

nums.forEach(n => {
    if(n == 0) {
        console.log(`Dentre os números escolhidos do array: [${nums}], não deve haver o número 0!`);
        i = nums.indexOf(n);
        nums.splice(i, 1);
    }
});

console.log('resultado final do array: ', {nums :nums});