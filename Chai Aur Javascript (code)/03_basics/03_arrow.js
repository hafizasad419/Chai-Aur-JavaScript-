let user = {
    username: "Asad",
    email: "hafizasad419@gmail.com",

    welcomeMessage: function () {
        console.log(`${this.username} , Welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()

// user.username = "Sam"

// user.welcomeMessage()


// console.log(this);


// function chai() {
//     let username = "Asad"
//     console.log(this);
// }

// chai()


// O R

let chai = function () {
    let username = "Asad"
    console.log(this);
}

// chai()

let myFunction = () => {
    let username = "Asad"
    console.log(this);
}

// myFunction()


// let addTwo = (num1, num2) => {
//     return (num1 + num2);
// }

// console.log(addTwo(4, 1))

// let addTwo = (num1, num2) => (num1 + num2);


// console.log(addTwo(4, 1))


// let calculate = (num1, num2) => (num1 + num2)


// console.log(calculate(4,3));


// let myName = "Asad Riaz"
// let myNameFunction = () => (`I am ${myName}`)


// console.log(myNameFunction());


// let me = () => ({ name: "Asad", age: 19, isLoggedIn: true })

// console.log(me());

let myArr = [0, 2, 5]

// If we use curly braces in arrow function, we will need to add "return" keyword, we will not write return keyword in parentheses
// myArr.forEach(() => (`blah blah`))
// myArr.forEach(() => { return `blah blah`})






let myArrFunction = (name) => (console.log(this));

// myArrFunction()
