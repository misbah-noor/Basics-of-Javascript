//*********** datatype conversions**********//
let score = "Misbah"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score) 
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "56" => 56
// "56abc" => NaN (Not a Number) but it's type is a number

// true => 1; false=> 0

let isLoggedIn = "misbah"

let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn);

// 1 => true;  0 => false
// "" => false
// "misbah" => true

let someNumber = 67

let stringNumber = String(someNumber)
console.log(typeof stringNumber);
console.log(someNumber);

