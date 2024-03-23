const score = 400;

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const anotherNum = 523.5;
console.log(anotherNum.toPrecision(3));

const hundreds = 1000000;
console.log(hundreds.toLocaleString());

//***************** Math ***************


console.log(Math.abs(-5));// this will give you absoulte value whether it is negative value as well 
console.log(Math.round(5.2));// this will roung off the value (if value 5.2 it'll do 5) or (if value 5.7 it'll do 6)
console.log(Math.ceil(5.1));// this ceiling function automatically levelup the value at upper level o/p = 6
console.log(Math.floor(5.6));// o/p = 5

console.log(Math.random());// this will give the number within 0 to 1 (Range - 0 to 1)
console.log(Math.random()*10);// this will give the number between the range of (1 to 10)
console.log(Math.floor(Math.random()*10))
console.log(Math.min(5,8,47,3,9));// this will give minimum value
console.log(Math.max(5,8,47,3,9));// this will give maximum value


// Range between two number
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1 ) + min));

console.log(Math.sqrt(25));// square root of 25 = 5
console.log(Math.pow(5,2));// power 2 of 5 = 25
console.log(Math.pow(5,3));// power 3 of 5 = 125