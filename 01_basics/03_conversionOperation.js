let score = 50
// let score = null // o/p = 0
// let score = undefined // o/p = NaN(Not a Number)
// let score = true // o/p = 1
// let score = false // o/p = 0
// let score = "Sachin"// o/p = NaN-it'll not convert into any Number


console.log(typeof score);// it'll show dataType
console.log(typeof (score));// it'll show dataType

let valueInNumber = Number(score)// Number is dataType to convert the any value of score in number
console.log(typeof valueInNumber);// it'll show dataType
console.log(valueInNumber)// it'll give output

// "50" => 50
// "50abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Sachin" => true

let someNumber = 50

let stringNumber = String(someNumber)
console.log(typeof stringNumber);
console.log(stringNumber);