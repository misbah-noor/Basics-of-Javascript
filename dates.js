// Date: Date is an object in javascript.

let myDate = new Date()
console.log(myDate.toString());
// prints => Wed Jul 17 2024 23:14:14 GMT+0500 (Pakistan Standard Time)


console.log(myDate.toDateString());   //prints => Wed Jul 17 2024

console.log(myDate.toISOString());     //prints => 2024-07-17T18:14:14.843Z

console.log(myDate.toJSON());  //prints => 2024-07-17T18:24:10.655Z

console.log(myDate.toLocaleDateString());  //prints => 7/17/2024

console.log(myDate.toLocaleString());  //prints => 7/17/2024, 11:18:04 PM

console.log(myDate.toLocaleTimeString());  //prints => 11:26:50 PM

console.log(myDate.toUTCString());  //prints => Wed, 17 Jul 2024 18:31:29 GMT

console.log(typeof myDate);   //object



// let myCreatedDate = new Date(2024, 4, 24)   
// let myCreatedDate = new Date(2024, 4, 24, 5, 3) 
// let myCreatedDate = new Date("2024-02-21")

let myCreatedDate = new Date("12-15-2023")
// console.log(myCreatedDate.toLocaleString());  

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());


// `${newDate.getDay()} and the time `

newDate.tolocalString('dfault', {
    weekday: "long",
})

