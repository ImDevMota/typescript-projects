let num: number;
let index : number;
var numbers: number[]=[];
numbers.push(0);
numbers.push(-4);
numbers.push(-2);
numbers.push(3);
numbers.push(1);

numbers.forEach(num => {
    if(num >= 0){
        index = numbers.indexOf(num);
        numbers.splice(index,1, 1);
    } else {
        index = numbers.indexOf(num);
        numbers.splice(index,1, -1);
    }
});
console.log(numbers);