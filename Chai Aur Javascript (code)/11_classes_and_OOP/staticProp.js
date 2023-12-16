// static Properties

class User {
    constructor(username) {
        this.username = username

    }

    printUsername() {
        console.log(`User Name is ${this.username}`);
    }

    static createId() {
        return console.log(`123`);
    }
}

let asad = new User("Asad Riaz")
// asad.createId() // this object does not have access to `createId` becasue we have used `static` keyword before `createId` method.

class teacher extends User {
    constructor(subject, username) {
        super(username)
        this.subject = subject
    }
}

let myNewTeacher = new teacher("Islamic Studies", "Shahid")

// console.log(myNewTeacher);
// myNewTeacher.printUsername()

myNewTeacher.createId() //it also does not have access to `createId` because we have used `static` keyword before `createId` method.









