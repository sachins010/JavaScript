const userEmail = []

if (userEmail ){
    console.log("Got user Email");
} else(
    console.log("Don't have user Email")
)

// falsy values

//false, 0, -0, BigInt 0n, " ", null, undefined, Nan

// Truthy values

// "0", 'false', " ", [], {}, function(){}


if(userEmail.length === 0){
    console.log(" Array is empty");
}

const emptyobj = {}
if(Object.keys(emptyobj).length === 0){
    console.log("Object is empty");
}


// Nullish Coalescing Operator (??) : null undefined
// this operator check the null safety in our programm/project

let val1
val1 = 5 ?? 10
val2 = null ?? 10
val3 = undefined ?? 15
val4 = null ?? 10 ?? 20

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);

// Terniary Operator

// Sytax = condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");
