/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the times

*/

let random = Math.random();
console.log(random);

let a = prompt("Enter the first number");
let b = prompt("Enter the Operation");
let c = prompt("Enter the second number");

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
};

if (random > 0.1) {
    console.log(`The result is ${a} ${b} ${c}`);
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`);
} else {
    c = obj[b];
    if (c === "/" && c === 0) {
        alert("Error: Division by zero!");
    } else {
        alert(`The result is ${eval(`${c} ${b} ${a}`)}`);
    }
}
