
/////////////// Intro + Using JS in HTML //////////////////

console.log("2.1) Hello from a javascript file!");

function demoChange(){
    document.getElementById('demoJSbutton').innerHTML = '5.1 Changed in a seperate Javascript file (:'
}
demoChange();

function demoBttnChange(){
    document.getElementById('demoJSbutton').innerHTML = '6.1 Button changed me woah'
}


//////////////////// Datatypes and Variables ////////////////////////
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

/////////////////Primative Data Types  vvvvv

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
explaination = "The fourth kind of Primitive Data Types is Undefined values, it is as the name suggests lol"
console.log(notAssigned, explaination);


////////////////Primative Data Types Close ^^^^^

