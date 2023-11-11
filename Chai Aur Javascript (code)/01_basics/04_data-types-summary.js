/* Data Types*/ //they are called by values


//1. Primitive Data Types

/*string*/
/*number*/
/*boolean*/
/*null*/
/*undefined*/
/*symbol*/
/*BigInt*/


//2. Non-Primitive Data Types //reference types, they are retrieved by reference.

/*Arrays*/
/*Objects*/
/*functions*/

/*                    =====================================================================                                                                            */




// symbol

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);// output:false coz symbol is always unique

//bigInt

let bigNumber = 9533555n;

//array
const heros = ["Hafiz", "Asad", "Riaz"];

//object
const UserInfo = { name: "asad", age: 19, city: "islamabad", IsLoggedIn: false }

//function
const greetings = function () {
    let myName = "Asad";
    return console.log(`Hello Mister ${myName} `)
}

// greetings(); // prints Hello Mister Asad

// console.log(typeof (heros));  // output: object





/*   T Y P E S     OF      M E M O R Y    I N      J S   */

// First: Stack memory (for primitive data types)


let myName = "Asad"

let yourName = myName

yourName = "Hitesh"

// console.log(myName);   //output: Asad
// console.log(yourName); // output: Hitesh


// Second: Heap memory (for non-primitive data types)
let user1 = {
    name: "Asad",
    email: "hafizasad@gmail.com"
}




let user2 = {
    name: "Hitesh",
    email: "Hitesh@gmail.com"
}
user2 = user1;


//    console.log( user2.email); //output: hafizasad@gmail.com