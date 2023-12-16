let myName = "Asad       ";
let myAge = 19
// console.log(myName.length);
// console.log(myName.trim().length);

// we want to create following prototype
// myName.trueLength()


let myHeros = ["khabib", "islam"];

let heroPower = {
    khabibPower: "Submission",
    islamPower: "Head Kick",

    getKhabibPower: function () {
        console.log(`Khabib's power is ${this.khabibPower}`);
    },
    getIslamPower: function () {
        console.log(`Islam's power is ${this.islamPower}`);
    }


}

// heroPower.getKhabibPower()
// heroPower.getIslamPower()


Object.prototype.asad = function () {
    console.log(`Asad is present in all objects`);
}

// heroPower.asad() //object
// myHeros.asad()   //array
// myName.asad()    //string
// new Symbol.asad() // symbol


// In javascript, almost every data type can behave as object and almost every data type is an object. So `.asad()` will be available to almost all data types.


// now see the starting lines of this code file, let's solve that problem.

myTeacherName = "    Hitesh     "


String.prototype.trueLength = function () {
    console.log(`True Length is ${this.trim().length}.`);
}
// myName.trueLength()         // output: True Length is 4. which is true.
// myTeacherName.trueLength()  // output: True Length is 6. which is true.
