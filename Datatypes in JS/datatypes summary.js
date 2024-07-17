//*****Primitive datatype*****//

//types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);


// const bigNumber = 345567732289n


//******Reference (Non primitive)******//

//Array, Objects, Functions

const students = ["Misbah" , "Aleesha", "Mubeen"]

let myobj = {
    name: "Misbah",
    age: 19,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof anotherId);


// ******************************************* //

// Stack (Primitive), Heap (Non-Primitive)

let myEmailid = "misbahnoor3252@gmail.com"

let anotherid = myEmailid

anotherid = "misbah321@gmail.com"

console.log(myEmailid);
console.log(anotherid);

let userOne =  {
    email: "user@google.com",
    age: 19  
}

let userTwo = userOne

userTwo.email = "misbah@google.com"
console.log(userOne.email);
console.log(userTwo.email);

//******** Stack & Heap Memory Concept ********//

const employee = {
    name: 'Misbah',
    age: 19,
  };
   
  const name="Noor"
  // Allocates memory for object in heap.Values 
  // in object are primitive,which is why they 
  // are stored in stack.
   
  function getname(name) {
      return name;
  }
  // The function return value is given to stack after 
  // being evaluated in the heap
   
  const newEmployee = employee;
  // The newEmployee object will be stored in the stack and 
  // it will refer to the employee object in heap

  console.log(employee.name);
  console.log(name);
  console.log(newEmployee.name, newEmployee.age);