// if - else = check the condition

// const num = 100;

// if (num > 500){
    
//     console.log("Yes num is greater than 50");
// }else{
//     console.log("Yes num is less than 500");
// }

// const userLogin = false;

// if(userLogin){
//     console.log("Login Successfully");
// }else{
//     console.log("Login Failed");
// }

// <, >, <=, >=, ==, !=, ===, !== these comparision operators use to check the condition

// const num1 = 10; // data type - Number
// const num2 = "10";// data type - String

// if (num1 === num2){
//     console.log("Number is same but datatype is different");
// }else{
//     console.log("Number is same and datatype is also same");
// }

// if - else if - else = it checks multiple statements

// let balance = 1300 

// if(balance < 500){
//     console.log("Balance is less than 500");
// }else if(balance < 1000){
//     console.log("Balance is less than 1000");
// }else if(balance < 1200){
//     console.log("Balancen is less than 1200");
// }else{
//     console.log("Balance is less than 2000");
// }


// Multiple statements cheeck

// const userLoggedin = true;
// const debitCard = true;

// if(userLoggedin && debitCard){ 
//     console.log("Allow to buy the course");
// }// Both condition must be true

// const loggedInFromGoogle = true;
// const loggedInFromEmail = true;

// if(loggedInFromGoogle || loggedInFromEmail){
//     console.log("user logged in");
// }// atleast one condition must be true

// Switch Case


const month = 2;

switch (month) {
    case  ("jan" || 1):
        console.log("Jan");
        break;
    case (2 || "feb"):
        console.log("feb");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        
        break;
        
    case 5:
        console.log("May");
        break;

    default:
        console.log("Invalid month");
        break;
}

