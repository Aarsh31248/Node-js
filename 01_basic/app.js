// require("./xyz");
// const { x, calculateSum } = require("./sum");

import {calculateSum, x} from "./sum.js"

console.log("Executing App")

let a = 10;
let b = 20;

calculateSum(a, b);
console.log("Name :", x);

console.log(global === globalThis);
