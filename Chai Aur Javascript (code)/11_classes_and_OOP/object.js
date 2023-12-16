function multiplybyFive(num) {
    return num * 5
}
// console.log(multiplybyFive(10)); // output: 50, as expected.
multiplybyFive.power = 2

console.log(multiplybyFive.power); // output: 2
console.log(multiplybyFive.prototype); //output: empty object

function createUser(userName, loginCount) {
    this.userName = userName;
    this.loginCount = loginCount

    this.decrement = function () {
        return this.loginCount--
    }
}

createUser.prototype.increment = function () {
    this.loginCount++
}

createUser.prototype.printMe = function () {
    console.log(`User Name is ${this.userName} and his login count is ${this.loginCount}`);
}


let Asad = new createUser("Asad", 3);
let Hitesh = new createUser("Hitesh", 10);



Asad.printMe()
Hitesh.printMe()

Asad.increment()
console.log(Asad.loginCount);

Asad.decrement()
console.log(Asad.loginCount);




// P R A C T I C E    P R E P A R A T I O N   B Y   C H A T G P T  .

// User class definition
// function createUser(userName, loginCount, password) {
//     this.userName = userName;
//     this.loginCount = loginCount;
//     this.password = password;

//     this.decrement = function () {
//         return this.loginCount--;
//     };
// }

// createUser.prototype.increment = function () {
//     this.loginCount++;
// };

// createUser.prototype.validatePassword = function (enteredPassword) {
//     return this.password === enteredPassword;
// };

// // Sample usage of the User class
// let Asad = new createUser("Asad", 3, "securePassword");
// let Hitesh = new createUser("Hitesh", 10, "strongPassword");

// console.log(Asad.validatePassword("heyPassword")); // Should be false
// console.log(Hitesh.validatePassword("strongPassword")); // Should be true

// Asad.increment();
// console.log(Asad.loginCount); // Should be 4

// Hitesh.decrement();
// console.log(Hitesh.loginCount); // Should be 9

// Additional features (you can expand on these):
// - Account locking after a certain number of failed login attempts
// - Method to change the user's password
// - Storage and retrieval of user information (in-memory storage, using databases)









// P  R  A  C  T  I  C  E     B   Y     M Y S E L F  


function ValidateUser(userName, password, loginCount) {
    this.userName = userName;
    this.password = password;
    this.loginCount = loginCount

    this.passwordCheck = function (enteredPassword) {
        return this.password === enteredPassword;


    }
}

let harry = new ValidateUser("Harry", "codeWithHarry123", 0)

let result = harry.passwordCheck("codeWithHarry") //Incorrect
result = harry.passwordCheck("codeWithHarry123") //correct


if (result === true) {
    console.log(`Hey ${harry.userName}, Your password is correct`);
    harry.loginCount++
    console.log(`${harry.userName}'s login count is ${harry.loginCount}.`);

} else {
    console.log(`Oops Mr.${harry.userName}, You Entered Incorrect Password`);
}

console.log();// console.log(result);

// read the following

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/



// P R A C T I C I N G   1   M O R E    T I M E     TO    R E W I S E.

let myRecipe = function (ingredient1, ingredient2, ingredient3) {
    this.firstIngredient = ingredient1;
    this.secondIngredient = ingredient2;
    this.thirdIngredient = ingredient3;

    this.getFirstIngredient = function () {
        console.log(`The first ingredient of your recipe is ${this.firstIngredient}`);
    }
}


let myChai = new myRecipe("Milk", "Sugar", "lipton yellow label tea");

myChai.getFirstIngredient()