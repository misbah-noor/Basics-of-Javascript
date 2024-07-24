//  Function Declaration


function greet(name){
    return "Hello, " + name;
}

console.log(greet("Robert"));

// Function expression


const greet1 = function(name){
    return "Hello, " + name;
}
console.log(greet1("Charlie"));


//   Arrow Function

const greet2 = (name) => "Hello, " + name;

console.log(greet2("Misbah"));