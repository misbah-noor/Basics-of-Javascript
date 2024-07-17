const name = "misbah"
const repoCount = 30

// console.log(name + repoCount + " Value");
// use this syntax instead of first one
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName= new String('misbahnoor-com')

console.log(gameName[0]);
console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));  //prints a
console.log(gameName.indexOf('n'));  //prints 6

const newString = gameName.substring(0, 4)
// strats from 0 and end at 4 but not print last one
console.log(newString);


const anotherString = gameName.slice(-9, 5)
//.slice string indicates negative value for reverse counting
console.log(anotherString);

const newStringOne = "  misbah   "
console.log(newStringOne);
console.log(newStringOne.trim());  //.trim() removing the white space and line terminator characters from the string


const url = "https://misbah.com/misbah%20noor"

console.log(url.replace('%20', '-'));

console.log(url.includes('misbah'));
//Returns true if searchString appears as a substring of the result of converting this object to a String, at one or more positions that are greater than or equal to position; otherwise, returns false.

console.log(gameName.split('-'));

//.split  using the specified separator and return them as an array