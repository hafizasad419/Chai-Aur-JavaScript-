let userEmail = "hafizasad419@gmail.com"


if (userEmail) {
    // console.log("got user email");
} else {
    // console.log("Didnt get user email");
}


//falsy values
// false, 0, -0, "", BigInt 0n, undefined, null, NaN

//truthy values (all other values than falsy values) some are given below
// " ",  "0",  "false",  [],  {}, function(){}

let myArr = []

if (myArr.length === 0) {
    // console.log("Array is empty");
}


let myObj = {}


if (Object.keys(myObj).length === 0) {
    // console.log("Object is empty");
}


// console.log(false==0); //true
// console.log(false==""); //true
// console.log(""==0); //true


// Nullish Coalescing Operator (??): null, undefined

let myValue;

// myValue = 5 ?? 10
// myValue = null ?? 10
// myValue =    undefined ?? 10
// myValue =    undefined ??  10??  20


// console.log(myValue);


// turnery operator
myName = "Asad"
myName = "Asad" ? console.log("Your Name is Asad") : console.log("Your Name is not Asad");






