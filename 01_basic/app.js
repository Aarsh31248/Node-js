// require("./xyz");
// import {calculateSum, x} from "./calculate/sum.js"

const { calculateSum, calculateMultiply } = require("./calculate/index");

console.log("Executing App");

let a = 10;
let b = 20;

calculateSum(a, b);
calculateMultiply(a, b);

// console.log("Name :", x);

console.log(global === globalThis);
