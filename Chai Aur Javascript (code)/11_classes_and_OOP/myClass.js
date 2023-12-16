// ES6 is current version of Javascript


// class User {
//     constructor(username, email, password) {
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword() {
//         return `${this.password}abc`
//     }

//     capitalizeUser() {
//         return `${this.username.toUpperCase()}`
//     }
// }

// let hitesh = new User("Hitesh Choudhary", "hitesh@h.com", "abc123?",)
//above email is dummy email
// console.log(hitesh);
// console.log(hitesh.encryptPassword());
// console.log(hitesh.capitalizeUser());

// behind the scene

function User(username, email, password) {
    this.username = username
    this.email = email
    this.password = password

    // this.capitalizeUser = function () {
    //     return `${this.username.toUpperCase()}`
    // }
    //we can also do it outside of constructor function.
}


User.prototype.encryptPassword = function () {
    return `${this.password}abc`
}

// User.prototype.capitalizeUser = function () {
//     return `${this.username.toUpperCase()}`
// }

let hitesh = new User("Hitesh Choudhary", "hitesh@h.com", "abc123?")

// console.log(hitesh);
// console.log(hitesh.encryptPassword());
// console.log(hitesh.capitalizeUser());

// J U S T    T O    P R A C T I C E   `class`

class school {
    constructor(principal, teachers, students, books, furniture, fee) {
        this.principal = principal;
        this.teachers = teachers;
        this.students = students;
        this.books = books;
        this.furniture = furniture;
        this.fee = fee;
    }


    maxFee() {
        return `RS ${this.fee * 4}.`
    }

}

school.prototype.bestStudent = function () {
   return `Asad Riaz was the best student of this school`
}

let mySchool = new school("Riaz Ahmad", 8, 200, 6, "good", 2000)


// console.log(mySchool);
// console.log(mySchool.maxFee());
// console.log(mySchool.bestStudent());