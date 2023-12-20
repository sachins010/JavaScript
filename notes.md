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






