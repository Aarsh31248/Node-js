console.log("Executing sum file");

// z = "hellow " Cannot initilize a variable without using let,var,const in ES module because of strict-mode
// export let x = "Aarsh Singh";

function calculateSum(a, b) {
  const sum = a + b;
  console.log("Sum :", sum);
}

module.exports = { calculateSum };
// OR
// module.exports.x = x
// module.exports.calculateSum = calculateSum
