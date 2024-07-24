const accountId = 145645
let accountEmail = "misbahnoor3252@gmail.com"
var accountPassword = "12345"
accountCity = "Faislabad"     //a variable can also be declared as it sometimes 
let accountState;

// accountId = 2  //not allowed

accountEmail = "mn@mn.com"
accountPassword = "23142"
accountCity = "Lahore"

console.log(accountId);

/* => never use var in your code instead of let because of block and functional scope issues*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


/* const=> can't be re-assigned a value and can't be declared again (block scope)*/
/* let=> can be re-assigned a value but can't be declared again (block scope) */
/* var=> can be re-assigned a value and it can also be declared again (global scope) */