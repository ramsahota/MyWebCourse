let x,y,z;
let timeInMs = Date.now();

let month = new Date();
console.log(month.getMonth());

x=10;
y='10';
z=30;

var newX = x++;
console.log(x, newX);
console.log(x==y);

console.log(`x is ${typeof x}`);
console.log(`y is ${typeof y}`);
console.log(`z is ${typeof z}`);

