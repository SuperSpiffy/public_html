//////////////////// JavaScript Operators ////////////////////////
//Arithmetic Operators
var title = "𝗝𝗔𝗩𝗔𝗦𝗖𝗥𝗜𝗣𝗧 𝗢𝗣𝗘𝗥𝗔𝗧𝗢𝗥𝗦"
console.log(title);

const sum = 5 + 3; //Addition
const diff = 10 - 2; //Subtraction
const mult = 4 * 2; //Multiplication
const div = 8 / 2; //Division
explaination = "<<<(solutions of equations shown) The first kind of JavaScript Operators is Arithmetic Operators: These perform methematical clculations lile addition, subtraction, multiplication, and division (and so on)";
console.log(sum, diff, mult, div, explaination);

//Assignment Operators
let assigningOperator = 10;
assigningOperator += 5; //adds 5 to 10
assigningOperator *= 2; //multiplies variable (not 15) by 2 = 30
explaination = "Second kind of JavaScript Operators is Assignment Operators, these are used to assign values to variables (Can also perform math operations while assigning a value).";
console.log(assigningOperator, explaination);

//Comparison Operators
console.log(10 > 5, "Comparison Operator");
console.log(10 === "10", "Comparison Operator");
explaination = "^^^^(above)Third type of JavaScript Operators is Comparison Operators: these compare values and return boolean statements. Useful for making decisions in conditional statements!";
console.log(explaination);

//Logical Operators
const logicalEx = true, LogicalExamp = false;
console.log(logicalEx && LogicalExamp, "Logical Operator"); //Logical AND
console.log(logicalEx || LogicalExamp, "Logical Operator"); //Logical OR
explaination = "^^^^(above)Fourth type of JavaScript Operators is Logical Operators: Mainly used to perform logical operations and determine the equality or difference between values.";
console.log(explaination);

//Bitwise Operators
const res = 5 & 1; //Bitwise AND
explaination = "Fifth kind of JavaScript Operators are Bitwise Operators: These perform operations on binary representations of numbers";
console.log(res, explaination);

//Ternary Operator
const ternAge = 18;
const ternStatus = ternAge >= 18 ? "Adult" : "Minor";
explaination = "The ternary operator (only singular bro) is a shorthand for conditional statements. It takes three operands(= the data or value that an operator acts upon)";
console.log(ternStatus, explaination);









biggestSpace();
function biggestSpace() {
    let bigSpace = "      ";
    console.log(bigSpace);
    console.log(bigSpace);
}