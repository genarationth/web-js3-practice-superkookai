//Arrow function

const add = (a,b)=>a+b;
const subtract = (a,b)=>a-b;
const multiply = (a,b)=>a*b;
const divide = (a,b)=>a/b;

const inform = (firstName,location,hobby) => {
    console.log("Hi, my name is " + firstName + ", I live in " + location + " and enjoy "+hobby);
};

console.log(add(5,6));
console.log(subtract(9,15));
console.log(multiply(7,7));
console.log(divide(97,7));

inform("Kai","Bangkok","drinking wine");