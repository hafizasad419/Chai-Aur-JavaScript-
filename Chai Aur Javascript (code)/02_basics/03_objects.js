//objects


// Object.create() //singleton Object

// following is "objects literal" declaration type

// let user = {
//     name: "Asad",
//     age: 19,
//     isLoggedIn: true
// };

// console.log(user.name);
// console.log(user.age);
// console.log(user.isLoggedIn);

// console.log(`${user.name} is ${user.age} years old and ${user.isLoggedIn ? 'is logged in' : 'is not logged in'}`);


let JsUser = {
    name: "Asad Riaz",
    experience: "3 months",
    goal: "full stack developer",
    IsLearningCoding: true,
    LastLoginDays: ["Saturday", "Sunday", "Jumma"]
}

// console.log(`${JsUser.name} having experience of ${JsUser.experience} has a goal to become a ${JsUser.goal} ${JsUser.IsLearningCoding ? 'Is    Learning Coding' : 'Is not Learning Coding'} , he was last logged in on ${JsUser.LastLoginDays[1]}.`); //keep doing this Asad (clapping)


// Accessing objects through square notations is recommended, In following code, I have accessed values of objects with squarre notation.



let cricketer = {
    name: "Jos Buttler",
    "Roll": "Wicket Keeper",
    runs: "2550",
    "centuries": 15
}

// console.log(`${cricketer['name']} is a ${[cricketer['Roll']]} with ${cricketer['runs']} runs and has scored ${cricketer['centuries']} Centuries`);  //yeah, he's such sweetheart


let John_Cena = {
    name: "John Cena",
    age: "38",
    titles: 16,
    favorite: true,
}

// console.log(`${John_Cena['name']}, who is ${John_Cena['age']} years old, has won ${John_Cena['titles']} titles in WWE and ${John_Cena['favorite']
//     ? "Is everyone's favorite" : "Is not everyone's favorite"}`);


let mySym = Symbol("I am symbol key");


let myData = {
    name: "Asad Riaz",
    age: "19",
    Language: "Javascript",
    [mySym]: "symbol value"
}

// console.log(myData);


// myData['name'] = "Hafiz Asad Riaz" // to overwrite or change values of object 
// console.log(myData['name']);


// Object.freeze(myData) // now values in an object can't be changed.





//declaring function in objects:


JsUser.greetings = function () {
    console.log("Hello JS User")
}

// JsUser.greetings();


JsUser.greetings2 = function () {
    console.log(`Hello ${JsUser['name']}`);
}

// JsUser.greetings2();

let mySymbol = Symbol("Symbol Key")

let JsUser2 = {
    name: "Hitesh Choudhary",
    age: 30,
    country: 'india',
    city: 'jaipur',
    LastLoginDays: ["Sunday", "Monday", "Tuesday"],
    occupation: "JavaScript Develepor and Instructor",
    [mySym]: "Symbol Info"

}
// console.log(JsUser2); 

let HiteshInfo = function () {
    console.log(`${JsUser2.name} is ${JsUser2.age} years old. He Lives in ${JsUser2.city}, which is a city of ${JsUser2.country}. He is Very well known and thoroughly professional ${JsUser2.occupation}. He was last online on ${JsUser2.LastLoginDays[1]} and ${JsUser2.LastLoginDays[0]}.`);
}

// HiteshInfo()