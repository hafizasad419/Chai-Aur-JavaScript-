class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    printEmail() {
        console.log(`Email is ${this.email}`);
    }
}

let asad = new User("hafizasad419@gmail.com", "securePassword")

// asad.printEmail()
// console.log(asad instanceof User); //output: true


class teacher extends User {
    constructor(username, email, password) {
        super(email, password)
        this.username = username
        //super keyword is actually SUPER !! hehe coz it automatically sees the class which is getting extended and goes to that class and fetch us the variables and their values.
        
    }
    
    addCourse() {
        console.log(`This course was added by ${this.username} and his Email is ${this.email}.`);
    }
}
//now teacher has all properties of User.

let myTeacher = new teacher("My Teacher", "teacher@mySchool.com", "strong")

// console.log(myTeacher);
// myTeacher.addCourse()

// console.log(myTeacher instanceof teacher); output: true
// console.log(myTeacher instanceof User); //true, because `teacher` class was extending `User` class which means it was starting from having all functionalities of `User` class and then defining its own properties.


