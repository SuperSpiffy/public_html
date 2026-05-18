//////////////////// JavaScript Operators ////////////////////////
//Arithmetic Operators
let title = "𝗝𝗔𝗩𝗔𝗦𝗖𝗥𝗜𝗣𝗧 𝗢𝗣𝗘𝗥𝗔𝗧𝗢𝗥𝗦"
console.log(title);

//Arithmetic Operators
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

//Comma Operator
let n1, n2
const commaRes = (n1 = 1, n2 = 2, n1 + n2);
explaination = "Seventh kind of JavaScript Operators is the Comma Operator: these operators evaluate each of the operands from left to right, then returning the value of the last operand. (The final value is the rightmost value)."
console.log(commaRes, explaination);

//Unary Operators
let unaryEx = 5;

console.log(+unaryEx, "converts a value to a number");
console.log(-unaryEx, "negates a value (changes its sign)");

console.log(++unaryEx, "increments value by 1");
console.log(--unaryEx, "decrements a value by 1");
console.log(typeof(unaryEx), "<< returns datatype");

console.log(!unaryEx, "converts to a boolean and reverses the values (reverts to: true or false)");
explaination = "^^^^^(above)The eigth kind of JavaScript Operators is Unary operators. These operate on a single operand (e.g. incrementing and decrementing)."
console.log(explaination);

//Relational Operators
const relatObj = {length: 10}; //array of one lol
console.log("length" in relatObj);
console.log([] instanceof Array);
explaination = "^^^^^(above)The ninth kind of JavaScript Operators is Relational Operators: these operators are used to compare its operands and determine the relationshop between them via returning a boolean value as the results.";
console.log(explaination);

//BigInt Operators
const big1 = 123456789012345678901234567890n;
const big2 = 987654321098765432109876543210n; 
explaination = "The tenth kind of JavaScript Operators is BigInt Operators: these allow calculations with numbers beyond the safe integer range (basically big ass number bro).";
console.log(big1 + big2, explaination);

//String Operators
const stringOp = "This string" + " " + "Is concatenated! (:";
explaination= " || The eleventh and final kind of JavaScript Operators are String Operators: these inclue concatenation used to join or combine stings with other data types.";
console.log(stringOp, explaination);

//Chaining Operators is weird on the G4G website, so I am not adding it.















biggestSpace();
function biggestSpace() {
    let bigSpace = "      ";
    console.log(bigSpace);
    console.log(bigSpace);
}