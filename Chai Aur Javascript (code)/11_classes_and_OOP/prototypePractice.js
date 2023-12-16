let myName = "Asad";
let myAge = 19;
let amILoggedIn = true;
let mySymbol = Symbol("mySymKey");
let myArr = ["HTML", "CSS", "JavaScript"]

let myObj = {
    skillOne: "HTML",
    skillTwo: "CSS",
    skillThree: "JavaScript",

    myAllSkills: function () {
        console.log(`Currently, My Skills are ${this.skillOne}, ${this.skillTwo} and ${this.skillThree}, `);
    }

}

// myObj.myAllSkills()

//now Injecting another prototype with another method

myObj.myNextSkills = function () {
    console.log(`My next skills to learn are ReactJS, tailwind and NextJs `);
}

// myObj.myNextSkills()


// adding myFvrtLang to all objects.

Object.prototype.myFvrtLang = function () {
    let FvrtLang = "JavaScript";
    console.log(`My Favorite Language is ${FvrtLang}`);
}

// myName.myFvrtLang();
// myAge.myFvrtLang();
// amILoggedIn.myFvrtLang();
// mySymbol.myFvrtLang();
// myArr.myFvrtLang();
// myObj.myFvrtLang();

// myFvrtLang() is accesible to all data types because in JavaScript, every data type can behave as an object.

let teacher = {
    makeVideo: true,

}
let teachingSupprt = {
    isAvailable: false,

}

let VideoEidtor = {
    work: "Editing Videos",
    isGood: true,
    __proto__: teachingSupprt
}

// console.log(VideoEidtor.isGood);

let user = {
    name: "Asad Riaz",
    email: "hafizasad419@gmail.com"
}


// teacher.__proto__ = user //now teacher will have all properties of user

// console.log(teacher.email);

Object.setPrototypeOf(teacher, user) // hey teacher, now u can access all properties of user.

