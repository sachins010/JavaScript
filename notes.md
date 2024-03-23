hello JavaScript.
-ECMA script has proper js standards
-Basics JS
    - print on console

 #ex.01
 const account_Id = 100
 let account_Email = "sachin123@gmail.com"
 var account_Password = "Sachin@123"
 account_city = "Nashik"

 // account_Id = 200 //Assignment to constant variable.

 account_Email = "sss123@gmail.com"
 account_Password = "sss@123"
 account_city = "Pune"

 console.log(account_Id);

 console.log([account_Email,account_Password,account_city]);
 console.table([account_Email,account_Password,account_city]);


      console.log([account_Email,account_Password,account_city]);//
      this will print on console in Array format
      o/p - [ 'sss123@gmail.com', 'sss@123', 'Pune' ]

      console.table([account_Email,account_Password,account_city]);
      this will print on console in tabular format
       (index) │       Values       │
     ├─────────┼────────────────────┤
     │    0    │ 'sss123@gmail.com' │
     │    1    │     'sss@123'      │
     │    2    │       'Pune'       │
     └─────────┴────────────────────┘

     - variables & datatypes
        1- const, let & var
        2- we can declare variable without datatype but its not a proper way to declare the variables

        let account_state;// undefined
        if we declare the variable without value it'll show the value is undfined

*Note:-
 1) java script engine is in browser
    -alert(3+3) we are using nodeJS not browser

======================================================================================

*** Data Type ***

"use strict"; // treat all js code as newer version
// now a days we do not need to use "use strict"

/*
* Data Types
-number
-bigint
-string => ""
-boolean => true/false
-null => standalone value " its a representation of empty value & we can assign null"
-undefined => value is not assigned
-symbol =>  it use for uniqueness data type
*/


let age = 23 // it's number type
let name = "Sachin"// it's string type
let address = null // it's object type
let married_status = false// it's boolean type
//let new1 = symbol 

console.log(typeof "Sachin");

==========================================================================================

*** Conversion Operation ***

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

====================================================================

*** Comparisions ***

/*
   - We know comparision output in boolean form
   - try to compare the same dataType values 
   - Normal comparision
    console.log(2>1);
    console.log(2>=1);
    console.log(2<1);
    console.log(2<=1);
    console.log(2!=1);
    console.log(2==1);
   
    console.log(2==2); //ture
    console.log("2"==2); //true
    console.log("2"===2); //false

    - while comparision dataType must be same

    - comparision with null value
        console.log(null > 0); // false
        console.log(null == 0);// false
        console.log(null >= 0);// true
    
    - comparision with undefined value
        output always false while comparing the value with undefined value

    - strict comparision
        it checks value with dataType
        console.log("2"==2); //true
        console.log("2"===2); //false - its checking dataType as well
*/

=========================================================================================

*** dataType discussion ***

/*
    primtive & non primtive 

    1) Primtive
        -Number
        -String
        -boolean
        -null
        -undefined
        -symbol
        -bigInt
    
    2) Non-Primtive (Reference type)
        -Array
            let cricketers = ["Sachin","Dhoni","Virat","ROhit"];

        -Object
            let myObj = {
            name : "Sachin",
            age : 22,
            }
         in curly bracket means that is object

        -Function
            const myFunction = function(){
            console.log("Hello in my js function");
}
*/

*** Heap & Stack discussion ***

/*
    - Stack memory used in primtive datatype
    - Heap memory used in Non-primtive datatype
*/

let myYoutubename = "Code with Master"

let anothername = myYoutubename
anothername = "Code with Sachin"

console.log(anothername); // o/p = Code with Sachin
console.log(myYoutubename);// o/p = Code with Master

/*
    - in primtive datatype original value won't change 
    - in stack value dont change because we always get the copy of the value
*/

let userOne = {
    name : "Master",
    age : 22,
    email : "master123@gmail.com",
}

console.log(userOne.email);// o/p = master123@gmail.com


let userTwo = userOne
userTwo.email = "sachin123@gmail.com"

console.log(userTwo.email);// o/p = sachin123@gmail.com
console.log(userOne.email);// o/p = sachin123@gmail.com

/*
   - in Non-primtive or reference type datatype original value get change by changing the value of another variable
     because here we are giving the reference to the another variable
   - in heap section we always get the reference of the value
*/

========================================================================================

*** String ***

const name = "Sachin ";
const run = 110;
//console.log(name + run + " -1st century");// concat the string and number - so called old version to use like this

console.log(`Hello i am ${name.toUpperCase()} and i scored today ${run} runs in my debute match`);
// we use back tick - this is generally string interpolation 

//const NewName = new String("Sachin Shirsath");
//const NewName = new String('Sachin Shirsath');
const NewName = new String(`Sachin Shirsath`);
console.log(NewName);
console.log(NewName.length);
console.log(NewName.toUpperCase());
console.log(NewName.charAt(3));
console.log(NewName.indexOf('h'));

const anotherstring = NewName.substring(0,4);
console.log(anotherstring);
const anotherstring1 = NewName.slice(1,4);// in slice we can give negative values also
console.log(anotherstring1);

const string = '    Sachin    1';
console.log(string);
console.log(string.trim());
console.log(string.trimStart());
console.log(string.trimEnd());

// counting and removing white space
const removeWhiteSpace = string.split(' ').join('');
console.log(string.split(' '));
console.log(removeWhiteSpace.length);
console.log(string.length);
const countWhiteSpace = string.length - removeWhiteSpace.length;
console.log(countWhiteSpace);



const stringOne = 'Sachin-Sanjay-Shirsath';
console.log(stringOne.split('-'));



/*
    " " , ' ' , ` ` :- we can use to represent the String

    *** String Methods ***
    anchor()
    at()
    big()
    blink()
    bold()
    charAt()
    charCodeAt()
    codePointAt()
    concat()
    String()
    endsWith()
    fixed()
    fontcolor()
    fontsize()
    includes()
    indexOf()
    isWellFormed()
    italics()
    lastIndexOf()
    link()
    localeCompare()
    match()
    matchAll()
    normalize()
    padEnd()
    padStart()
    repeat()
    replace()
    replaceAll()
    search()
    slice()
    small()
    split()
    startsWith()
    strike()
    sub()
    substr()
    substring()
    sup()
    toLocaleLowerCase()
    toLocaleUpperCase()
    toLowerCase()
    toString()
    toUpperCase()
    toWellFormed()
    trim()
    trimEnd()
    trimStart()
    trimEnd()
    trimStart()
    valueOf()
*/




=========================================================================================

*** Nums and Maths ***

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

===============================================================================================
*** Date and Time ***

// topic remaining