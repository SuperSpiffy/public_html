
/////////////// Intro + Using JS in HTML //////////////////
title = "𝗜𝗡𝗧𝗥𝗢 𝗧𝗢 𝗝𝗦";
console.log(title);

console.log("2.1) Hello from a javascript file!");
biggestSpace();


function demoChange(){
    document.getElementById('demoJSbutton').innerHTML = '5.1 Changed in a seperate Javascript file (:'
}
demoChange();

function demoBttnChange(){
    document.getElementById('demoJSbutton').innerHTML = '6.1 Button changed me woah'
}

//lol I'm jogging my memory and I suck plus sheep sucks, so I suck :/// 
//This makes space in console to help sort stuff (:
function biggestSpace(){
    let bigSpace = "      ";
    console.log(bigSpace);
    console.log(bigSpace);
}

//////////////////// Datatypes and Variables ////////////////////////
title = "𝗗𝗔𝗧𝗔𝗧𝗬𝗣𝗘𝗦 𝗔𝗡𝗗 𝗩𝗔𝗥𝗜𝗔𝗕𝗟𝗘𝗦";
console.log(title);

var n = "1.2)" + "  " + "[var] Variable before reassignment";
console.log(n);

var n = "1.2) [var] Variables can be reassigned";
console.log(n);

let m = "2.2) [let] variables can be reassigned, but not in the same scope";
console.log(m)
//value can be updated not redeclared 
//(ex) n = 20 NOT let n = 20

const p = "3.2) [const] variable cannot be updated, reassigned, or redeclared"
console.log(p);
//const p = 10 will throw an error
//p = 20 will throw an error
biggestSpace();

/////////////////Primitive Data Types  vvvvv
//Number/integer value
let firstEx = 42;
let firstExamples = 2.3;
let explaination = "first kind of Primitive Data Types is Numbers / Integer values";
console.log(firstEx, firstExamples, explaination);

//String value
let secondEx = "The second example of a Primitive Data Type is a string value!!";
console.log(secondEx);

//Boolean value (true or false)
let thirdEx = true;
let thirdExamples = false;
explaination = "The third kind of Primitive Data Types are Booleans, which are logical values";
console.log(thirdEx, thirdExamples, explaination);

//Undefined value
let notAssigned;
explaination = "The fourth kind of Primitive Data Types is Undefined values, it is as the name suggests lol";
console.log(notAssigned, explaination);

//Null
let empty = null;
explaination = "The fifth kind of Primitive Data Types is Null, which represents an intentional absence of any value (exists but is empty)";
console.log(empty, explaination);

//Symbol
let sym = Symbol('unique')
explaination = "Sixth kind of Primitive Data Types; Represents unique and immutable(cannot be modified) values, often used as an object keys|||| Symbol datatype creates guaranteed unique identifiers";
console.log(sym, explaination);

//BigInt
let bigNumber = 123456789012345678901234567890n;
explaination = "Seventh and last kind of Primitive Data Types, lowkey the def just says 'Represents integers larger than Number.MAX_SAFE_INTEGER' tbh i think its a data type that just holds really big ass numbers";
console.log(bigNumber, explaination);
////////////////Primitive Data Types Close ^^^^^
biggestSpace();
///////////////Non-Primitive Data Types vvvvvvvvv
//Object
let obj = {
    name: "Amit", 
    age: 25  
};
explaination = "The first type of NON-Primitive Data Types are Objects(NON-Primitive meaning it is more complex and can store more data) Represents key-value pairs || is mutable";
console.log(obj, explaination);

//Array
let a = ["red", "green", "blue"];
explaination = "Second kind of non-Primitive Data Types are Arrays, Arrays represent an ordered list of values (in javascript, these are surrounded by [] brackets.";
exAddition = "||Arrays ARE Objects in Javascript, even if two arrays have the same content, they are still different objects in memory."
console.log(a, explaination, exAddition);

//Functions
function fun(){
    console.log("Lol this is a function");
}
explaination = "^^^^^The third and final non-Primitive Data Type are Functions. These represent reusable blocks of code";
fun();
console.log(explaination);
///////////////Non-Primitive Data Types close ^^^^^^^^
//////////////////// Datatypes and Variables Close ////////////////////////
biggestSpace();

























