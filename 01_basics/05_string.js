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


