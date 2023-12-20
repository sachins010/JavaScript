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