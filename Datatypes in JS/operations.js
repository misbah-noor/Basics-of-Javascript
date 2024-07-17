//*************operations****************//

let value = 4
let negValue = -value
console.log(negValue);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 3);
// console.log(2 / 3);
// console.log(2 % 3);


let str1 = "misbah"
let str2 = " hello"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log( (3+4) * 5 % 3);
console.log(true);

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

//*********** Postfix increment **********//

let x = 3;
const y = x++;

console.log(x);
console.log(y);
// x => 4; y => 3

let x2 = 3n;
const y2 = x2++;
console.log(x2);
console.log(y2);
// x2 => 4n;  y2 => 3n

//*********** Prefix increment *********//

let a = 3;
const b = ++a;
console.log(a);
console.log(b);
// a => 4; b => 4 

let a1 =3n;
const b2 = ++a1;
console.log(a1);
console.log(b2);
//  a1 => 4n; b2 => 4n
